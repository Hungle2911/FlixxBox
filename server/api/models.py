from django.db import models

# Create your models here.

class Product(models.Model):
  name = models.CharField(max_length=100, null=False)
  description = models.TextField()
  price = models.DecimalField(null=False, default=0)
  quantity = models.IntegerField(null=False, default=0)

  