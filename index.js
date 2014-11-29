// Note source maps are _intentionally_ not used here so third party modules
// can easily find bugs in the transpiled sources we use source maps in tests.

require('6to5/polyfill')
module.exports = require('./build/index');
