module.exports = function(app) {
  const grubby = require('../controllers/grubbyController');

  app.get('/random', grubby.getRandomGrubby);
  app.get('/grubby/:id', grubby.getSpecificGrubby);
  app.use(function(req, res){ res.status(404).json({ '404': 'not found' })})
  //app.use(function(err, req, res, next){ res.status(500).json({ '500': err })})
}