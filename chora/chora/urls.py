from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('chora_app.urls')),
    path("accounts/", include("accounts.urls")),  # new
    path("accounts/", include("django.contrib.auth.urls")),
]
