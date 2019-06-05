require('dotenv').config();
const Joi = require('@hapi/joi');

const envVarsSchema = Joi.object().keys({
    NODE_ENV: Joi.string()
        .allow(['development', 'production', 'test', 'provision'])
        .default('development'),
    PORT: Joi.number()
        .default(4040),
    ELASTIC_HOSTNAME: Joi.string()
        .default('localhost'),
    ELASTIC_PORT: Joi.number()
        .default(9200),
}).unknown()
    .required();

const { error, value: envVars } = Joi.validate(process.env, envVarsSchema);

if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

const config = {
    env: envVars.NODE_ENV,
    port: envVars.PORT,
    elasticHostname: envVars.ELASTIC_HOSTNAME,
    elasticPort: envVars.ELASTIC_PORT,
};

module.exports = config;
