DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(30) NOT NULL,
  department_name VARCHAR(30) NOT NULL,
  price INT NOT NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Curling Iron", "Beauty", 30, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bob Marley Anthology", "Music", 40, 150);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hockey Stick", "Sports", 70, 250);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Buck Knife", "Hunting", 30, 300);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Flamingo Floaty", "Pool Supply", 60, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Boston Bruins Jersey", "Sports", 80, 175);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hockey Puck", "Sports", 20, 300);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Football", "Sports", 15, 300);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Coffee", "Food", 10, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("French Press", "Kitchen", 30, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Kitchen Aid", "Kitchen", 300, 200);