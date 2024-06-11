from django.db import models
import uuid

# Create your models here.
class CustomerAccount(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    email = models.EmailField()
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=15)
    folder = models.ForeignKey('Folder', on_delete=models.CASCADE, null=True)
    auth_token = models.CharField(max_length=100, default="")
    authorized = models.BooleanField(default=False)

class Folder(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100)
    user_id = models.CharField(max_length=100)
    last_modified = models.DateTimeField(auto_now=True)
