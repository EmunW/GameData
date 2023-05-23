const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const playerController = require('../controllers/player');


router.route('/')
    .get(catchAsync(playerController.getImages))

module.exports = router;