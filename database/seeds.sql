CREATE TABLE paths (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(100),
    description VARCHAR(500),
    image VARCHAR(500),
    PRIMARY KEY (id)
);

INSERT INTO paths (name, description, image)
VALUES ("Frontend", "This is the end of the world", "https://i.imgur.com/TVP2v51.jpg");