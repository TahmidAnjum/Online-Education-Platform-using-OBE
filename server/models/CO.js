const {DataTypes} = require('sequelize');
const sequelize = require('../utils/sequelize');
//const PO = require('./PO');


const CO = sequelize.define('CO', {
    // uid : {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    //   autoIncrement: true
    // },
    name : {
      type: DataTypes.STRING,
    }
  },{
    timestamps  :false
  });

//CO.belongsToMany(PO,{through:"CO_PO"});


module.exports = CO;