/**
 * Created by Vittorio on 20/06/2017.
 */
module.exports = {
    // Development configuration options
    db: 'mongodb://localhost/mean2',
    sessionSecret: 'developmentSessionSecret',
    google: {
        clientId: '144389573760-3e2falftrqt87sqomkm7mhnj411p51j5.apps.googleusercontent.com',
        clientSecret: 'BwZab72eI5ubd6_crgAuqSg-',
        callbackURL: 'http://localhost:3000/oauth/google/callback'
    }
};