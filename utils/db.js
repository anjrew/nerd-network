
const spicedPg = require('spiced-pg');
const relation = 'nerd-network';

// process.env.NODE_ENV === "production" ? secrets = process.env : secrets = require('./secrets');
const dbUrl = process.env.DATABASE_URL || `postgres:postgres:postgres@localhost:5432/${relation}`;
const db = spicedPg(dbUrl);

module.exports.ids = {
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    password: 'password'
};

module.exports.db = {
    
    getUserProfileById: function (id) {
        return db.query(`
        SELECT first,last,email
        FROM users`,
        [id]
        );
    },
    getHashedPWord: function (email) {
        return db.query(`
            SELECT password FROM users WHERE $1 = email; 
            `,
        [email]
        );
    },

    addUser: function (first, last, email, password) {
        return db.query(`
                INSERT INTO users(first, last, email, password) 
                VALUES ($1, $2, $3, $4)
                RETURNING id, first, last email;
                `,
        [first, last, email, password]
        );
    }

};


