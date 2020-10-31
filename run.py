from flask import Flask,render_template
app = Flask(__name__)

@app.route('/')
def zhuye():
    return render_template('index.html')

@app.route('/price')
def price():
    return render_template('price.html')

@app.route('/join')
def join():
    return render_template('join.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/forgot')
def forgot():
    return render_template('forgot.html')

@app.route('/pay')
def pay():
    return render_template('pay.html')

@app.route('/myspace')
def myspace():
    return render_template('myspace.html')

if __name__ == '__main__':
    app.run(debug=True)
