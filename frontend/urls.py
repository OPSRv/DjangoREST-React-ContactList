from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('add', index),
    path('authorization/', index),
    path('authorization/sing-in', index),
    path('authorization/sing-up', index),
    path('edit', index),
    path('contact', index),
    
]
