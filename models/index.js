// eslint-disable-next-line strict
'use strict';

var fs = require('fs');
var path = require('path');
// eslint-disable-next-line import/no-unresolved
var Sequelize = require('sequelize');

var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || 'development';
// eslint-disable-next-line import/no-dynamic-require
var config = require(`${__dirname}/../config/config.js`)[env];
var db = {};

if (config.use_env_constiable) {
  var sequelize = new Sequelize(process.env[config.use_env_constiable]);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    // eslint-disable-next-line no-undef
    // eslint-disable-next-line block-scoped-var
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
        db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// eslint-disable-next-line no-undef
// eslint-disable-next-line block-scoped-var
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
