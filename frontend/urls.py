from django.urls import path, re_path
from .views import index

urlpatterns = [
    path('', index),
    path('add', index),
    re_path('edit/(?P<pk>[0-9]+)$', index),
]
