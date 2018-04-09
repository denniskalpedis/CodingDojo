from flask import Flask, render_template, request, flash, session
app = Flask(__name__)
app.secret_key='Deadpool'

@app.route('/')
def index():
    
    return render_template('index.html')

@app.route('/results', methods=['POST'])
def get_info():
    print "Got Post Info"
    
    if len(request.form['name']) < 1:
        flash("Name cannot be empty!")
        return render_template('index.html')
    elif not request.form['name'].isalpha():
        flash("Name cannot have numbers!")
        return render_template('index.html')
    elif len(request.form['comment']) > 120:
        flash("Comment must be less than 120 characters")
        return render_template('index.html')
    # recall the name attributes we added to our form inputs
    # to access the data that the user input into the fields we use request.form['name_of_input']
    name = request.form['name']
    location = request.form['locations']
    language = request.form['languages']
    comment = request.form['comment']
    print name, location, language, comment
    return render_template('/results.html', name = name, location = location, language = language, comment = comment)

app.run(debug=True)