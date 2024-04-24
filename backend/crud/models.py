from django.db import models

class Country(models.Model):
    name = models.CharField(max_length=255)
    countrycode = models.CharField(max_length=255)
    capital = models.CharField(max_length=255, blank=True, null=True)
    population = models.IntegerField()
    languages = models.CharField(max_length=255)
    timezone = models.CharField(max_length=255)
    currency = models.CharField(max_length=255)

    def __str__(self):
        return self.name