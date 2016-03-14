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
from flask import Flask, render_template, request
from flask.ext.sqlalchemy import SQLAlchemy
# import models.Comment

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

@app.route('/about')
def about():
    return render_template("about.html")

@app.route('/project/<id>', methods=['GET', 'POST'])
def asdf(id):
    # return "/project/_"+id+".html"
    comments = Comment.query.all()
    return render_template("/project/"+id+".html", comments=comments)

@app.route('/store_comment', methods=['POST'])
def store():
    poster = request.form['poster']
    comment = request.form['comment']
    newComment = Comment(poster, comment)
    db.session.add(newComment)
    db.session.commit()
    print (app.config['SQLALCHEMY_DATABASE_URI'])
    print (newComment)

class Comment(db.Model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True)
    poster = db.Column(db.String())
    comment = db.Column(db.String())

    def __init__(self, poster, comment):
        self.poster = poster
        self.comment = comment

    def __repr__(self):
        return '<id {}>' .format(self.id)

if __name__ == '__main__':
    app.run()
