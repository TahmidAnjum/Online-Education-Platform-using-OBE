const {DataTypes} = require('sequelize');
const sequelize = require('../utils/sequelize');
//const CO = require('./CO');

const PO = sequelize.define('PO', {
    // uid : {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    //   autoIncrement: true // Automatically gets converted to SERIAL for postgres
    // },
  
    name : {
      type: DataTypes.STRING,
      unique : true
    }
  },{
    timestamps  :false
  });

//PO.belongsToMany(CO,{through:"CO_PO"});

module.exports = PO;