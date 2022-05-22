const sequelize = require('../utils/sequelize');
const Problem = require('./Problem');
const CO = require('./CO');

const Problem_CO = sequelize.define('Problem_CO', {
    
  },{
    timestamps  :false
    
  });

CO.belongsToMany(Problem, {through : Problem_CO});
Problem.belongsToMany(CO, {through : Problem_CO});

module.exports = Problem_CO;