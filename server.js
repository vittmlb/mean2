/**
 * Created by Vittorio on 07/06/2017.
 */
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

process.env.clientId = '144389573760-3e2falftrqt87sqomkm7mhnj411p51j5.apps.googleusercontent.com';
process.env.clientSecret = 'BwZab72eI5ubd6_crgAuqSg-';
process.env.callbackURL = 'http://localhost:3000/oauth/google/callback';

const configureMonogoose = require('./config/mongoose');
const configureExpress = require('./config/express');
const configurePassport = require('./config/passport');

const db = configureMonogoose();
const app = configureExpress();
const passport = configurePassport();

app.listen(3000);
module.exports = app;

console.log('Server running at http://localhost:3000/');