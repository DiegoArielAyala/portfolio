from django.shortcuts import render

def home(request):
    return render(request, "index.html")

def bike_price_tracker(request):
    return render(request, "bike-price-tracker.html")

def bikechain(request):
    return render(request, "bikechain.html")
