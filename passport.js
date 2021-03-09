const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

passport.use(new TwitterStrategy({
  consumerKey: "KVKracTMJirMv51Hhk4ssgyn3",
  consumerSecret: "lumnQiCaTvliaqd8oaS22N4cD1YTz9EOmXUmXcN5Gx93ybETwl",
  callbackURL: "http://www.localhost:8000/auth/twitter/callback",
},
function(accessToken, refreshToken, profile, done) {
  return done(null, profile);
}
));