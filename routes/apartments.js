const express = require('express');
const router = express.Router();
const { index, show } = require('../controllers/apartments');

router.get('/', index);
router.get('/:id', show);

module.exports = router;
