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

    def validate(self, attrs):
        fecha_inicio = attrs.get('fecha_inicio')
        fecha_fin = attrs.get('fecha_fin')
        if self.instance:
            fecha_inicio = fecha_inicio or self.instance.fecha_inicio
            fecha_fin = fecha_fin or self.instance.fecha_fin
        
        if fecha_inicio and fecha_fin and fecha_fin < fecha_inicio:
            raise serializers.ValidationError(detail={'fecha_fin':'lesser_than_fecha_inicio'}, code=400)
        
        return super().validate(attrs)

class UserioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Userio
        fiels = '__all__'
    
    def create(self, validated_data):
        usr = Userio.objects.create_user(**validated_data)
        validated_data['rol'] = 'admin'
        if 'rol' in validated_data and validated_data['rol'] == 'admin': usr.is_staff = True
        return usr
    
    def update(self, instance, validated_data):
        usr:Userio = super().update(instance, validated_data)
        if 'rol' in validated_data and validated_data['rol'] == 'admin': usr.is_staff = True
        else: usr.is_staff = False
        return usr

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=8)

    class Meta:
        model = Userio
        fields = ['username', 'password']
    
    def create(self, validated_data):
        validated_data['rol'] = 'admin'
        usr = Userio.objects.create_user(**validated_data)
        if 'rol' in validated_data and validated_data['rol'] == 'admin': usr.is_staff = True
        return usr