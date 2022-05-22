//const {DataTypes} = require('sequelize');
const sequelize = require('../utils/sequelize');
const CO = require('./CO');
const Topic = require('./Topic');

const Topic_CO = sequelize.define('Topic_CO', {
    
  },{
    timestamps  :false
    
  });

Topic.belongsToMany(CO, {through : Topic_CO});
CO.belongsToMany(Topic, {through : Topic_CO});

module.exports = Topic_CO;