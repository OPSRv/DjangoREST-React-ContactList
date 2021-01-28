from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('contact', index),
    # path('create', index),
    # path('join/1', index),
    # path('ops', index)
]
