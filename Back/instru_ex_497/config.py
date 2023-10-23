"""InstruEx497 development configuration."""

import pathlib
# Root of this application, useful if it doesn't occupy an entire domain
APPLICATION_ROOT = '/'
# Secret key for encrypting cookies
SECRET_KEY = b'\xda\xeb\xc1I\x0f6\x83"\xd94\x08\xd6\xa6\x9f\xd3P\xba\xf5\xecV\xd8/\r\xac'
SESSION_COOKIE_NAME = 'login'
# File Upload to var/uploads/
EECS497_ROOT = pathlib.Path(__file__).resolve().parent.parent
UPLOAD_FOLDER = EECS497_ROOT/'var'/'uploads'
ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg', 'gif'])
MAX_CONTENT_LENGTH = 16 * 1024 * 1024
# Database file is var/insta485.sqlite3
DATABASE_FILENAME = EECS497_ROOT/'var'/'data.sqlite3'