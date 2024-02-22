const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserTheme extends Model {
    static associate({ User, Theme }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.belongsTo(Theme, { foreignKey: 'theme_id' });
    }
  }
  UserTheme.init({
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    theme_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Themes',
        key: 'id',
      },
    },
    score: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'UserTheme',
  });
  return UserTheme;
};
