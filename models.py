from app import db

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
