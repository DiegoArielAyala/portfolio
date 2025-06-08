from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import smtplib
from django.shortcuts import render, redirect
from .forms import ContactForm
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.mail import send_mail
from django.conf import settings
import os

# Create your views here.
def home(request):
    if request.method == "POST":
        form = ContactForm(request.POST)
        form.save()
        return render(request, "home.html", {
            "form": ContactForm
        })
    return render(request, "home.html", {
        "form": ContactForm
    })

def bike_price_tracker(request):
    return render(request, "bike-price-tracker.html")

@csrf_exempt
def contact(request):
    if request.method == "POST":
        form = ContactForm(request.POST)
        if form.is_valid():
            message = form.save()
            send_alert(message)
            return render(request, "home.html", {
                "form": ContactForm
            })
    return render(request, "home.html")    

def send_alert(message):
    from_ = os.getenv("EMAIL_HOST_USER")
    password = os.getenv("EMAIL_HOST_PASSWORD")

    mail = MIMEMultipart()
    mail["From"] = from_
    mail["To"] = from_
    mail["Subject"] = "Nuevo mensaje desde mi portafolio"
    text = f"""
    Nuevo mensaje desde el formulario de contacto:

    Nombre: {message.name}
    Email: {message.email}
    Mensaje:
    {message.message}
    """
    mail.attach(MIMEText(text, "plain"))

    with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
        server.login(from_, password)
        server.send_message(mail)