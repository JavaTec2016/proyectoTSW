from rest_framework import serializers
from .models import *
class CorporacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Corporacion
        fields = '__all__'

class Donador_CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Donador_Categoria
        fields = '__all__'

class EventoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Evento
        fields = '__all__'

class UserioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Userio