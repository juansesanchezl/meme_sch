const PORT = process.env.PORT || 5000;
const express = require('express')
const app = express()
const cookieSession = require('cookie-session')
const passport = require('passport');
require('./passport')
const isLoggedIn = require('./Middleware/auth')
app.use(cookieSession({
  name: 'twitter-auth-session',
  keys: ['key1', 'key2']
}))
app.use(passport.initialize());
app.use(passport.session());
app.get('/',isLoggedIn,(req,res)=>{
  res.send(`Hello ${req.user.displayName}`)
})
app.get('/logout', (req, res) => {
    req.session = null;
    req.logout();
    res.redirect('/');
  })
app.get('/auth/error', (req, res) => res.send('Unknown Error'))
app.get('/auth/twitter',passport.authenticate('twitter'));
app.get('/auth/twitter/callback',passport.authenticate('twitter', { failureRedirect: '/auth/error' }),
function(req, res) {
  console.log("Someone Enter");
  res.redirect('/');
});
app.listen(PORT,()=>{
  console.log(`Listening on Port ${PORT}`);
})