const { Client } = require('@elastic/elasticsearch');
const config = require('../config');

// TODO: configure
const client = new Client({ node: `http://${config.elasticHostname}:${config.elasticPort}` });

module.exports = client;