from django.contrib import admin
from .models import User, Assignment, Submission

admin.site.register(Assignment)
admin.site.register(Submission)
