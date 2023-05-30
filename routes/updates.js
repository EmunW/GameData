const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const updateController = require('../controllers/update');
const multer = require('multer')

router.route('/')
    .get(catchAsync(updateController.loadPage))

module.exports = router;