const sequelize = require('./sequelize');

require('../models/CO');
require('../models/PO');
require('../models/CO_PO');
require('../models/Course');
require('../models/Course_Teach');
require('../models/Teacher');
require('../models/Student');
require('../models/Student_Course');
require('../models/Question');
require('../models/Problem');
require('../models/Problem_CO');
require('../models/Mark');
require('../models/Topic');
require('../models/Grade');
require('../models/Topic_Course');
require('../models/Topic_CO');
require('../models/Feedback');
require('../models/Mod_Teach ');
require('../models/Qmod_Teach');
require('../models/Qset_Teach');

const connectDB = async() =>
{
    await sequelize.authenticate().catch(e=>{console.log(e)});
    // await sequelize.sync({ force : true })
    // .catch((e)=>{
    //     console.log(e)
    // });
}



module.exports = connectDB;