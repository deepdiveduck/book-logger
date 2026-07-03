from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register("books", views.BookLogViewSet, basename="book")

urlpatterns = [
    path("health/", views.health_check, name="health-check"),
    path("auth/register/", views.register, name="register"),
    path("auth/login/", views.login_view, name="login"),
    path("", include(router.urls)),
]
