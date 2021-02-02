
# from rest_framework import routers
# from .api import ContactListViewSet

# router = routers.DefaultRouter()
# router.register('api/contacts', ContactListViewSet, "ContactListSet")

# urlpatterns = router.urls


from django.urls import path, include, re_path
from ContactList import views 
 
urlpatterns = [ 
    re_path(r'^api/contacts$', views.contact_list),
    re_path(r'^api/contacts/(?P<pk>[0-9]+)$', views.contact_detail),
    re_path(r'^api/contacts/published$', views.contact_list_published)
]