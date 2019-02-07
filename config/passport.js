var passport = require("passport");
require("dotenv").config()

var GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
passport.serializeUser(function(user, done) {
  if (user) {
    console.log("serialize", user)
   done(null, user);
  }
});
passport.deserializeUser(function(user, done) {
  console.log("deserialize", user.id)
  if (user) {
    done(null, user);
  }

});
passport.use(
 new GoogleStrategy(
  {
   clientID: process.env.GOOGLE_CLIENT_ID,
   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
   callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
   var userData = {
    email: profile.emails[0].value,
    name: profile.displayName,
    token: accessToken
   };
   done(null, userData);
  }
 )
);