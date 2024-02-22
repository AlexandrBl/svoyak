const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {
    static associate({ Question }) {
      this.belongsTo(Question, { foreignKey: 'question_id' });
    }
  }
  Answer.init({
    answer_text: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    question_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Questions',
        key: 'id',
      },
    },
    isRight: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
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
    modelName: 'Answer',
  });
  return Answer;
};
