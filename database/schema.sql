DROP DATABASE IF EXISTS root_route_react;

CREATE DATABASE root_route_react;

USE root_route_react;

CREATE TABLE paths (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(100),
    description VARCHAR(500),
    image VARCHAR(500),
    createdAt VARCHAR(500),
    updatedAt VARCHAR(500),
    PRIMARY KEY (id)
);

CREATE TABLE subjects (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(100),
    description VARCHAR(500),
    image VARCHAR(500),
    createdAt VARCHAR(500),
    updatedAt VARCHAR(500),
    PRIMARY KEY (id),
    pathid INT,
    FOREIGN KEY (pathid) REFERENCES paths(pathid)
);