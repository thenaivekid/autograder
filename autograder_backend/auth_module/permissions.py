from rest_framework import permissions
from django.contrib.auth.models import User



class IsTeacherPermission(permissions.BasePermission):
    def has_permission(self, request, view):
        return User.objects.filter(teacherprofile__isnull=False, id=request.user.id) is not None


class IsStudentPermission(permissions.BasePermission):
    def has_permission(self, request, view):
        return User.objects.filter(studentprofile__isnull=False, id=request.user.id) is not None
