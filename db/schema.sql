DROP DATABASE IF EXISTS fund_db;

CREATE DATABASE fund_db;

USE fund_db;

CREATE TABLE user (
    id INTEGER AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(20) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE project (
    id INTEGER AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    description VARCHAR(100),
    date_created INTEGER,
    needed_funding INTEGER,
    user_id INTEGER,
    PRIMARY KEY (id)
);