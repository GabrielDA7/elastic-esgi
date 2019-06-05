const { Router } = require('express');
const { OK } = require('http-status');

const searchRoutes = require('./search.routes');


const router = Router();

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) => res.status(OK).send('OK'));

// mount auth routes at /search
router.use('/search', searchRoutes);




module.exports = router;
