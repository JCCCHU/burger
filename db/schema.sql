DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
	id INT not null auto_increment,
    burger_name varchar(30),
    devoured boolean default false,
    PRIMARY KEY (id)
);	