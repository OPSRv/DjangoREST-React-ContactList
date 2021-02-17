from django.urls import path
from authorization.views import MyObtainTokenPairView, RegisterView
from rest_framework_simplejwt.views import TokenRefreshView
from django.conf.urls import url

from .views import CustomObtainAuthToken

urlpatterns = [
    path('login/', MyObtainTokenPairView.as_view(), name='token_obtain_pair'),
    path('login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', RegisterView.as_view(), name='auth_register'),
    path('authenticate/', CustomObtainAuthToken.as_view(), name='authenticate_id'),
]



