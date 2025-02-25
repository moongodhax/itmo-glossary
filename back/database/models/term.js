'use strict';

const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Term extends Model { }

  Term.init({
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    x: { type: DataTypes.INTEGER, allowNull: false },
    y: { type: DataTypes.INTEGER, allowNull: false },
  }, {
    sequelize,
    modelName: 'Term',
  });

  return Term;
};