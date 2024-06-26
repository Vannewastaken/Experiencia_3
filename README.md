### Batch para Cargar el Proyecto

```batch
#Instalaciones
pip install django
python.exe -m pip install --upgrade pip 
py -m pip install setuptools
python -m pip install Pillow #Esta se instala si o si junto a setuptools

#Para cargar el servidor DJANGO
py manage.py runserver

#Para cargar la api local JSON
json-server --watch camiones.json --host 0.0.0.0 --port 3300

Credenciales administrador
user: admin
password: duoc1234

