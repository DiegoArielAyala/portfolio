from django.shortcuts import render, redirect
from .forms import ContactForm
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

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
            form.save()
            if request.headers.get("x-requested-with") == "XLMHttpRequest":
                return JsonResponse({"status": "ok"})
            return redirect("gracias")
    else:
        form = ContactForm()
    return render(request, "home.html", {
        "form": form
    })