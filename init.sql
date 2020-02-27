CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  name VARCHAR(50),
  email VARCHAR(255) UNIQUE
);

INSERT INTO users (name, email) VALUES 
  ('Jerry', 'jerry@example.com'), 
  ('George', 'george@example.com');