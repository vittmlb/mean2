/**
 * Created by Vittorio on 20/06/2017.
 */
module.exports = function(app) {
    const index = require('../controllers/index.server.controller');
    app.get('/*', index.render);
};