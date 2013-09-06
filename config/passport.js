
/*!
 * Module dependencies.
 */

var mongoose = require('mongoose');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var User = mongoose.model('User')

/**
 * Expose
 */

module.exports = function (passport, config) {
  // serialize sessions
  passport.serializeUser(function(user, done) {
    done(null, user.id)
  })

  passport.deserializeUser(function(id, done) {
    User.findOne({ _id: id }, function (err, user) {
      done(err, user)
    })
  })
  // use google strategy
  passport.use(new GoogleStrategy({
      clientID: config.google.clientID,
      clientSecret: config.google.clientSecret,
      callbackURL: config.google.callbackURL,
	  scope: ['https://www.googleapis.com/auth/plus.me', 'https://www.googleapis.com/auth/userinfo.email', 'https://www.googleapis.com/auth/userinfo.profile']
    },
    function(accessToken, refreshToken, profile, done) {
	  console.log('Trying to find user in DB');
	  console.log('Access Token: ' + accessToken);
	  console.log('Refresh Token: ' + refreshToken);
      User.findOne({ 'google.id': profile.id }, function (err, user) {
        if (!user) {
          user = new User({
			authToken: accessToken,
           	name: profile.displayName,
            email: profile.emails[0].value,
            username: profile.username,
            provider: 'google',
            google: profile._json
          });
	      console.log('Saving user to DB');
          user.save(function (err) {
            if (err) console.log(err)
            return done(err, user)
          })
        } else {
		  console.log('User found - ' + user);
		  console.log('User access Token: ' + user.authToken);
		  console.log('New Access Token: ' + accessToken);
		  user.authToken = accessToken;
          return done(err, user)
        }
      })
    }
  ));
}
