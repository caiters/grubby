const fs = require('fs');

// gets array of all grubby images
const grubbys = fs.readdirSync('./images/');

module.exports = exports = grubbys;