module.exports = function(app) {
  const grubby = require('../controllers/grubbyController');

  app.route('/random')
    .get(grubby.getRandomGrubby);
}