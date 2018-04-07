from flask import Flask, render_template, session, request
app = Flask(__name__)
app.secret_key='HULK'

@app.route('/')
def index():
    if 'count' not in session:
        session['count'] = 0
    else:
        session['count'] += 1
    return render_template('index.html', count = session["count"])


@app.route('/', methods=['POST'])
def index_post():
    if request.form['modify'] == 'Add 2':
        session['count'] += 2
    elif request.form['modify'] == 'reset!':
        session['count'] = 0
    return render_template('index.html', count = session["count"])
app.run(debug=True)