from django.db import models
from django.contrib.auth.models import User

# Assignments model
class Assignment(models.Model):
    teacher = models.ForeignKey(User, on_delete=models.CASCADE)
    question = models.TextField()
    answer = models.TextField()
    clues_to_autograder = models.TextField(blank=True)
    timestamp = models.DateTimeField(auto_now_add=True)
    deadline = models.DateTimeField(auto_now_add=False)

    def __str__(self):
        return f"Assignment {self.id} - {self.question}"

# Submissions model
class Submission(models.Model):
    assignment = models.ForeignKey(Assignment, on_delete=models.CASCADE)
    student = models.ForeignKey(User, on_delete=models.CASCADE)
    answer = models.TextField()
    comment = models.TextField(blank=True)
    marks = models.IntegerField(blank=True)
    timestamp = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to='submission_images/', blank=True, null=True)
    

    def __str__(self):
        return f"Submission {self.id} - Assignment {self.assignment.id} by {self.student.username}"