from django.db import models

# Create your models here.
class CustomUser(models.Model):
    name = models.CharField(max_length=20, unique=True)
    email = models.EmailField(unique=True, null=False)
    password = models.CharField(unique=True,max_length=20)

    def __str__(self):
        return f'{self.name}'