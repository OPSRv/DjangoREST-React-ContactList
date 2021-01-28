from rest_framework import serializers
from .models import ContactListModel


class ContactListSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactListModel
        fields = '__all__'
