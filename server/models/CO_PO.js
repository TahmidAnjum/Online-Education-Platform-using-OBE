const {DataTypes} = require('sequelize');
const sequelize = require('../utils/sequelize');
const CO = require('./CO');
const PO = require('./PO');

const CO_PO = sequelize.define('CO_PO', {
  },{
    timestamps  :false
  });
PO.belongsToMany(CO, {through : CO_PO});
CO.belongsToMany(PO, {through : CO_PO});


module.exports = CO_PO;