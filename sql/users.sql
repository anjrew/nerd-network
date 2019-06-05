DROP TABLE IF EXISTS users;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    first VARCHAR(255) not null,
    last VARCHAR(255) not null,
    email VARCHAR(255) not null UNIQUE,
    password VARCHAR(255) not null,
    bio VARCHAR,
    pic_url VARCHAR,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);