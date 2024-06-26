from django.shortcuts import render, redirect,get_object_or_404
from .models import Categoria1,Categoria2,Vehiculo
from .forms import CamionForm

# Create your views here.

def home(request):
    return render(request,'home.html')

def nosotros(request):
    return render(request, 'nosotros.html')



def servicios(request): 
    camion = Vehiculo.objects.all()              #similar a select * from Vehiculo
    return render(request, 'servicios.html', {'camion':camion})

def crear(request):
    if request.method == 'POST':
        camionForm = CamionForm(request.POST, request.FILES)  # Crear una instancia de CancionesForms con datos del POST
        if camionForm.is_valid():
            camionForm.save()  # Guardar el formulario si es válido (equivalente a un insert into)
            return redirect('servicios')  # Redirigir a la vista de canciones después de guardar
    else:
        camionForm = CamionForm()  # Crear una instancia vacía de CancionesForms para el formulario inicial

    return render(request, 'crear.html', {'camionForm': camionForm})  # Renderizar el template crear.html con el formulario


def detalle(request, id):
    camion = get_object_or_404(Vehiculo, placa=id)   #realiza busquedas especificas por atributo pk
    return render (request, 'detalle.html', {'camion':camion})





def modificar(request, id):
    vehiculo = get_object_or_404(placa=id)
    datos={
        'forModificar': CamionForm(instance=vehiculo),     #crea un obj de tipo formulario
        'vehiculo':  vehiculo
    }
    if request.method=='POST':
        formulario= CamionForm(request.POST, request.FILES, instance=vehiculo)
        if formulario.is_valid():
            formulario.save()               #actualiza la información del obj.
            return redirect('servicios')
    return render(request, 'modificar.html', datos)

def eliminar(request, id):
    camion = get_object_or_404(Vehiculo, placa=id)
    if request.method=='POST':
        if 'elimina' in request.POST:       #botón cuyo name es elimina en html para confirmar
            camion.delete()               #elimina el objeto despues de confirmar
            return redirect ('servicios')
        else:
            return redirect ('detalle', placa=id)
    return render (request, 'eliminar.html', {'camion': camion})



