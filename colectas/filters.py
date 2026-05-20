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
        fields = [
            'id',
            'nombre',
            'direccion',
            'telefono',
            'email',
        ]

class Donador_CategoriaFilter(django_filters.FilterSet):
    id = django_filters.NumberFilter(lookup_expr='icontains')
    nombre = django_filters.CharFilter(lookup_expr='icontains')
    class Meta:
        model = Donador_Categoria
        fields = ['id']

class EventoFilter(django_filters.FilterSet):
    nombre = django_filters.CharFilter(lookup_expr='icontains')
    fecha_inicio = django_filters.DateFilter(lookup_expr='icontains')
    fecha_fin = django_filters.DateFilter(lookup_expr='icontains')
    tipo = django_filters.CharFilter(lookup_expr='icontains')
    descripcion = django_filters.CharFilter(lookup_expr='icontains')

    class Meta:
        model = Evento
        fields = ['id']