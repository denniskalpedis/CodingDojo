from flask import Flask, render_template, request, flash, session, redirect
import re, md5, os, binascii
from mysqlconnection import MySQLConnector
app = Flask(__name__)
mysql = MySQLConnector(app,'registration')
app.secret_key='Deadpool'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login', methods=['POST'])
def process():
    email = request.form['email']
    password = request.form['password']
    user_query = "SELECT * FROM users WHERE users.email = :email LIMIT 1"
    query_data = {'email': email}
    user = mysql.query_db(user_query, query_data)
    if len(user) != 0:
        encrypted_password = md5.new(password + user[0]['salt']).hexdigest()
        if user[0]['password'] == encrypted_password:
            flash(user[0]['first_name'] + " " + user[0]['last_name'] + " Successfully registered!", "success!")
            session['login'] = user[0]['id']
            return redirect('/success')
        else:
            flash("Login failed! Wrong password!", "FAIL")
            return redirect('/')
    else:
        flash("Login failed! Wrong E-Mail!", "FAIL")
        return redirect('/')

@app.route('/register', methods=['POST'])
def register():
    error = False
    EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
    for fieldname, value in request.form.items():
        if len(value) < 2:
            flash(fieldname + " cannot be empty!", "FAIL")
            error = True
    if not EMAIL_REGEX.match(request.form['email']):
        flash("Invalid E-Mail!", "FAIL")
        error = True
    if not request.form['first_name'].isalpha() or not request.form['last_name'].isalpha():
        flash("Names must be letters only!", "FAIL")
        error = True
    if request.form['password'] != request.form['confirm_password']:
        flash("Passwords must match!", "FAIL")
        error = True
    elif not bool(re.search('[A-Z]', request.form['password'])) or len(request.form['password']) < 8 or not bool(re.search(r'\d', request.form['password'])) or not bool(re.search('[a-zA-Z]', request.form['password'])):
        flash("Passwords need to be at least 8 characters, and 1 upper case and 1 number.", "FAIL")
        error = True
    if not error:
        first_name = request.form['first_name']
        last_name = request.form['last_name']
        email = request.form['email']
        password = request.form['password']
        salt =  binascii.b2a_hex(os.urandom(15))
        hashed_pw = md5.new(password + salt).hexdigest()
        query = "INSERT INTO users (first_name, last_name, email, password, salt, created_at, updated_at) VALUES (:first_name, :last_name, :email, :hashed_pw, :salt, NOW(), NOW())"
        data = { 'first_name': first_name, 'last_name': last_name, 'email': email, 'hashed_pw': hashed_pw, 'salt': salt}
        mysql.query_db(query, data)
        flash(first_name + " " + last_name + " Successfully registered!", "success!")
        query = "SELECT * FROM users WHERE email = :email LIMIT 1"
        data = { 'email': email }
        user = mysql.query_db(query, data)
        session['login'] = user[0]['id']
        return redirect('/success')
    return redirect('/')

@app.route('/success')
def success():
    return render_template('success.html')

