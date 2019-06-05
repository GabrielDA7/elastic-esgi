const { Router } = require('express');
const searchController = require('../controllers/search.controller');

const router = Router();

router.route('/:text')
  /** GET /api/search -  Search song */
  .get(searchController.search);

module.exports = router;
