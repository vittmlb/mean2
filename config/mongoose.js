/**
 * Created by Vittorio on 22/06/2017.
 */
const config = require('./config');
const mongoose = require('mongoose');

module.exports = function() {

    const db = mongoose.connect(config.db);

    require('../app/models/user.server.model');
    require('../app/models/article.server.model');

    return db;

};