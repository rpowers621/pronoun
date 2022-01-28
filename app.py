from flask import Flask, jsonify, request, render_template
import flask
from flask_login import (
    UserMixin,
    LoginManager,
    login_user,
    current_user,
    login_required,
    logout_user,
)
from docx import Document
import os
import json


app = flask.Flask(__name__, static_folder="./build/static")
bp = flask.Blueprint("bp", __name__, template_folder="./build")

subject_pn = ['they', 'she', 'he', ' I', ' you', 'we'], 'it'
possessive_pn = ['hers', 'his', 'theirs', 'mine', 'yours', 'its']
possessive_adj = ['their', 'her', 'his', 'our', 'its', 'my', 'your']
object_pn = ['them', 'her', 'him','us', 'it', 'you', 'me']
reflexive_pn = ['themselves', 'ourselves', 'yourself', 'himself', 'herself', 'itself']




@app.route("/")
def main():
    return flask.redirect(flask.url_for("bp.index"))


@bp.route("/index", methods=["GET", "POST"])
def index():
    return flask.render_template("index.html")


@bp.route('/readData', methods=['POST'])
def read():
    name = flask.request.json.get('file')
    path = os.path.abspath(name)
    print(path)
    doc = Document(path)
    for para in doc.paragraphs:
        print(para.text)
    
    print(path)
    return jsonify(path)

app.register_blueprint(bp)
if __name__ == "__main__":
    app.run(
         debug=True
    )

#host=os.getenv("IP", "0.0.0.0"), port=int(os.getenv("PORT", 8080)),