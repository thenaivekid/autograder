import json 
from rest_framework import generics
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from .models import User, Assignment, Submission
from .serializers import UserSerializer, AssignmentSerializer, SubmissionSerializer
from .utils import get_score_from_gpt


# User views
class UserListCreateView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

# Assignment views
class AssignmentListCreateView(generics.ListCreateAPIView):
    queryset = Assignment.objects.all()
    serializer_class = AssignmentSerializer

class AssignmentDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Assignment.objects.all()
    serializer_class = AssignmentSerializer

# Submission views
class SubmissionListCreateView(generics.ListCreateAPIView):
    queryset = Submission.objects.all()
    serializer_class = SubmissionSerializer
    
class SubmissionDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Submission.objects.all()
    serializer_class = SubmissionSerializer

# submit solutions
@csrf_exempt
def make_submission(request):
    if request.method == "POST":
        data = json.loads(request.body)
        question = data.get("question")
        clues_to_autograder = data.get("clues_to_autograder")
        answer = data.get("answer")
        student_answer = data.get("student_answer")
        student = int(data.get("student"))
        assignment = int(data.get("assignment"))
        response = get_score_from_gpt(question, clues_to_autograder, answer, student_answer)
        response = json.loads(response)
        marks = response["marks"]
        comment = response["comment"]
        assignment = Assignment.objects.get(id=assignment)
        student = User.objects.get(id=student)
        submission = Submission.objects.create(
            assignment=assignment,
            student=student,
            answer=answer,
            comment= comment,
            marks= marks
        )
        submission.save()
        return JsonResponse(response, safe=True)
    return JsonResponse({"message": "Submission failed"}, safe=True)

@csrf_exempt
def login(request):
    if request.method == "post":
        data = json.loads(request.body)
        username = data.get("username")
        password = data.get("password")

        user = User.objects.filter(username=username, password=password)
        if user:
            response = {"username": user.username, "password": user.password, "id": user.id}
            response = json.loads(response)
            return JsonResponse(response, safe=True)
        return JsonResponse(json.loads({"message": "user not found in db"}), safe=True)
    return JsonResponse(json.loads({"message": "only post request allowed"}), safe=True)


