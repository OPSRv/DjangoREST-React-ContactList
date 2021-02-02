from rest_framework import serializers
from .models import ContactListModel


class ContactListSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactListModel
        fields = '__all__'



# def put(self,request,pk,format=None):
#     contact=self.get_object(pk)
#     serializer=ContactListSerializer(contact,data=request.data)
#     if serializer.is_valid():
#         serializer.save()
#         return Response(serializer.data,status=status.HTTP_200_OK)
#     return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)