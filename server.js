const express = require('express');
const session = require('express-session');
const passport = require('./config/passport');

const PORT = process.env.PORT || 8080;
const db = require('./models');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

require('./routes/html-routes.js')(app);
require('./routes/api-routes.js')(app);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log('==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.', PORT, PORT);
  });
});
