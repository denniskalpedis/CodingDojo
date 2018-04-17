from django.shortcuts import render, redirect
from django.utils.crypto import get_random_string

# Create your views here.
def index(request):
    if 'count' not in request.session:
        request.session['count'] = 0
    return redirect(random_word)

def reset(request):
    request.session['count'] = 0
    return redirect(random_word)

def random_word(request):
    print get_random_string(length=14)
    if request.method == "POST":
        request.session['count'] += 1
        print get_random_string(length=14)
        context = {
            "random_word": get_random_string(length=14)
        }
        return render(request, 'random_word/index.html', context)
    else:
        return render(request, 'random_word/index.html')