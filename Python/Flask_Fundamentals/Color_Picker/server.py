from flask import Flask, render_template, request
app = Flask(__name__)

@app.route('/')
def index():
    
    return render_template('/index.html')

@app.route('/change', methods=['POST'])
def get_info():
    r = request.form['red']
    g = request.form['green']
    b = request.form['blue']
    color = "rgb(" + r + ", " + g + ", " + b + ")"
    
    return render_template('/index.html', color = color)

app.run(debug=True)