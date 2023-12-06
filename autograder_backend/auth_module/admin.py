from django.contrib import admin

from .models import TeacherProfile, StudentProfile, School



@admin.register(TeacherProfile)
class TeacherProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'subjects')

@admin.register(StudentProfile)
class StudentProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'grade', 'section')
    
@admin.register(School)
class SchoolAdmin(admin.ModelAdmin):
    list_display = ('name',)