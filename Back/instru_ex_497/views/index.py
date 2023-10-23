import flask
import instru_ex_497


def _corsify_actual_response(response):
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response


@instru_ex_497.app.route('/posts')
def show_posts():
    output = {"posts":[{"author":"name","price":"1","body":"description","id":"0.775989985464854"},{"author":"name","price":"1","body":"description","id":"0.48187608793837633"}]}
    print(output)
    return _corsify_actual_response(flask.jsonify(output))