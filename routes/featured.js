const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const featureController = require('../controllers/feature');


router.route('/')
    .get(featureController.getImages)

module.exports = router;