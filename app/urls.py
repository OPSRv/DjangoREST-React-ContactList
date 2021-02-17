from django.contrib import admin
from django.urls import path, include, re_path


urlpatterns = [
    path('jet/', include('jet.urls', 'jet')),
    path('admin/', admin.site.urls),
    path('', include('frontend.urls')),
    re_path(r'^', include('ContactList.urls')),
    path('auth/', include('authorization.urls')),
]
