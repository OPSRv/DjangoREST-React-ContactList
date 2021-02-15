from django.urls import path, re_path
from .views import index

urlpatterns = [
    path('', index),
    path('add', index),
    path('authorization', index),
    path('authorization/sing-up', index),
    re_path('edit', index),
]
