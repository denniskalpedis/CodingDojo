from flask import Flask, render_template, redirect, request, session, flash
import re
from mysqlconnection import MySQLConnector
app = Flask(__name__)
mysql = MySQLConnector(app,'emails')
app.secret_key='Deadpool'

@app.route('/', methods=['GET'])
def index():
  return render_template('index.html')

@app.route('/process', methods=['POST'])
def submit():
    EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
    if len(request.form['email']) < 1:
        flash("Email cannot be blank!")
    elif not EMAIL_REGEX.match(request.form['email']):
        flash("Invalid Email Address!")
    else:
        query = "INSERT INTO emails (email, created_at, updated_at) VALUES (:email, NOW(), NOW())"
        data = {
            'email': request.form['email']
            }
        mysql.query_db(query, data)
        flash("The E-Mail {} was successfully added to the database!".format(request.form["email"]))
        return redirect('/success')
    return redirect('/')


@app.route('/success')
def success():
    query = "SELECT * FROM emails"
    emails = mysql.query_db(query)
    return render_template('emails.html', emails = emails)

@app.route('/delete', methods=['POST'])
def delete():
    query = "SELECT email FROM emails WHERE id = :id"
    data = {'id': request.form['id']}
    del_email = mysql.query_db(query, data)
    print del_email
    query = "DELETE FROM emails WHERE id = :id"
    data = {'id': request.form['id']}
    mysql.query_db(query, data)
    print del_email[0]['email']
    flash("The E-Mail {} was successfully deleted from the database!".format(del_email[0]['email']))
    return redirect('/success')

app.run(debug=True)