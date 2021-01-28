
from rest_framework import routers
from .api import ContactListViewSet

router = routers.DefaultRouter()
router.register('api/contacts', ContactListViewSet, "ContactListSet")

urlpatterns = router.urls


ContactListViewSet