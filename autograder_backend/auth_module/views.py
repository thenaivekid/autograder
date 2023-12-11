from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.authentication import SessionAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from .models import School


from django.shortcuts import get_object_or_404
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token

from .serializers import UserSerializer, TeacherProfileSerializer, StudentProfileSerializer
from .permissions import IsTeacherPermission, IsStudentPermission
from .models import TeacherProfile, StudentProfile

@api_view(['POST'])
@permission_classes([AllowAny])
def signup(request):
    username = request.data['username']
    email = request.data['email']
    password = request.data['password']
    role = request.data['role'].lower()  # Make it lowercase for case-insensitive comparison

    serializer = UserSerializer(data={"username": username, "email": email, "password": password})
    if serializer.is_valid():
        user = serializer.save()
        user.set_password(password)
        user.save()
        school = School.objects.get(id=request.data['school'])
        school.users.add(user)

        if role == 'teacher':
            # Create a TeacherProfile for the teacher
            teacher_profile_data = {'user': user.id, 'subjects': request.data['subjects']}
            teacher_profile_serializer = TeacherProfileSerializer(data=teacher_profile_data)
            if teacher_profile_serializer.is_valid():
                teacher_profile_serializer.save()

            else:
                return Response(teacher_profile_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        elif role == 'student':
            # Create a StudentProfile for the student
            student_profile_data = {'user': user.id, 'grade': request.data['grade'], 'section': request.data['section']}
            student_profile_serializer = StudentProfileSerializer(data=student_profile_data)
            if student_profile_serializer.is_valid():
                student_profile_serializer.save()

            else:
                return Response(student_profile_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        token = Token.objects.create(user=user)
        return Response({'token': token.key, 'user': serializer.data, 'role': role})
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



@api_view(['POST'])
@permission_classes([AllowAny])
def login(request):
    user = get_object_or_404(User, username=request.data['username'])
    if not user.check_password(request.data['password']):
        return Response("missing user", status=status.HTTP_404_NOT_FOUND)
    token, created = Token.objects.get_or_create(user=user)
    serializer = UserSerializer(user)
    try:
        teacher = User.objects.get(teacherprofile__isnull=False, id=user.id)
        return Response({'token': token.key, 'user': serializer.data, "role": "teacher"}, status=status.HTTP_200_OK)
    except:
        student = User.objects.get(studentprofile__isnull=False, id=user.id)
        return Response({'token': token.key, 'user': serializer.data, "role": "student"},status=status.HTTP_200_OK)


@api_view(['GET'])
@authentication_classes([SessionAuthentication, TokenAuthentication])
@permission_classes([IsAuthenticated])
def test_token(request):
    print(request.user)
    try:
        teacher = User.objects.get(teacherprofile__isnull=False, id=request.user.id)
        return Response({"username": teacher.username, "id": teacher.id, "email": teacher.email, "role": "teacher"}, status=status.HTTP_200_OK)
    except:
        student = User.objects.get(studentprofile__isnull=False, id=request.user.id)
        return Response({"username": student.username, "id": student.id, "email": student.email, "role": "student"}, status=status.HTTP_200_OK)
    

@api_view(['POST'])
@authentication_classes([SessionAuthentication, TokenAuthentication])
@permission_classes([IsAuthenticated])
def logout(request):
    request.auth.delete()
    return Response({'detail': 'Successfully logged out.'}, status=status.HTTP_200_OK)


@api_view(['GET'])
@authentication_classes([SessionAuthentication, TokenAuthentication])
@permission_classes([AllowAny])
def teachers(request):
    teachers = User.objects.filter(teacherprofile__isnull=False)
    teachers_data = []

    for teacher in teachers:
        if set(teacher.schools.all()) & set(request.user.schools.all()):
            teacher_username = teacher.username
            teacher_subject = TeacherProfile.objects.get(user=teacher.id).subjects

            teachers_data.append({'username': teacher_username, 'subject': teacher_subject,
            'id': teacher.id
            })

    return Response({'teachers': teachers_data}, status=status.HTTP_200_OK)


@api_view(['GET'])
@authentication_classes([SessionAuthentication, TokenAuthentication])
@permission_classes([IsAuthenticated])
def students(request):
    students = User.objects.filter(studentprofile__isnull=False)
    students = [student.username for student in students if set(student.schools.all()) & set(request.user.schools.all())]
    return Response({'students': students}, status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes([AllowAny])
def schools(request):
    schools = School.objects.all()
    schools = [{"name": school.name, "id": school.id} for school in schools]
    return Response({'schools': schools}, status=status.HTTP_200_OK)