const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const email = require('../email');

router.get('/', (req, res) => {
    res.render('index');
});

//Set Storages
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })

  const upload = multer({ storage: storage})

router.post('/upload',upload.single('myFile'), (req, res, next) => {
  const file = req.file
  if(!file){
      //res.render('failed')
     res.status(401).render('failed')
      //return next(err)
  }else{
    res.render('success')
  } 
  var name = req.body.name;
  var emailu = req.body.email;
  var phone = req.body.ph;
  var tid = req.body.tid;
  path = file.originalname
  filename = path
  const text = `Name of The Client :${name}, Email of the Client :${emailu}, Phone of the Client :${phone}, Transaction ID of the Client :${tid}`
  email.email(text, filename, path);    // Sending the mail with the details 
});

module.exports = router;