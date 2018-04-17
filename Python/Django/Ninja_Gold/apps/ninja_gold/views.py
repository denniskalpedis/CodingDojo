# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
import random
import datetime

# Create your views here.
def index(request):
    if 'gold' not in request.session:
        request.session['gold'] = 0
        request.session['activity_list'] = []
        request.session['wins_or_losses'] = []
    if len(request.session['activity_list']) > 0:
        context = {
            "data":zip(request.session['activity_list'], request.session['wins_or_losses'])
        }
    else:
        context = {
            "data":[("True", "LETS START A GAME!")]
        }
    return render(request, 'ninja_gold/index.html', context)

def process(request):
    building = request.POST.get('building')
    win_or_lose = True
    if building == 'farm':
        gold = random.randrange(10,21)
        request.session['gold'] += gold
        activity_log(request, gold, win_or_lose, building)
    elif building == 'cave':
        gold = random.randrange(5,11)
        request.session['gold'] += gold
        activity_log(request, gold, win_or_lose, building)
    elif building == 'house':
        gold = random.randrange(2,6)
        request.session['gold'] += gold
        activity_log(request, gold, win_or_lose, building)
    elif building == 'casino':
        win_or_lose = bool(random.getrandbits(1))
        if win_or_lose:
            gold = random.randrange(0,51)
            request.session['gold'] += gold
            activity_log(request, gold, win_or_lose, building)
        else:
            gold = random.randrange(0,51)
            request.session['gold'] -= gold
            activity_log(request, gold, win_or_lose, building)
    return redirect(index)

def activity_log(request, gold, win_or_lose, building = ""):
    activity_list = request.session['activity_list']
    wins_or_losses = request.session['wins_or_losses']
    now = datetime.datetime.now()
    if win_or_lose:
        wins_or_losses.append(str(win_or_lose))
        activity_list.append('Earned ' + str(gold) + ' golds from the ' + building + '  (' + now.strftime("%Y-%m-%d %I:%M:%S%p") + ')')
    else:
        wins_or_losses.append(str(win_or_lose))
        activity_list.append('Entered a casino and lost ' + str(gold) + ' golds... Ouch...' + '  (' + now.strftime("%Y-%m-%d %I:%M:%S%p") + ')')
    request.session['activity'] = activity_list
    request.session['wins_or_losses'] = wins_or_losses