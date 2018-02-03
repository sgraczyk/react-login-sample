if (process.env.NODE_ENV === 'production') {
  module.exports = require('./configure.prod'); // eslint-disable-line global-require
} else {
  module.exports = require('./configure.dev'); // eslint-disable-line global-require
}
