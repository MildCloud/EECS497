"""InstruEx497 package initializer."""

import flask
# app is a single object used by all the code modules in this package
app = flask.Flask(__name__) # pylint: disable=invalid-name
# Read settings from config module (insta485/config.py)
app.config.from_object('instru_ex_497.config')
# Overlay settings read from a Python file whose path is set in the environment
# variable INSTA485_SETTINGS. Setting this environment variable is optional.
# Docs: http://flask.pocoo.org/docs/latest/config/
#
# EXAMPLE:
# $ export INSTA485_SETTINGS=secret_key_config.py
app.config.from_envvar('instru_ex_497', silent=True)
import instru_ex_497.model
import instru_ex_497.views
