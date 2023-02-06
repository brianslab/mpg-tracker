CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE IF NOT EXISTS users(
  id          SERIAL PRIMARY KEY,
  username    text NOT NULL,
  password    text NOT NULL
);

CREATE TABLE IF NOT EXISTS entries(
  id          SERIAL PRIMARY KEY,
  user_id     integer REFERENCES users(id),
  date        date,
  miles       decimal(6,2),
  gallons     decimal(4,2),
  fill_cost   decimal(5,2)
);

INSERT INTO users (username, password) VALUES (
  'test_user', 
  crypt('password', gen_salt('bf'))
);

INSERT INTO entries (user_id, date, miles, gallons, fill_cost) VALUES (
  (SELECT id FROM users WHERE username = 'test_user'),
  '2023-01-02',
  321.45,
  12.34,
  56.78
);

INSERT INTO entries (user_id, date, miles, gallons, fill_cost) VALUES (
  (SELECT id FROM users WHERE username = 'test_user'),
  '2023-03-04',
  345.31,
  11.22,
  54.65
);