'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class customer_address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.address,{foreignKey:"addrId"})
      // this.belongsTo(models.customer,{foreignKey:"cusId"})
    }
  }
  customer_address.init({
    default:{
      type:DataTypes.INTEGER,
      defaultValue: 1,
    }
  }, {
    sequelize,
    modelName: 'customer_address',
  });
  return customer_address;
};