const isLoggedIn = (req, res, next) => {
    console.log("Entro isLoggedIn");
    if (req.user) {
      next(req,res);
    } else {
      res.status(401).send('Not Logged In');
    }
  }
  module.exports = isLoggedIn