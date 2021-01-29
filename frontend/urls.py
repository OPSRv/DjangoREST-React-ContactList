from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('ops', index),
    path('add', index),
    path('edit', index),
]
