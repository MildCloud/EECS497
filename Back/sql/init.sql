PRAGMA foreign_keys = ON;

CREATE TABLE users(
    username VARCHAR(20) NOT NULL,
    fullname VARCHAR(40) NOT NULL,
    PRIMARY KEY(username)
);

CREATE TABLE POSTS(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title VARCHAR(100) NOT NULL,
    body TEXT NOT NULL,
    created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    author VARCHAR(20) NOT NULL,
    description VARCHAR(250) NOT NULL,
    img_src VARCHAR(250) NOT NULL,
    FOREIGN KEY(author) REFERENCES users(username)
);
INSERT INTO users(username, fullname)
VALUES ('awdeorio', 'Andrew DeOrio');
INSERT INTO POSTS(title, body, author, description, img_src)
VALUES ('My first post', 'This is the body of my first post', 'awdeorio', 'This is the description of my first post', './1.jpg');
