from rest_framework import viewsets
from rest_framework import permissions
from .serializers import ContactListSerializer


class ContactListViewSet(viewsets.ModelViewSet):
    contact_list = ContactListSerializer.objects().all()
    serializer_class = ContactListSerializer
