// eslint-disable-next-line import/no-unresolved
const passport = require('passport');
// eslint-disable-next-line import/no-unresolved
const LocalStrategy = require('passport-local').Strategy;

const db = require('../models');

passport.use(new LocalStrategy(
  {
    usernameField: 'email',
  },
  ((email, password, done) => {
    db.User.findOne({
      where: {
        // eslint-disable-next-line object-shorthand
        email: email,
      },
    }).then((dbUser) => {
      if (!dbUser) {
        return done(null, false, {
          message: 'Incorrect email.',
        });
      }
      if (!dbUser.validPassword(password)) {
        return done(null, false, {
          message: 'Incorrect password.',
        });
      }
      return done(null, dbUser);
    });
  }),
));

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((obj, cb) => {
  cb(null, obj);
});

module.exports = passport;
