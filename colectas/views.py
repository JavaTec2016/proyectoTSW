from django.shortcuts import render
from rest_framework import viewsets
from .models import *
from .serializer import *
# Create your views here.
class CorporacionView(viewsets.ModelViewSet):
    serializer_class = CorporacionSerializer
    queryset = Corporacion.objects.all()

class Donador_CategoriaView(viewsets.ModelViewSet):
    serializer_class = Donador_CategoriaSerializer
    queryset = Donador_Categoria.objects.all()