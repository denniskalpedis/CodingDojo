from flask import Flask, render_template, session, request
import random
app = Flask(__name__)
app.secret_key='Deadpool'

@app.route('/')
def index():
    if 'secret_number' not in session:
        session['secret_number'] = random.randrange(0,101)
    bg_color = [0, 255]
    display = 'none'
    winner = False
    return render_template('index.html', r = bg_color[0], g = bg_color[1], winner = winner, display = display)


@app.route('/', methods=['POST'])
def index_post():
    if request.form['submit'] == 'Play again!':
        session['secret_number'] = random.randrange(0,101)
        winner = False
        bg_color = [0, 255]
        number = ''
        guess = ''
        display = 'none'
    elif request.form['submit'] == 'submit':
        display = 'block'
        number_guess = request.form['text']
        winner = False
        if int(number_guess) == session['secret_number']:
            winner = True
            bg_color = [0, 255]
            number = str(number_guess) + ' was the'
            guess = "number!"
            session.pop('secret_number')
        elif int(number_guess) < session['secret_number']:
            bg_color = background_color(session['secret_number'], int(number_guess))
            number = str(number_guess) + ' is'
            guess = "too low!"
        else:
            bg_color = background_color(int(number_guess), session['secret_number'])
            number = str(number_guess) + ' is'
            guess = "too high!"

    return render_template('index.html', r = bg_color[0], g = bg_color[1], winner = winner, display = display, number = number, guess = guess)

def background_color(large_num, small_num):
    r = 0
    g = 255
    if (large_num - small_num <= 25):
        g = 255
        r += int((large_num - small_num) * 10.64)        
    elif (large_num - small_num > 25):
        r = 255
        g -= int(((large_num - small_num) - 25) * 10.64)
    if ( g < 0):
        g = 0
    if ( r > 255):
        r = 255
    return r, g

app.run(debug=True)