from rest_framework import serializers
from .models import Country

class CountrySerializer(serializers.ModelSerializer):
    
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(read_only=True)
    countrycode = serializers.CharField(read_only=True)
    capital = serializers.CharField(read_only=True)
    population = serializers.IntegerField(read_only=True)
    languages = serializers.CharField(read_only=True)
    timezone = serializers.CharField(read_only=True)
    currency = serializers.CharField(read_only=True)

    class Meta:
        model = Country
        fields = [
            'id',
            'name',
            'countrycode',
            'capital',
            'population',
            'languages',
            'timezone',
            'currency'
        ]