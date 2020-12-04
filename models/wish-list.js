module.exports = function (sequelize, DataTypes) {
  const Wish = sequelize.define('Wish', {
    wish_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len:[1]
      }
    },
    item: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len:[1]
      }
    },
  });

  Wish.associate = function (models) {
    Wish.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Wish;
};
