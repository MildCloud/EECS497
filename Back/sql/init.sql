PRAGMA foreign_keys = ON;

CREATE TABLE users(
    username VARCHAR(20) NOT NULL,
    passward VARCHAR(40) NOT NULL,
    PRIMARY KEY(username)
);

CREATE TABLE POSTS(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    author VARCHAR(20) NOT NULL,
    name VARCHAR(20) NOT NULL,
    price VARCHAR(20) NOT NULL,
    description VARCHAR(250) NOT NULL,
    img_src VARCHAR(250) NOT NULL,
    FOREIGN KEY(author) REFERENCES users(username)
);

INSERT INTO users (username, passward)
VALUES ('Author', 'passward');
