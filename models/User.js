import { create } from 'domain';

const bcrypt = require('bcrypt');
const db = require('../config/connection');


findUserById = (id) =>{
    const queryPromise = db.one(`
        SELECT * 
        FROM users
        WHERE id = $1  
        `, id)
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


