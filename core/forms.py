from django import forms
from django.forms import ModelForm
from django.forms import widgets
from django.forms.widgets import Widget
from .models import Categoria1,Categoria2,Vehiculo
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

class RegistroUserForm(UserCreationForm):
    class Meta: 
        model = User 
        fields = ['username', 'first_name', 'last_name', 'email', 'password1', 'password2']

class CamionForm(forms.ModelForm):
    class Meta:
        model = Vehiculo
        fields = ['placa', 'marca', 'modelo', 'capacidad','precio','imagen','categoria1','categoria2']
        labels={
            'placa': 'Id Camión',
            'marca':'Marca',
            'modelo': 'Modelo',
            'capacidad': 'Capacidad',
            'precio': 'Precio',
            'imagen': 'Imagen',
            'categoria1': 'Categoria1',
            'categoria2': 'Categoria2'
        }
        widgets={
            'placa': forms.TextInput(
                attrs={
                    'class': 'form-control',
                    'placeholder':'Ingrese la patente del camión',
                    'id': 'placa'
                }
            ),
            'marca': forms.TextInput(
                attrs={
                    'class': 'form-control',
                    'placeholder':'Ingrese la marca del camión',
                    'id': 'marca'
                }
            ),
            'modelo': forms.TextInput(
                attrs={
                    'class': 'form-control',
                    'placeholder':'Ingrese el modelo del camión',
                    'id': 'modelo'
                }
            ),
            'capacidad': forms.TextInput(
                attrs={
                    'class': 'form-control',
                    'placeholder':'Ingrese la capacidad del camión',
                    'id': 'capacidad'
                }
            ),
            'precio': forms.TextInput(
                attrs={
                    'class': 'form-control',
                    'placeholder':'Ingrese el valor del camión',
                    'id': 'precio'
                }
            ),
            'imagen': forms.FileInput(
                attrs={
                    'class': 'form-control',
                    'id': 'imagen'
                }
            ),
            'categoria1': forms.Select(
                attrs={
                    'class': 'form-control',
                    'id': 'categoria1'
                }
            ),
            
            'categoria2': forms.Select(
                attrs={
                    'class': 'form-control',
                    'id': 'categoria2'
                }
            ),
        }
