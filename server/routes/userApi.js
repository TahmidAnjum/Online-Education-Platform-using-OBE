const express = require('express');
const Student = require('../models/Student');
const Teacher = require('../models/Teacher');
const PO = require('../models/PO')
const jwt = require('jsonwebtoken');

const router = express.Router();

router.get('/',(req,res)=>{
    res.send('<h1>Mutu</h1>')
})

router.post('/',(req,res)=>{
    // console.log(req.body);
    // res.send('<h1>Mutu</h1>');
    const dat = {msg : "wrong"};
  (async () => {
    const tab =  await Teacher.findOne({
      where :
      {
        email : req.body.email,
        
      }
    });
    //console.log(tab);
    if(tab==null)
    {
      (async () => {
        const tab =  await Student.findOne({
          where :
          {
            student_id : parseInt(req.body.email)
          }
        });
        if(tab==null)
        {
          res.send({msg: 'User not found'});
        }
        else
        {
          const passtoken = jwt.sign(req.body.password, process.env.ACCESS_TOKEN_SECRET);
          if(passtoken==tab.password)
          {
            console.log("mission successful");
            res.status(201).send(tab);
          }
          else{
            console.log(tab.password,passtoken);
            res.send({msg: 'Wrong password'});
          }
        }
      })().catch(e=>console.log(e));;
    }
    else
    {
      const passtoken = jwt.sign(req.body.password, process.env.ACCESS_TOKEN_SECRET);
      if(passtoken==tab.password)
      {
        console.log("mission successful");
        res.status(201).send(tab);
      }
      else{
        //console.log(tab.password,passtoken);
        res.send({msg: 'Wrong password'});
      }
    }
    //res.send(tab);
  })().catch(e=>console.log(e));;
});

module.exports = router;