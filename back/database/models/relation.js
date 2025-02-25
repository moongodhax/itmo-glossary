'use strict';

const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Relation extends Model { }

  Relation.init({
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    firstTermId: { type: DataTypes.INTEGER, allowNull: false },
    secondTermId: { type: DataTypes.INTEGER, allowNull: false },
    relationType: { type: DataTypes.STRING, allowNull: false },
  }, {
    sequelize,
    modelName: 'Relation',
  });

  return Relation;
};