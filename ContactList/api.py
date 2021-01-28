from .models import ContactListModel
from rest_framework import viewsets
from .serializers import ContactListSerializer


class ContactListViewSet(viewsets.ModelViewSet):
    serializer_class = ContactListSerializer
    queryset = ContactListModel.objects.all()
    # def get_queryset(self):
    #     return self.request.objects.all()
