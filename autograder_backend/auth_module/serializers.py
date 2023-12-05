from rest_framework import serializers
from django.contrib.auth.models import User
from .models import TeacherProfile, StudentProfile

class UserSerializer(serializers.ModelSerializer):
    class Meta(object):
        model = User 
        fields = ['id', 'username', 'password', 'email']
        

class TeacherProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeacherProfile
        fields = ['user', 'subjects']

    def create(self, validated_data):
        user = validated_data.pop('user')
        subjects = validated_data.pop('subjects')
        teacher_profile = TeacherProfile.objects.create(user=user, subjects=subjects)
        return teacher_profile

class StudentProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentProfile
        fields = ['user', 'grade', 'section']

    def create(self, validated_data):
        user = validated_data.pop('user')
        grade = validated_data.pop('grade')
        section = validated_data.pop('section')
        student_profile = StudentProfile.objects.create(user=user, grade=grade, section=section)
        return student_profile