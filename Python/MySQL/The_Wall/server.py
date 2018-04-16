from flask import Flask, render_template, redirect, session, flash, request
import re, md5, os, binascii

from mysqlconnection import MySQLConnector
app = Flask(__name__)
mysql = MySQLConnector(app,'wall')
app.secret_key='Deadpool'

@app.route('/')
def index():
    if 'index' not in session:
        session['index'] = 'login'
    if 'login' in session:
        return redirect('/wall')
    return render_template('index.html')

# @app.template_global(name='zip')
# def _zip(*args, **kwargs): #to not overwrite builtin zip in globals
#     return __builtins__.zip(*args, **kwargs)

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        session.pop('index')
        email = request.form['email']
        password = request.form['password']
        query = "SELECT * FROM users WHERE users.email = :email LIMIT 1"
        data = {'email': email}
        user = mysql.query_db(query, data)
        if len(user) != 0:
            encrypted_password = md5.new(password + user[0]['salt']).hexdigest()
            if user[0]['hashed_pw'] == encrypted_password:
                flash(user[0]['first_name'] + " " + user[0]['last_name'] + " Successfully logged in!", "success!")
                session['login'] = user[0]['id']
                return redirect('/wall')
            else:
                flash("Login failed! Wrong password!", "FAIL")
                return redirect('/')
        else:
            flash("Login failed! Wrong E-Mail!", "FAIL")
            return redirect('/')
    else:
        session['index'] = 'login'
        return redirect('/')
    

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        error = False
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        for fieldname, value in request.form.items():
            if len(value) < 1:
                print "empty"
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
            first_name = request.form['first_name']
            last_name = request.form['last_name']
            email = request.form['email']
            password = request.form['password']
            salt =  binascii.b2a_hex(os.urandom(15))
            hashed_pw = md5.new(password + salt).hexdigest()
            query = "INSERT INTO users (first_name, last_name, email, hashed_pw, salt, created_at, updated_at) VALUES (:first_name, :last_name, :email, :hashed_pw, :salt, NOW(), NOW())"
            data = { 'first_name': first_name, 'last_name': last_name, 'email': email, 'hashed_pw': hashed_pw, 'salt': salt}
            print mysql.query_db(query, data)
            session['login'] = mysql.query_db(query, data)
            print session['login']
            session.pop('index')
            return redirect('/wall')
        else:
            return redirect('/')
    else:
        session['index'] = 'register'
        return redirect('/')
    



@app.route('/wall')
def wall():
    if request.method == 'POST':
        print "hello"
    else:
        query = """SELECT messages.id, 
messages.message, 
DATE_FORMAT(messages.created_at, "%W %M %e %Y %r") as created_at, 
messages.user_id, CONCAT_WS( " ", users.first_name, users.last_name) as poster_name, 
comments2.comments, 
comments2.commenters_names, 
comments2.comments_times
FROM messages 
LEFT JOIN users ON users.id = messages.user_id 
LEFT JOIN (
SELECT comments.message_id, 
GROUP_CONCAT(comments.comment ORDER BY comments.created_at SEPARATOR ' --|-- ') as comments, 
GROUP_CONCAT(CONCAT_WS( " ", users.first_name, users.last_name) ORDER BY comments.created_at SEPARATOR ' --|-- ') as commenters_names, 
GROUP_CONCAT(DATE_FORMAT(comments.created_at, "%W %M %e %Y %r") ORDER BY comments.created_at SEPARATOR ' --|-- ') as comments_times 
FROM comments 
LEFT JOIN users ON users.id = comments.user_id 
GROUP BY comments.message_id) as comments2 
ON comments2.message_id = messages.id 
ORDER BY messages.created_at DESC"""
        messages = mysql.query_db(query)
        query = """SELECT messages."""
        if 'index' in session:
            session.pop('index')
        return render_template('wall.html', messages_comments = messages, zip = zip)

@app.route('/logout')
def logout():
    session.pop('login')
    flash("You were logged out!", "success!")
    return redirect('/')

@app.route('/new_message', methods=['POST'])
def method_name():
    message = request.form['message']
    query = """INSERT INTO messages (message, user_id, created_at, updated_at) VALUES (:message, :user_id, NOW(), NOW())"""
    data = {"message": message, "user_id": session['login']}
    mysql.query_db(query, data)
    return redirect('/wall')

@app.route('/new_comment', methods=['POST'])
def new_comment():
    comment = request.form['comment']
    message_id = request.form['message_id']
    query = """INSERT INTO comments (comment, message_id, user_id, created_at, updated_at) VALUES (:comment, :message_id, :user_id, NOW(), NOW())"""
    data = {"comment": comment, "message_id":message_id, "user_id": session['login']}
    mysql.query_db(query, data)
    return redirect('/wall')

@app.route('/delete', methods=['POST'])
def delete():
    return redirect('/wall')

app.run(debug=True)
 