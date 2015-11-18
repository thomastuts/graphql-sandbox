import {knex} from '../server';
import jwt from 'jsonwebtoken';

export function verifyCredentials(username, password) {
  return knex('users').where({username}).first().then((user) => {
    if (user.password === password) {
      return user;
    }
    else {
      throw new Error({
        code: 'ERR_NO_AUTH',
        message: 'Not authenticated'
      });
    }
  });
}

export function generateJwtTokenForUser(user) {
  return jwt.sign({
    id: user.id,
    username: user.username
  }, process.env.APP_SECRET);
}

export function addUserToRequest(req, res, next) {
  const token = req.header('Authorization').replace('Bearer ', '');
  const payload = jwt.verify(token, process.env.APP_SECRET);
  knex('users').where({id: payload.id}).first().then((user) => {
    req.user = {
      id: user.id,
      username: user.username
    };
    next();
  });
}
