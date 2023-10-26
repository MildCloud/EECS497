import flask
import instru_ex_497


def _corsify_actual_response(response):
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response

@instru_ex_497.app.route('/posts/:id')
def show_post():
    db = instru_ex_497.model.get_db()
    res = db.execute("SELECT * FROM POSTS WHERE id = ?", (id,))
    output = res.fetchone()
    print(output)
    return _corsify_actual_response(flask.jsonify(output))

@instru_ex_497.app.route('/posts')
def show_posts():
    db = instru_ex_497.model.get_db()
    res = db.execute("SELECT * FROM POSTS")
    output = res.fetchall()
    print(output)
    return _corsify_actual_response(flask.jsonify(output))