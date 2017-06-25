/**
 * Created by Vittorio on 20/06/2017.
 */
exports.render = function(req, res) {
    const user = (!req.user) ? null: {
        _id: req.user.id,
        firstName: req.user.firstName,
        lastName: req.user.lastName
    };
    res.render('index', {
        title: 'Hello World',
        user: JSON.stringify(user)
    })
};