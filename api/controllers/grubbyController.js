//getRandomGrubby
const grubbys = require('../models/grubbyModel');
const url = require('url');
const path = require('path');
const Jimp = require('jimp');

function sendGrubby(file, res) {
  res.sendFile(file, { root: path.join(__dirname, '..', '..', 'images')});
}

exports.getSpecificGrubby = function(req, res, next) {
  const id = req.params.id;
  const dimensions = req.params.dimensions.split('x');
  const width = Number(dimensions[0]);
  const height = Number(dimensions[1]);
  if(grubbys[id]) {
    return Jimp.read(path.join(__dirname, '..', '..', 'images', grubbys[id]))
      .then( img => img.clone())
      .then( img => img.cover(width,height))
      .then( img => img.getBuffer(Jimp.MIME_JPEG, function(err, buffer){
        res.set('Content-Type', 'image/jpeg');
        res.send(buffer);
      }));
  }
  //next('image not found');
  next();
}

exports.getRandomGrubby = function(req,res) {
  const randomNumber = Math.floor(Math.random() * (grubbys.length));
  console.log(grubbys[randomNumber]);
  sendGrubby(grubbys[randomNumber], res);
}