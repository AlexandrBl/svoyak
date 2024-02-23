const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate({ Theme, Answer }) {
      this.belongsTo(Theme, { foreignKey: 'theme_id' });
      this.hasMany(Answer, { foreignKey: 'question_id' });
    }
  }
  Question.init({
    question_text: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    theme_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Themes',
        key: 'id',
      },
    },
    salary: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    img_path: {
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
    modelName: 'Question',
  });
  return Question;
};
