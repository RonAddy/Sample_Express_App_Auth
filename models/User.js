const bcrypt = require('bcrypt');
const db = require('../config/connection');


const findByUsername = (username) =>{
    const queryPromise = db.one(`
        SELECT * 
        FROM users
        WHERE  username = $1
        `, username)
    return queryPromise;
};

const createUser = (user) => {
    const queryPromise = db.one(`
    INSERT INTO users (username, email, password_digest)
    VALUES ($/username/, $/email/, $/password_digest/)
    RETURNING *
    `, user
  );
  return queryPromise;
};

module.exports = {
    findByUsername,
    createUser
}

