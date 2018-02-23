const express = require('express');
const path = require('path');

module.exports = function(app) {
  const grubby = require('../controllers/grubbyController');

  app.get('/', express.static('./public'));
  app.get('/grubby/:id/:dimensions', grubby.getGrubby);
  app.use(function(req, res){ res.status(404).json({ '404': 'not found' })})
  //app.use(function(err, req, res, next){ res.status(500).json({ '500': err })})
}