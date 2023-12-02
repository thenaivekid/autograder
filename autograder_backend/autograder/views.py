import json 
from rest_framework import generics
from rest_framework.parsers import MultiPartParser
from django.http import JsonResponse
from rest_framework.response import Response
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
    parser_classes = [MultiPartParser]

    def post(self, request, *args, **kwargs):
        serializer = SubmissionSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)

        return Response(serializer.errors, status=400)

    
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
def login_(request):
    print(request.method)
    if request.method == "POST":
        data = json.loads(request.body)
        print(data)
        email = data.get("email")
        password = data.get("password")

        user = User.objects.get(email=email, password=password)
        if user:
            response = {"username": user.username, "password": user.password, "id": user.id, "role": user.role}
            return JsonResponse(response, safe=False)
        return JsonResponse({"message": "user not found in db"}, safe=False)
    return JsonResponse({"message": "only post request allowed"}, safe=False)


@csrf_exempt
def get_teachers(request):
    teachers = User.objects.filter(role='teacher')

    serialized_teachers = [{"username": teacher.username, "subject": teacher.subject,"id":teacher.id } for teacher in teachers]
    
    return JsonResponse( serialized_teachers, safe=False)



    # class ImageTextView(APIView):
    # parser_classes = (MultiPartParser, FormParser)

    # def post(self, request, *args, **kwargs):
    #     # Accessing the uploaded image
    #     image_file = request.data.get('image')
    #     print(type(image_file))
    #     # Accessing the text input
    #     text_input = request.data.get('text_input')
    #     print(text_input)
    #     # Your processing logic with the image and text goes here
    #     # For example, you can save the image, perform some analysis, etc.

    #     # Placeholder response - you can customize this based on your needs
    #     response_data = {
    #         'message': 'Image and text received successfully.',
    #         'text_input': text_input
    #         # You can add more fields to the response based on your processing
    #     }

    #     return Response(response_data, status=status.HTTP_200_OK)
	
