const express = require('express');

const router = express.Router();

router.get('/',(req,res)=>{
    res.send('<h1>Mutu</h1>')
});

router.post('/',(req,res)=>{
    console.log(req.body);
    res.send('<h1>Mutu</h1>');
});

module.exports = router;