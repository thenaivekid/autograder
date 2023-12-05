from rest_framework import permissions
from .models import TeacherProfile


class IsTeacherPermission(permissions.BasePermission):
    def has_permission(self, request, view):
        return request.user.groups.filter(name='teacher').exists()

class IsStudentPermission(permissions.BasePermission):
    def has_permission(self, request, view):
        return request.user.groups.filter(name='student').exists()