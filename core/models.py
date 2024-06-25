from django.db import models

# Create your models here.

from django.db import models

class Vehiculo(models.Model):
    tipo = models.CharField(max_length=50)
    marca = models.CharField(max_length=50)
    modelo = models.CharField(max_length=50)
    placa = models.CharField(max_length=15, unique=True)
    capacidad = models.PositiveIntegerField()  # Capacidad en kg o número de pasajeros
    
    def __str__(self):
        return f'{self.tipo} - {self.placa}'
