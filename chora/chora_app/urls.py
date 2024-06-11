from django.urls import include, path
from django.contrib import admin
from rest_framework import routers
from . import views

router = routers.SimpleRouter()
router.register(r'notif', views.NotifView, basename="notif")

urlpatterns = [
    path('', views.index, name='index'),
    path('auth/callback', views.auth_callback, name='auth_callback'),
    path('auth', views.auth, name='auth'),
    path('pge/auth', views.pge_auth, name='pge_auth'),
    path('notif', views.NotifView.as_view(), name="notif"),
    path("retrieve", views.retrieve_emails, name="retrieve"),
    path("accounts/queued", views.get_queued_accounts, name="queued_accounts"),
    path("accounts", views.get_accounts, name="get_accounts"),
    path("folder/create", views.create_folder, name="create_folder"),
    path("folder", views.get_folders, name="get_folders"),
    path("account/data", views.get_customer_data, name="get_customer_data"),
    path("account/authorize", views.authorize, name="authorize"),

    # use this for testing purposes only!
    path('admin/', admin.site.urls),
]
