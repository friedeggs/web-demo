#import os
#from flask import Flask
#app = Flask(__name__)
#
#@app.route("/")
#def hello():
#    return "Hello from Python!"
#
#if __name__ == "__main__":
#    port = int(os.environ.get("PORT", 5000))
#    app.run(host='0.0.0.0', port=port)


import os
from flask import Flask, render_template
from flask.ext.sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL',
 'postgresql://localhost/techretreattemp')
db = SQLAlchemy(app)
# app.config['SQLALCHEMY_DATABASE_URI'] = os.environ['DATABASE_URL']
# db = SQLAlchemy(app)
#  'postgresql://localhost/techretreattemp'

@app.route('/', methods=['GET', 'POST'])
def hello():
    # return "Hello"
    return render_template("index.html")

@app.route('/project/<id>', methods=['GET', 'POST'])
def asdf(id):
    # return "/project/_"+id+".html"
    return render_template("/project/"+id+".html")

if __name__ == '__main__':
    app.run()
