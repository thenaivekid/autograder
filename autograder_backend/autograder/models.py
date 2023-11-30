from django.db import models

# Users model
class User(models.Model):
    ROLES = [
        ('teacher', 'Teacher'),
        ('student', 'Student'),
    ]

    username = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    role = models.CharField(max_length=10, choices=ROLES)

    def __str__(self):
        return self.username

# Assignments model
class Assignment(models.Model):
    teacher = models.ForeignKey(User, on_delete=models.CASCADE)
    question = models.TextField()
    answer = models.TextField()
    clues_to_autograder = models.TextField()

    def __str__(self):
        return f"Assignment {self.id} - {self.question}"

# Submissions model
class Submission(models.Model):
    assignment = models.ForeignKey(Assignment, on_delete=models.CASCADE)
    student = models.ForeignKey(User, on_delete=models.CASCADE)
    answer = models.TextField()
    comment = models.TextField()
    marks = models.IntegerField()

    def __str__(self):
        return f"Submission {self.id} - Assignment {self.assignment.id} by {self.student.username}"
