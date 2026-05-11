from django_filters.rest_framework import DjangoFilterBackend
from django.shortcuts import render
from rest_framework import viewsets

from colectas.filters import *
from .models import *
from .serializer import *
# Create your views here.
class CorporacionView(viewsets.ModelViewSet):
    serializer_class = CorporacionSerializer
    queryset = Corporacion.objects.all()
    filter_backends = [DjangoFilterBackend]
    filterset_class = CorporacionFilter


class Donador_CategoriaView(viewsets.ModelViewSet):
    serializer_class = Donador_CategoriaSerializer
    queryset = Donador_Categoria.objects.all()
    filter_backends = [DjangoFilterBackend]
    filterset_class = Donador_CategoriaFilter
    