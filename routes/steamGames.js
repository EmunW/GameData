const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const collectionController = require('../controllers/collection');


router.route('/')
    .get(collectionController.getImages)

module.exports = router;