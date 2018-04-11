from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
app = Flask(__name__)
mysql = MySQLConnector(app,'mydb')
@app.route('/')
def index():
    query = "SELECT friends.name, friends.age, DATE_FORMAT(friends.friend_since, '%b %D, %Y') as since FROM friends" 
    friends = mysql.query_db(query)
    return render_template('index.html', all_friends=friends)

@app.route('/friends', methods=['POST'])
def create():
    query = "INSERT INTO friends (name, age, friend_since) VALUES (:name, :age, NOW())"
    data = {
             'name': request.form['name'],
             'age':  request.form['age'],
           }
    mysql.query_db(query, data)
    return redirect('/')


app.run(debug=True)