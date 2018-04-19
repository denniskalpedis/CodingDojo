from __future__ import unicode_literals
import re
from django.db import models

# Create your models here.
class UserManager(models.Manager):
    def registration_validation(self, data):
        errors = []
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        return errors
    def login_validation(self, data):
        errors = []
        if self.filter(email=data['email']).count() < 1:
            errors.append("EMail not registered!")
        return errors

class Users(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField(max_length=255, unique=True)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()