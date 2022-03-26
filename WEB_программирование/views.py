from django.http import HttpResponse
from django.shortcuts import render
import requests


def main_page(request):
    return render(request, 'main_page.html')


def to_bot(request):
    is_private = request.POST.get('is_private', False)
    login = request.GET["login"]
    password = request.GET["password"]
    age = request.GET["age"]
    name = request.GET["name"]
    surname = request.GET["surname"]
    email = request.GET["email"]
    response = requests.post(
        url='https://api.telegram.org/bot5180045741:AAGm3ufpK79NHt4CPvhUMQpNrD7WZ9iY738/post',
        data={'login': login,
              'password': password,
              'age': age,
              'name': name,
              'surname': surname,
              'email': email
              }
    ).json()
    return render(request, 'main_page.html')
