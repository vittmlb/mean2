/**
 * Created by Vittorio on 20/06/2017.
 */
const config = require('./config');
const express = require('express');
const morgan = require('morgan');
const compress = require('compression');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');
const handlebars = require('express-handlebars').create({layoutsDir: path.join(__dirname, '../app/views/layouts'), defaultLayout: 'main'});
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');

module.exports = function() {

    const app = express();

    if(process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    } else if(process.env.NODE_ENV === 'production') {
        app.use(compress());
    }

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(methodOverride());

    app.use(session({
        secret: config.sessionSecret,
        resave: true,
        saveUninitialized: true
    }));

    app.engine('handlebars', handlebars.engine);
    app.set('views', path.join(__dirname, '../app/views'));
    app.set('view engine', 'handlebars');

    app.use(flash());
    app.use(passport.initialize());
    app.use(passport.session());

    app.use('/', express.static('./public'));
    app.use('/lib', express.static(path.resolve('./node_modules')));

    require('../app/routes/users.server.routes')(app);
    require('../app/routes/index.server.routes')(app);
    
    return app;

};