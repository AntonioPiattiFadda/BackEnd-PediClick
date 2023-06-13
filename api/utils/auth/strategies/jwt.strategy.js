// La mayoria de estas cosas las saco de la documentacion.
const { Strategy, ExtractJwt } = require('passport-jwt');
const { config } = require('./../../../config/config');

var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.jwtSecret;
//opts.issuer = 'accounts.examplesoft.com';
//opts.audience = 'yoursite.net';

const JwtStrategy = new Strategy(opts, (jwt_payload, done) => {
  return done(null, jwt_payload);
});

module.exports = JwtStrategy;
