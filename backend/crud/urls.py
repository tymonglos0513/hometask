from django.urls import path
from . import views

urlpatterns = [
    path("country/", views.CountryListAPIView.as_view(), name="country_list_view"),
    path('country/<int:pk>/', views.GetCountryAPIView.as_view(), name='country_by_id')
]