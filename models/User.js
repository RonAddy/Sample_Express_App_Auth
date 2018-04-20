import { create } from 'domain';

const bcrypt = require('bcrypt');
const db = require('../config/connection');


findUser = (uname) =>{
    const queryPromise = db.one(`
        SELECT * 
        FROM users
        WHERE  uname = $1
        `, uname)
    return queryPromise;
};

createUser = (user) => {
    const queryPromise = db.one(`
    INSERT INTO users (uname, email, password_digest)
    VALUES ($/uname/, $/email/, $/password_digest/)
    RETURNING *
    `, user
  );
  return queryPromise;
};

module.exports = {
    findUserById,
    createUser
}

