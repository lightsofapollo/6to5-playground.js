var root = __dirname + '/build/';

require('6to5/polyfill')
require('source-map-support').install();
module.exports = require('./build/index');
