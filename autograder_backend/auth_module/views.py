from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.authentication import SessionAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User, Group


from django.shortcuts import get_object_or_404
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token

from .serializers import UserSerializer, TeacherProfileSerializer, StudentProfileSerializer
from .permissions import IsTeacherPermission, IsStudentPermission
from .models import TeacherProfile, StudentProfile


from django.contrib.auth.models import Group

# Create a teacher group
teacher_group, created = Group.objects.get_or_create(name='teacher')

# Create a student group
student_group, created = Group.objects.get_or_create(name='student')

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

        if role == 'teacher':
            # Create a TeacherProfile for the teacher
            teacher_profile_data = {'user': user.id, 'subjects': request.data['subjects']}
            teacher_profile_serializer = TeacherProfileSerializer(data=teacher_profile_data)
            if teacher_profile_serializer.is_valid():
                teacher_profile_serializer.save()
                user.groups.add(teacher_group)

            else:
                return Response(teacher_profile_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        elif role == 'student':
            # Create a StudentProfile for the student
            student_profile_data = {'user': user.id, 'grade': request.data['grade'], 'section': request.data['section']}
            student_profile_serializer = StudentProfileSerializer(data=student_profile_data)
            if student_profile_serializer.is_valid():
                student_profile_serializer.save()
                user.groups.add(student_group)

            else:
                return Response(student_profile_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        token = Token.objects.create(user=user)
        return Response({'token': token.key, 'user': serializer.data})
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



@api_view(['POST'])
@permission_classes([AllowAny])
def login(request):
    user = get_object_or_404(User, username=request.data['username'])
    if not user.check_password(request.data['password']):
        return Response("missing user", status=status.HTTP_404_NOT_FOUND)
    token, created = Token.objects.get_or_create(user=user)
    serializer = UserSerializer(user)
    return Response({'token': token.key, 'user': serializer.data})

@api_view(['GET'])
@authentication_classes([SessionAuthentication, TokenAuthentication])
@permission_classes([IsAuthenticated])
def test_token(request):
    return Response("passed!")


@api_view(['POST'])
@authentication_classes([SessionAuthentication, TokenAuthentication])
@permission_classes([IsAuthenticated])
def logout(request):
    request.auth.delete()
    return Response({'detail': 'Successfully logged out.'}, status=status.HTTP_200_OK)


@api_view(['GET'])
@authentication_classes([SessionAuthentication, TokenAuthentication])
@permission_classes([IsAuthenticated])
def teachers(request):
    teachers = User.objects.filter(groups__name='teacher')
    teachers = [teacher.username for teacher in teachers]
    return Response({'teachers': teachers}, status=status.HTTP_200_OK)


@api_view(['GET'])
@authentication_classes([SessionAuthentication, TokenAuthentication])
@permission_classes([IsAuthenticated])
def students(request):
    students = User.objects.filter(groups__name='student')
    students = [student.username for student in students]
    return Response({'students': students}, status=status.HTTP_200_OK)

