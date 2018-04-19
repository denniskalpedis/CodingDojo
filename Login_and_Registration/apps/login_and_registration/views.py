from django.shortcuts import render, redirect
from django.contrib import messages
from django.template import RequestContext
from .models import Users


def index(request):
    if 'login' in request.session:
        return redirect('/success')
    if 'index' not in request.session:
        request.session['index'] = 'register'
    return render(request, 'login_and_registration/index.html')

def login(request):
    messages.error(request, Users.objects.login_validation(request.POST))
    if len(messages.errors) > 0:
        return redirect(request, '/')
    return redirect('/')

def register(request):
    errors = Users.objects.registration_validation(request.POST)
    return redirect('/')

def login_form(request):
    request.session['index'] = 'login'
    return redirect('/')

def register_form(request):
    request.session['index'] = 'register'
    return redirect('/')