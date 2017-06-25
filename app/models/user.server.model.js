/**
 * Created by Vittorio on 22/06/2017.
 */
const mongoose = require('mongoose');
const crypto = require('crypto');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    username: {
        type: String,
        trim: true
    },
    password: String,
    salt: {
        type: String
    },
    provider: {
        type: String
    },
    providerId: String,
    providerData: {},
    created: {
        type: Date,
        default: Date.now
    }
});

UserSchema.virtual('fullName').get(function () {
    return this.firstName + ' ' + this.lastName;
});

// UserSchema.pre('save', function (next) {
//     if(this.password) {
//         // this.salt = new Buffer(crypto.randomBytes(16).toString('hex'), 'hex');
//         // this.password = this.hashPassword(this.password);
//         return this.password;
//     }
//     next();
// });

UserSchema.methods.hashPassword = function(password) {
    // return crypto.pbkdf2Sync(password, this.salt, 10000, 64).toString('hex');
    return password;
};

UserSchema.methods.authenticate = function(password) {
    return this.password === password;
};

UserSchema.statics.findUniqueUsername = function(username, suffix, callback) {
    let possibleUsername = username + (suffix || '');
    this.findOne({
        username: possibleUsername
    }, (err, user) => {
        if (!err) {
            if (!user) {
                callback(possibleUsername);
            } else {
                return this.findUniqueUsername(username, (suffix || 0) +
                    1, callback);
            }
        } else {
            callback(null);
        }
    });
};

UserSchema.set('toJSON', {
    getters: true,
    virtuals: true
});



mongoose.model('User', UserSchema);