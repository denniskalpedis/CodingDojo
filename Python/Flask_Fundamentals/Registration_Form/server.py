from flask import Flask, render_template, request, flash, session, redirect, url_for
import re
app = Flask(__name__)
app.secret_key='Deadpool'

@app.route('/')
def index():
    # email = ''
    # first_name = ''
    # last_name = ''
    return render_template('index.html')

@app.route('/register', methods=['POST'])
def get_info():
    error = False
    EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
    for fieldname, value in request.form.items():
        if len(value) < 1:
            flash(fieldname + " cannot be empty!")
            error = True
    if not EMAIL_REGEX.match(request.form['email']):
        flash("Invalid E-Mail!")
        error = True
    if not request.form['first_name'].isalpha() or not request.form['last_name'].isalpha():
        flash("Names must be letters only!")
        error = True
    if request.form['password'] != request.form['confirm_password']:
        flash("Passwords must match!")
        error = True
    elif not bool(re.search('[A-Z]', request.form['password'])) or len(request.form['password']) < 8 or not bool(re.search(r'\d', request.form['password'])) or not bool(re.search('[a-zA-Z]', request.form['password'])):
        flash("Passwords need to be at least 8 characters, and 1 upper case and 1 number.")
        error = True
    if not error:
        return render_template('registered.html')
    return redirect('/')

app.run(debug=True)