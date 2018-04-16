from django.shortcuts import render, HttpResponse, redirect
from time import gmtime, strftime
# Create your views here.
def index(request):
    context = {
        "date": strftime("%b %d, %Y", gmtime()),
        "time": strftime("%I:%M %p", gmtime())
    }
    return render(request,'time_display/index.html', context)