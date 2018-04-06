from flask import Flask, render_template, request, redirect
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/process', methods=['POST'])
def create_user():
    print "Got Post Info"
    # recall the name attributes we added to our form inputs
    # to access the data that the user input into the fields we use request.form['name_of_input']
    name = request.form['name']
    print name
    print request.form
    return redirect('/')

app.run(debug=True)