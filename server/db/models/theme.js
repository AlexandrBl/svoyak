const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Theme extends Model {
    static associate({ UserTheme, Question }) {
      this.hasMany(UserTheme, { foreignKey: 'theme_id' });
      this.hasMany(Question, { foreignKey: 'theme_id' });
    }
  }
  Theme.init({
    name: {
      allowNull: false,
      unique: true,
      type: DataTypes.TEXT,
    },
    img_path: {
      allowNull: false,
      type: DataTypes.TEXT,
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
    modelName: 'Theme',
  });
  return Theme;
};
