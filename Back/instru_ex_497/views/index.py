from flask import Flask, request, jsonify, send_from_directory, json
from flask_cors import CORS
from werkzeug.utils import secure_filename
import os
import ast

import flask
import instru_ex_497
current_app = instru_ex_497.app


# 初始化CORS
CORS(instru_ex_497.app, resources={r"/*": {"origins": "*"}})

ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}



def _corsify_actual_response(response):
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response

@instru_ex_497.app.route('/login', methods=['POST'])
def handle_login():
    # print('request.header', request.headers)
    # print('request', request.values)
    # print('request.form', request.form)
    # print('request.content_length', request.content_length)
    # print('request.content_type', request.content_type)
    # print('request.data', request.data)
    dict_str = request.data.decode("UTF-8")
    login_dict = ast.literal_eval(dict_str)
    # print(login_dict['name'])
    db = instru_ex_497.model.get_db()
    res = db.execute("SELECT * FROM users WHERE username = ?", (login_dict['name'],))
    result_list = res.fetchall()
    if len(result_list) == 1:
        result_dict = result_list[0]
        if result_dict['password'] == login_dict['password']:
            return _corsify_actual_response(flask.jsonify({'status': 'success'}))
    flask.abort(401)

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
    res = db.execute("SELECT * FROM posts WHERE id = ?", (id,))
    output = res.fetchone()
    # print(output)
    return _corsify_actual_response(flask.jsonify(output))

@instru_ex_497.app.route('/posts')
def show_posts():
    db = instru_ex_497.model.get_db()
    res = db.execute("SELECT * FROM posts")
    output = res.fetchall()
    # print(output)
    return _corsify_actual_response(flask.jsonify(output))

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@instru_ex_497.app.route('/submit_post', methods=['POST'])
def submit_post():
    info_dict = request.form.to_dict()
    name = info_dict['name']
    price = info_dict['price']
    description = info_dict['description']
    image = request.files.get('instrumentImage')
    print(request.form.to_dict())
    filename = secure_filename(image.filename)
    path = os.path.join(current_app.config['UPLOAD_FOLDER'], filename)
    image.save(path)
    db = instru_ex_497.model.get_db()
    db.execute(
        "INSERT OR REPLACE INTO posts(author, name, price, description, img_src) "
        "VALUES(?,?,?,?,?)",
        ('Author', name, price, description ,filename))
    return _corsify_actual_response(flask.jsonify({}))

    