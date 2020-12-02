module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      },
    },
    password: DataTypes.STRING,
  });
  User.associate = function (models) {
    User.hasMany(models.Wish, {
      onDelete: "cascade"
    });
  };
  

  return User;
};
