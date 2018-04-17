# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect

# Create your views here.
def index(request):
    if 'count' not in request.session:
        request.session['count'] = 0
    return render(request, 'survey_form/index.html')

def results(request):
    return render(request, 'survey_form/result.html')

def process(request):
    request.session['count'] +=1
    request.session['name'] = request.POST.get('name')
    request.session['location'] = request.POST.get('locations')
    request.session['language'] = request.POST.get('languages')
    request.session['comment'] = request.POST.get('comment')
    return redirect(results)