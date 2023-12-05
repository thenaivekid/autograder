from django.urls import path
from .views import (
    get_assignments,
    create_assignment,
    get_submissions,
    create_submission,
    create_image_submission,
)

urlpatterns = [
    path('assignments/<int:teacher_id>/', get_assignments),
    path('assignments/create/', create_assignment),
    
    path('submissions/<int:assignment_id>/', get_submissions),
    path('submissions/create/', create_submission),
    path('submissions/create/image/', create_image_submission),

]
