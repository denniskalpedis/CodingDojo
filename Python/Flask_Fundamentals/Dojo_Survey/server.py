from flask import Flask, render_template, request
app = Flask(__name__)

@app.route('/')
def index():
    
    return render_template('index.html')

@app.route('/results', methods=['POST'])
def get_info():
    print "Got Post Info"
    
    if request.form['name'] == '':
        error = "needs name!"
        print "no name"
        return render_template('index.html', error = error)
    # recall the name attributes we added to our form inputs
    # to access the data that the user input into the fields we use request.form['name_of_input']
    name = request.form['name']
    location = request.form['locations']
    language = request.form['languages']
    comment = request.form['comment']
    print name, location, language, comment
    return render_template('/results.html', name = name, location = location, language = language, comment = comment)

app.run(debug=True)