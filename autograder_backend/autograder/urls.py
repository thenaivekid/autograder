from django.urls import path
from .views import (
    UserListCreateView, UserDetailView,
    AssignmentListCreateView, AssignmentDetailView,
    SubmissionListCreateView, SubmissionDetailView,
    make_submission,
    login
)

urlpatterns = [
    # User URLs
    path('users/', UserListCreateView.as_view(), name='user-list'),
    path('users/<int:pk>/', UserDetailView.as_view(), name='user-detail'),

    # Assignment URLs
    path('assignments/', AssignmentListCreateView.as_view(), name='assignment-list'),
    path('assignments/<int:pk>/', AssignmentDetailView.as_view(), name='assignment-detail'),

    # Submission URLs
    path('submissions/', SubmissionListCreateView.as_view(), name='submission-list'),
    path('submissions/<int:pk>/', SubmissionDetailView.as_view(), name='submission-detail'),
    path('solution/', make_submission, name="submit_solution"),
    path('login/', login, name="login"),
]
