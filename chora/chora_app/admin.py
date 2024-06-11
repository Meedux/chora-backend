from django.contrib import admin
from .models import CustomerAccount, Folder

# Register your models here.
admin.site.register(CustomerAccount)
admin.site.register(Folder)