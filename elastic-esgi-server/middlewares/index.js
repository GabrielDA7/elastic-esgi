const errorConverter = require('./errorConverter.middleware');
const errorHandler = require('./errorHandler.middleware');
const notFoundHandler = require('./notFoundHandler.middleware');

module.exports = {
    errorConverter,
    errorHandler,
    notFoundHandler,
}