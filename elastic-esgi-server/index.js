const config = require('./config');
const server = require('./server');
const debug = require('debug')('node-server:index');

server.listen(config.port, () => {
    debug(`server started on port ${config.port} (${config.env})`);
});

module.exports = server;
