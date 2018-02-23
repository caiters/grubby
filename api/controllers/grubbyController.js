//getRandomGrubby
const grubbys = require('../models/grubbyModel');
const url = require('url');
const path = require('path');
const Jimp = require('jimp');

exports.getGrubby = function(req, res, next) {
  const id = req.params.id;
  const grubbyId = id === 'random' ? Math.floor(Math.random() * (grubbys.length)) : id;
  const dimensions = req.params.dimensions.split('x');
  const width = Number(dimensions[0]);
  const height = Number(dimensions[1]);

  if (grubbys[grubbyId]) {
    return Jimp.read(path.join(__dirname, '..', '..', 'images', grubbys[grubbyId]))
    .then( img => img.clone())
    .then( img => img.cover(width, height))
    .then( img => img.getBuffer(Jimp.MIME_JPEG, function(err, buffer){
      res.set('Content-Type', 'image/jpeg');
      res.send(buffer);
    }));
    next();
  }
}