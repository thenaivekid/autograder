from rest_framework import serializers
from .models import User, Assignment, Submission

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username','email', 'password', 'role']

class AssignmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Assignment
        fields = ['id', 'teacher', 'question', 'answer', 'clues_to_autograder', 'timestamp', 'deadline']

class SubmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Submission
        fields = ['id', 'assignment', 'student', 'answer', 'comment', 'marks', 'timestamp']
