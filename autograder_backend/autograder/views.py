import json 
from rest_framework import generics
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.views import APIView
from django.http import JsonResponse
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes, parser_classes
from rest_framework.permissions import IsAuthenticated
from .models import Assignment, Submission
from .serializers import AssignmentSerializer, SubmissionSerializer
from .utils import get_score_from_gpt_text, get_score_from_gpt_image
from auth_module.permissions import IsTeacherPermission, IsStudentPermission
from django.contrib.auth.models import User, Group



@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_assignments(request, teacher_id):
    """
    Retrieve a list of assignments for all authenticated users.
    """
    assignments = Assignment.objects.filter(teacher=teacher_id)
    serializer = AssignmentSerializer(assignments, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['POST'])
@permission_classes([IsAuthenticated, IsTeacherPermission])
def create_assignment(request):
    """
    Create a new assignment. Only teachers are allowed to create assignments.
    """
    serializer = AssignmentSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@permission_classes([IsAuthenticated, IsStudentPermission])
def create_submission(request):
    question = request.data.get("question")
    clues_to_autograder = request.data.get("clues_to_autograder")
    answer = request.data.get("answer")
    student_answer = request.data.get("student_answer")
    assignment = int(request.data.get("assignment"))
    response = get_score_from_gpt_text(question, clues_to_autograder, answer, student_answer)
    response = json.loads(response)
    marks = response["marks"]
    comment = response["comment"]
    assignment = Assignment.objects.get(id=assignment)
    student = request.user
    submission = Submission.objects.create(
        assignment=assignment,
        student=student,
        answer=answer,
        comment= comment,
        marks= marks
    )
    submission.save()
    return JsonResponse(response, safe=True)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_submissions(request, assignment_id):
    try:
        submissions = Submission.objects.filter(assignment=assignment_id)
        serializer = SubmissionSerializer(submissions, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Submission.DoesNotExist:
        return Response({'detail': 'Submissions not found for the given assignment ID.'}, status=status.HTTP_404_NOT_FOUND)

@api_view(['POST'])
@parser_classes([MultiPartParser, FormParser])
@permission_classes([IsAuthenticated, IsStudentPermission])
def create_image_submission(request):
    image_file = request.data.get('image')
    print(type(image_file))
    question = request.data.get('question')
    clues_to_autograder = request.data.get('clues_to_autograder')
    answer = request.data.get('answer')
    assignment = int(request.data.get("assignment"))
    # text_input = request.data.get('text_input')
    
    # Post the picture online and get the URL
    image_url = None  # Replace with your actual logic to get the image URL
    
    # response = get_score_from_gpt_image(question, clues_to_autograder, answer, image_url)
    response = None
    return Response(response, status=status.HTTP_200_OK)
