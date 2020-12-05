// Requiring path to so we can use relative routes to our HTML files
const path = require('path');

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require('../config/middleware/isAuthenticated');

// eslint-disable-next-line func-names
module.exports = function (app) {
  app.get('/', (req, res) => {
    // If the user already has an account send them to the wishlist page
    if (req.user) {
      res.redirect('/wishlist');
    }
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  app.get('/login', (req, res) => {
    // If the user already has an account send them to the wishlist page
    if (req.user) {
      res.redirect('/wishlist');
    }
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  // Here we've add our isAuthenticated middleware to this route.
  app.get('/wishlist', isAuthenticated, (req, res) => {
    console.log(res.user);
    res.render('wishlist');

    // {user: req.user}
  });
};
