from django.db import models
from django.contrib.auth.models import User 

class School(models.Model):
    name = models.CharField(max_length=64)
    users = models.ManyToManyField(User, related_name='schools', blank=True)

    def __str__(self) -> str:
        return self.name
    
    
class TeacherProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    subjects = models.CharField(max_length=255)
    

class StudentProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    grade = models.IntegerField()
    section = models.CharField(max_length=1)
