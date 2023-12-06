from django.urls import re_path,path

from . import views

urlpatterns = [
    re_path('signup', views.signup),
    re_path('login', views.login),
    re_path('logout', views.logout),
    re_path('test_token', views.test_token),
    re_path('teachers', views.teachers),
    re_path('students', views.students),
    re_path('schools', views.schools),
]

