
from django.urls import path
from . import views


urlpatterns = [
    path('', views.main_page),
    path('to_bot/', views.to_bot),
    path("images_page.html", views.images_page, name='images_page'),
    path("video_page.html", views.video_page),
    path("to_bot/images_page.html", views.images_page),
    path("to_bot/video_page.html", views.video_page),
]
