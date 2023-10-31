from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from werkzeug.utils import secure_filename
import os

import flask
import instru_ex_497
current_app = instru_ex_497.app


# 初始化CORS
CORS(instru_ex_497.app, resources={r"/*": {"origins": "*"}})

ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}



def _corsify_actual_response(response):
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response

@instru_ex_497.app.route('/uploads/<path:name>', methods=['GET'])
def show_file(name):
    """Show the file with the given name, if it exists."""
    # if not user.is_logged_in():
    #     flask.abort(403)
    print(current_app.config['UPLOAD_FOLDER'])
    print(name)
    return flask.send_from_directory(
        current_app.config['UPLOAD_FOLDER'],
        name,
        as_attachment=True
    )
    
@instru_ex_497.app.route('/posts/:id')
def show_post():
    db = instru_ex_497.model.get_db()
    res = db.execute("SELECT * FROM POSTS WHERE id = ?", (id,))
    output = res.fetchone()
    # print(output)
    return _corsify_actual_response(flask.jsonify(output))

@instru_ex_497.app.route('/posts')
def show_posts():
    db = instru_ex_497.model.get_db()
    res = db.execute("SELECT * FROM POSTS")
    output = res.fetchall()
    # print(output)
    return _corsify_actual_response(flask.jsonify(output))

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@instru_ex_497.app.route('/submit_post', methods=['POST'])
def submit_post():
    print("hihihi")
    # print(request.form())
    info_dict = request.form.to_dict()
    author = info_dict['author']
    price = info_dict['price']
    body = info_dict['body']
    image = request.files.get('instrumentImage')
    print(request.form.to_dict())
    print(author, price, body)
    filename = secure_filename(image.filename)
    path = os.path.join(current_app.config['UPLOAD_FOLDER'], filename)
    image.save(path)
    db = instru_ex_497.model.get_db()
    title = "test_title"
    db.execute(
        "INSERT OR REPLACE INTO users(username, fullname)"
        "VALUES (?, ?)", 
        (author, author))
    db.execute(
        "INSERT OR REPLACE INTO POSTS(title, body, author, description, img_src) "
        "VALUES(?,?,?,?,?)",
        (filename, body, author, body ,filename))
    return "hihihi"

    