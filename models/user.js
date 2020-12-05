// eslint-disable-next-line import/no-unresolved
const bcrypt = require('bcryptjs');
// eslint-disable-next-line func-names
module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      },
    },
    password: {
      type: DataTypes.STRING,
      // eslint-disable-next-line comma-dangle
      allowNull: false
    },
  });

  User.associate = function (models) {
    User.hasMany(models.Wish, {
      onDelete: "cascade"
    });
  };
  // eslint-disable-next-line func-names
  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  User.addHook('beforeCreate', (user) => {
    // eslint-disable-next-line no-param-reassign
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });

  return User;
};
