const jwt = require('jsonwebtoken');

const secret = 'mycat';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY3NjQ5MzAxOX0.70L-ELFxhPKxbU9Fa-thYGDViNzVM3QMt8tUSWeOxA0';

function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

const payload = verifyToken(token, secret);
console.log(payload);
