module.exports = function(app) {
  const grubby = require('../controllers/grubbyController');

  app.route('/random')
    .get(grubby.getRandomGrubby);

  app.route('/grubby/:id')
    .get(grubby.getSpecificGrubby);

  //app.route('/random-image')
}