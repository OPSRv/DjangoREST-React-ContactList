from django.contrib import admin
from django.urls import path, include, re_path

from rest_framework.authtoken.views import obtain_auth_token


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('frontend.urls')),
    re_path(r'^', include('ContactList.urls')),
    	#path to djoser end points
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('auth/token/', obtain_auth_token, name='token'),
]
