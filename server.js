/**
 * Created by Vittorio on 07/06/2017.
 */
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const configureMonogoose = require('./config/mongoose');
const configureExpress = require('./config/express');
const configurePassport = require('./config/passport');

const db = configureMonogoose();
const app = configureExpress();
const passport = configurePassport();

app.listen(3000);
module.exports = app;

console.log('Server running at http://localhost:3000/');