import django_filters

from colectas.models import *


class CorporacionFilter(django_filters.FilterSet):
    id = django_filters.NumberFilter(lookup_expr='icontains')
    nombre = django_filters.CharFilter(lookup_expr='icontains')
    direccion = django_filters.CharFilter(lookup_expr='icontains')
    telefono = django_filters.CharFilter(lookup_expr='icontains')
    email = django_filters.CharFilter(lookup_expr='icontains')

    class Meta:
        model = Corporacion
        fields = {
            'id': ['icontains']
        }

class Donador_CategoriaFilter(django_filters.FilterSet):
    id = django_filters.NumberFilter(lookup_expr='icontains')
    nombre = django_filters.CharFilter(lookup_expr='icontains')
    class Meta:
        model = Donador_Categoria
        fields = ['id']