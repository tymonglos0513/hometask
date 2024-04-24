from django.db.models import Q
from rest_framework import status
from rest_framework.generics import ListAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from . import serializers
from .models import Country

class CountryListAPIView(APIView):

    def get_queryset(self):
        return Country.objects.all()

    def get(self, request):
        try:
            queryset = self.get_queryset()
            serialized_list = serializers.CountrySerializer(queryset, many=True)
            return Response(
                {"data": serialized_list.data},
                status=status.HTTP_200_OK,
            )
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def post(self, request):
        try:
            name = request.POST.get("name")
            countrycode = request.POST.get("countrycode")
            capital = request.POST.get("capital")
            population = request.POST.get("population")
            languages = request.POST.get("languages")
            timezone = request.POST.get("timezone")
            currency = request.POST.get("currency")
            
            new_country = Country(name = name, countrycode = countrycode, capital = capital, population = population, languages = languages, timezone = timezone, currency = currency)
            
            if Country.objects.filter(name=new_country.name).exists():
                return Response({"error": "this country already exists"}, status=status.HTTP_409_CONFLICT)
            else:
                new_country.save()
                country = Country.objects.get(name=new_country.name)
                serialized_country = serializers.CountrySerializer(country)
                return Response(
                    {"data": serialized_country.data},
                    status=status.HTTP_200_OK
                )
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
class GetCountryAPIView(APIView):

    def get(self, request, pk):
        try:
            country = Country.objects.get(pk=pk)
            serialized_country = serializers.CountrySerializer(country)
            return Response(
                {"data": serialized_country.data},
                status=status.HTTP_200_OK
            )
        except Country.DoesNotExist:
            return Response(
                {"error": "Country not found"},
                status=status.HTTP_404_NOT_FOUND
            )
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)