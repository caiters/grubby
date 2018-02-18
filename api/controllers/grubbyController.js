//getRandomGrubby
const grubbys = require('../models/grubbyModel');
const url = require('url');

exports.getRandomGrubby = function(req,res) {
  const hostname = req.headers.host;
  const randomNumber = Math.floor(Math.random() * (grubbys.length));
  res.json(`http://${hostname}/images/${grubbys[randomNumber]}`);
}