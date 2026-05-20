from django.urls import path, include
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView
from rest_framework import routers
from .views import *

router = routers.DefaultRouter()
router.register(r'corporaciones', CorporacionView, 'corporaciones')
router.register(r'categorias', Donador_CategoriaView, 'categorias')
router.register(r'eventos', EventoView, 'eventos')
urlpatterns = [
    path("api/v1/", include(router.urls)),
    path("schema/", SpectacularAPIView.as_view(), name='schema'),
    path("docs/", SpectacularSwaggerView.as_view(), name='docs')
]
