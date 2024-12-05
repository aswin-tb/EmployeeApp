from rest_framework import serializers
from django.contrib.auth.models import User
from .models import DynamicForm, Employee

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ["username", "email", "password"]

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)

class DynamicFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = DynamicForm
        fields = ['id', 'user', 'name', 'structure']
        read_only_fields = ['id', 'user']

    def create(self, validated_data):
        validated_data['user'] = self.context['request'].user
        return super().create(validated_data)

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ['id', 'user', 'form', 'data']
        read_only_fields = ['id', 'user']

    def create(self, validated_data):
        validated_data['user'] = self.context['request'].user
        return super().create(validated_data)

    def validate(self, data):
        form_structure = data['form'].structure
        employee_data = data['data']
        
        for field in form_structure:
            if field['label'] not in employee_data:
                raise serializers.ValidationError({"data": f"Missing field: {field['label']}"})
        return data
