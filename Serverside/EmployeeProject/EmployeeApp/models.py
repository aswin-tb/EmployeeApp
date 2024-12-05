from django.db import models
from django.contrib.auth.models import User

class DynamicForm(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100, unique=True)  # Form name
    structure = models.JSONField()  # Store form fields as JSON

    def __str__(self):
        return self.name

class Employee(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    form = models.ForeignKey(DynamicForm, on_delete=models.CASCADE)
    data = models.JSONField()  # Store employee data as JSON

    def __str__(self):
        return f"Employee {self.id} - {self.user.username}"
