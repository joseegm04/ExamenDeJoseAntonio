'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rickymorty extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  rickymorty.init({
    nombre: DataTypes.STRING,
    genero: DataTypes.STRING,
    imagen: DataTypes.STRING,
    url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'rickymorty',
  });
  return rickymorty;
};