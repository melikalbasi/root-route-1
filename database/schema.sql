DROP DATABASE IF EXISTS root_route_react;

CREATE DATABASE root_route_react;

USE root_route_react;

<<<<<<< HEAD

=======
>>>>>>> d74a5ec59c352dae3f462f14576ff63952967fe4
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