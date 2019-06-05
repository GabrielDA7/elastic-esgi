const httpStatus = require('http-status');


/**
 * Search
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function search(req, res, next) {
    const text = req.params.term;
    res.status(httpStatus.OK).send({"text": text});
}

module.exports = {
    search,
};