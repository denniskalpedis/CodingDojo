from flask import Flask, render_template, request
app = Flask(__name__)

@app.route('/')
def index():
    return "No ninjas here!"

@app.route('/ninja/<code>', strict_slashes=False)
def ninja_color(code):
    print code
    if code == 'blue':
        image_path = "leonardo.jpg"
    elif code == 'orange':
        image_path = "michelangelo.jpg"
    elif code == 'red':
        image_path = "raphael.jpg"
    elif code == 'purple':
        image_path = "donatello.jpg"
    # elif code == None:`
    #     image_path = "tmnt.png"
    else:
        image_path = "notapril.jpg"
    return render_template('/image.html', images = image_path)

@app.route('/ninja', strict_slashes=False)
def tmnt():
    image_path = "tmnt.png"
    return render_template('/image.html', images = image_path)

app.run(debug=True)