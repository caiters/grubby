//getRandomGrubby
const grubbys = require('../models/grubbyModel');
const url = require('url');
const path = require('path');

function sendGrubby(file, res) {
  res.sendFile(file, { root: path.join(__dirname, '..', '..', 'images')});
}

exports.getSpecificGrubby = function(req, res) {
  const id = req.params.id;
  if(grubbys[id]) {
    sendGrubby(grubbys[id], res);
  } else {
    //err
  }
}

exports.getRandomGrubby = function(req,res) {
  const randomNumber = Math.floor(Math.random() * (grubbys.length));
  console.log(grubbys[randomNumber]);
  sendGrubby(grubbys[randomNumber], res);
  // later: use xsendfile with nginx unless we do cropping resizing etc then that doesn't make sense
}