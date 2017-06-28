/**
 * Created by Vittorio on 22/06/2017.
 */
const User = require('mongoose').model('User');
const passport = require('passport');

const getErrorMessage = function(err) {
    let message = '';

    if (err.code) {
        switch (err.code) {
            case 11000:
            case 11001:
                message = 'Username already exists';
                break;
            default:
                message = 'Something went wrong';
        }
    } else {
        for (let errName in err.errors) {
            if (err.errors[errName].message) message = err.errors[errName].message;
        }
    }

    return message;
};

exports.signin = function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
        if (err || !user) {
            res.status(400).send(info);
        } else {
            // Remove sensitive data before login
            user.password = undefined;
            user.salt = undefined;

            req.login(user, function(err) {
                if (err) {
                    res.status(400).send(err);
                } else {
                    res.json(user);
                }
            });
        }
    })(req, res, next);
};

exports.signup = function(req, res) {
    const user = new User(req.body);
    user.provider = 'local';

    user.save((err) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            // Remove sensitive data before login
            user.password = undefined;
            user.salt = undefined;

            req.login(user, function(err) {
                if (err) {
                    res.status(400).send(err);
                } else {
                    res.json(user);
                }
            });
        }
    });
};

exports.signout = function(req, res) {
    req.logout();
    res.redirect('/');
};

exports.saveOAuthUserProfile = function(req, res, profile, done) {
    User.findOne({
        provider: profile.provider,
        providerId: profile.providerId
    }, function(err, user) {
        if (err) {
            return done(err);
        } else {
            if (!user) {
                const possibleUsername = profile.username ||
                    ((profile.email) ? profile.email.split('@')[0] : '');

                User.findUniqueUsername(possibleUsername, null,
                    function(availableUsername) {
                        profile.username = availableUsername;

                        user = new User(profile);

                        user.save((err) => {
                            if (err) {
                                const message = getErrorMessage(err);

                                req.flash('error', message);
                                return res.redirect('/signup');
                            }

                            return done(err, user);
                        });
                    });
            } else {
                return done(err, user);
            }
        }
    });
};

exports.requiresLogin = function(req, res, next) {
    if(!req.isAuthenticated()) {
        return res.status(401).send({
            message: 'User is no logged in'
        });
    }
    next();
};



// const User = require('mongoose').model('User');
// const passport = require('passport');
//
// function getErrorMessage(err) {
//     let message = '';
//
//     if(err.code) {
//         switch (err.code) {
//             case 11000:
//             case 11001:
//                 message = 'Username already exists';
//                 break;
//             default:
//                 message = 'Something went wrong';
//         }
//     } else {
//         for (let errName in err.errors) {
//             if(err.errors[errName].message) message = err.errors[errName].message;
//         }
//     }
//     return message;
// }
//
// exports.renderSignin = function(req, res, next) {
//     if(!req.user) {
//         res.render('signin', {
//             title: 'Sign-in Form',
//             messages: req.flash('error') || req.flash('info')
//         });
//     } else {
//         return res.redirect('/');
//     }
// };
//
// exports.renderSignup = function(req, res, next) {
//     if(!req.user) {
//         res.render('signup', {
//             title: 'Sign-up Form',
//             messages: req.flash('error')
//         });
//     }
// };
//
// exports.signup = function(req, res, next) {
//     if (!req.user) {
//         let user = new User(req.body);
//         user.provider = 'local';
//
//         user.save((err) => {
//             if (err) {
//                 const message = getErrorMessage(err);
//
//                 req.flash('error', message);
//                 return res.redirect('/signup');
//             }
//             req.login(user, (err) => {
//                 if (err) return next(err);
//                 return res.redirect('/');
//             });
//         });
//     } else {
//         return res.redirect('/');
//     }
// };
//
// exports.signout = function(req, res) {
//     req.logout();
//     res.redirect('/');
// };
//
// exports.create = function(req, res, next) {
//     const user = new User(req.body);
//     user.save((err) => {
//         if(err) {
//             return next(err);
//         } else {
//             return res.status(200).json(user);
//         }
//     });
// };
//
// exports.list = function(req, res, next) {
//     User.find({}, (err, users) => {
//         if(err) {
//             return next(err);
//         } else {
//             res.status(200).json(users);
//         }
//     });
// };
//
// exports.read = function(req, res) {
//     res.json(req.user);
// };
//
// exports.userById = function(req, res, next, id) {
//     User.findOne({_id: id}, (err, user) => {
//         if(err) {
//             return next(err);
//         } else {
//             req.user = user;
//             next();
//         }
//     });
// };
//
// exports.update = function(req, res, next) {
//     User.findByIdAndUpdate(req.user.id, req.body, {
//         'new': true
//     }, (err, user) => {
//         if(err) {
//             return next(err);
//         } else {
//             res.status(200).json(user);
//         }
//     });
// };
//
// exports.delete = function(req, res, next) {
//     req.user.remove(err => {
//         if(err) {
//             return next(err);
//         } else {
//             res.status(200).json(req.user);
//         }
//     });
// };