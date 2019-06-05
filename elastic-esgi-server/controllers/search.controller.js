const httpStatus = require('http-status');
const elasticClient = require('../libs/elasticClient');
const { INDEX_OFFRES_EMP } = require('../constantes/elastic.constantes');

/**
 * Search
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function search(req, res, next) {
    elasticClient.search({
        index: INDEX_OFFRES_EMP,
        body: {
            from: 0,
            size: 0,
            query: {
                match_all: {}
            },
            aggs: {
                "Nombre d'offres par ville": {
                    terms: {
                        field: "localisation.ville.keyword",
                        size: 10
                    }
                }
            }
        }
    })
        .then(data => res.status(httpStatus.OK).send(data))
        .catch(e => next(e));
}

module.exports = {
    search,
};