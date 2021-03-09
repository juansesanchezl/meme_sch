const isLoggedIn = (req, res, next) => {
    console.log("Entro isLoggedIn");
    if (req.user) {
      next();
    } else {
      res.status(401).send('Not Logged In');
    }
  }
  module.exports = isLoggedIn