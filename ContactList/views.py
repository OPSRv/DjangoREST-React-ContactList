from django.shortcuts import render

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
 
from ContactList.models import ContactListModel
from ContactList.serializers import ContactListSerializer
from rest_framework.decorators import api_view

@api_view(['GET', 'POST', 'DELETE'])
def contact_list(request):
    if request.method == 'GET':
        contact = ContactListModel.objects.all()
        
        title = request.query_params.get('title', None)
        if title is not None:
            contact = contact.filter(title__icontains=title)
        
        contact_serializer = ContactListSerializer(contact, many=True)
        return JsonResponse(contact_serializer.data, safe=False)
        # 'safe=False' for objects serialization
 
    elif request.method == 'POST':
        caontact_data = JSONParser().parse(request)
        contact_serializer = ContactListSerializer(data=caontact_data)
        if contact_serializer.is_valid():
            contact_serializer.save()
            return JsonResponse(contact_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(contact_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        count = ContactListModel.objects.all().delete()
        return JsonResponse({'message': '{} ContactListModel were deleted successfully!'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)
 
 
@api_view(['GET', 'PUT', 'DELETE'])
def contact_detail(request, pk):
    try: 
        contact = ContactListModel.objects.get(pk=pk) 
    except ContactListModel.DoesNotExist: 
        return JsonResponse({'message': 'The contact does not exist'}, status=status.HTTP_404_NOT_FOUND) 
 
    if request.method == 'GET': 
        contact_serializer = ContactListSerializer(contact) 
        return JsonResponse(contact_serializer.data) 
 
    elif request.method == 'PUT': 
        contact_data = JSONParser().parse(request) 
        contact_serializer = ContactListSerializer(contact, data=contact_data) 
        if contact_serializer.is_valid(): 
            contact_serializer.save() 
            return JsonResponse(contact_serializer.data) 
        return JsonResponse(contact_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
 
    elif request.method == 'DELETE': 
        contact.delete() 
        return JsonResponse({'message': 'Contact was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)
    
        
@api_view(['GET'])
def contact_list_published(request):
    contacts = ContactListModel.objects.filter(published=True)
        
    if request.method == 'GET': 
        contacts_serializer = ContactListSerializer(contacts, many=True)
        return JsonResponse(contacts_serializer.data, safe=False)