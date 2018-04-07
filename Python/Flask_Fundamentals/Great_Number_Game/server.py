from flask import Flask, render_template, session, request
import random
app = Flask(__name__)
app.secret_key='Deadpool'

@app.route('/')
def index():
    if 'secret_number' not in session:
        session['secret_number'] = random.randrange(0,101)
        print session['secret_number']
    color = 'red'
    display = 'none'
    winner = False
    return render_template('index.html', winner = winner, display = display, color = color)


@app.route('/', methods=['POST'])
def index_post():
    if request.form['submit'] == 'Play again!':
        session['secret_number'] = random.randrange(0,101)
        winner = False
        color = 'green'
        number = ''
        guess = ''
        display = 'none'
    elif request.form['submit'] == 'submit':
        display = 'block'
        number_guess = request.form['text']
        winner = False
        if int(number_guess) == session['secret_number']:
            winner = True
            color = 'green'
            number = str(number_guess) + ' was the'
            guess = "number!"
            session.pop('secret_number')
        elif int(number_guess) < session['secret_number']:
            color = 'red'
            number = str(number_guess) + ' is'
            guess = "too low!"
        else:
            color = 'red'
            number = str(number_guess) + ' is'
            guess = "too high!"
    
    return render_template('index.html', winner = winner, display = display, color = color, number = number, guess = guess)
app.run(debug=True)