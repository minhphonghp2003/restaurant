'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.customer_address)
    }
  }
  address.init({
    addr_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    street: DataTypes.STRING,
    commune_ward: DataTypes.STRING,
    city: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'address',
  });
  return address;
};