from flask import Flask, render_template, session, request, redirect, url_for
import random
import datetime
app = Flask(__name__)
app.secret_key='Deadpool'

@app.route('/')
def index():
    if 'gold_amount' not in session:
        session['gold_amount'] = 0
        session['activity'] = []
    print session['gold_amount']
    print session['activity']
    return render_template('index.html', gold = session['gold_amount'], activity = session['activity'])

@app.route('/', methods=['POST'])
def index_post():
    if request.form['reset'] == 'Reset':
        session['gold_amount'] = 0
        session['activity'] = []
    return render_template('index.html', gold = session['gold_amount'], activity = session['activity'])

@app.route('/process_money', methods=['POST'])
def process_money():
    win_or_lose = True
    if request.form['building'] == 'farm':
        gold = random.randrange(10,21)
        session['gold_amount'] += gold
        activity_log(gold, win_or_lose)
    elif request.form['building'] == 'cave':
        gold = random.randrange(5,11)
        session['gold_amount'] += gold
        activity_log(gold, win_or_lose)
    elif request.form['building'] == 'house':
        gold = random.randrange(2,6)
        session['gold_amount'] += gold
        activity_log(gold, win_or_lose)
    elif request.form['building'] == 'casino':
        win_or_lose = bool(random.getrandbits(1))
        if win_or_lose:
            gold = random.randrange(2,6)
            session['gold_amount'] += gold
            activity_log(gold, win_or_lose)
        else:
            gold = random.randrange(2,6)
            session['gold_amount'] -= gold
            activity_log(gold, win_or_lose)
    return redirect('/')

def activity_log(gold, win_or_lose):
    activity_list = session['activity']
    now = datetime.datetime.now()
    if win_or_lose:
        activity_list.append(str(win_or_lose) + '--Earned ' + str(gold) + ' golds from the ' + request.form['building'] + '  (' + now.strftime("%Y-%m-%d %I:%M:%S%p") + ')')
    else:
        activity_list.append(str(win_or_lose) + '--Entered a casino and lost ' + str(gold) + ' golds... Ouch...' + '  (' + now.strftime("%Y-%m-%d %I:%M:%S%p") + ')')
    session['activity'] = activity_list

app.run(debug=True)