from django.shortcuts import render, HttpResponse, redirect

# Create your views here.

def index(request):
    response = "placeholder to later display all the list of blogs"
    return HttpResponse(response)

def new(request):
    response = "Placeholder to display a new form to create a new blog"
    return HttpResponse(response)

def create(request):
    return redirect('/')

def show(request, blog):
    response = "Placeholder to display blog {}".format(blog)
    return HttpResponse(response)

def edit(request, blog):
    response = "placeholder to edit blog {}".format(blog)
    return HttpResponse(response)

def destroy(request, blog):
    return redirect('/')