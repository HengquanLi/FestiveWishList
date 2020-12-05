// Requiring our models and passport as we've configured it
const db = require('../models');
const passport = require('../config/passport');

// eslint-disable-next-line func-names
module.exports = function (app) {
  app.post('/api/login', passport.authenticate('local'), (req, res) => {
    console.log('got to login post route');
    res.json(req.user);
  });

  app.post('/api/signup', (req, res) => {
    console.log('got to signup post route');
    // eslint-disable-next-line no-console
    db.User.create({
      email: req.body.email,
      password: req.body.password,
    })
      .then(() => {
        // eslint-disable-next-line no-console
        res.redirect(307, '/api/login');
      })
      .catch((err) => {
        res.status(401).json(err);
        console.log(err);
      });
  });

  // Route for logging user out
  app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  // Route for getting some data about our user to be used client side
  app.get('/api/user_data', (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id,
      });
    }
  });
  app.get('/currentUser', (req, res) => res.json(req.user));
};
