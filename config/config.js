/* eslint-disable quote-props */
require('dotenv').config();

module.exports = {

  'development': {
    'username': process.env.MYSQL_DB_USERNAME,
    'password': process.env.MYSQL_DB_PASSWORD,
    'database': process.env.MYSQL_DB_NAME,
    'host': process.env.MYSQL_DB_HOST,
    'dialect': 'mysql'
  },
  'test': {
    'username': 'root',
    'password': '',
    'database': 'database_test',
    'host': '127.0.0.1',
    'dialect': 'mysql'
  },
  'production': {
    'username': 'root',
    'password': '',
    'database': 'database_production',
    'host': '127.0.0.1',
    'dialect': 'mysql'
  }
};