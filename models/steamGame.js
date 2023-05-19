const { json } = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const steamGameSchema = new Schema({
    appid: String,
    count: {
        type: Number,
        default: 1
    },
    maxlength: {
        type: String,
        default: 300
    },
    format: {
        type: String
    }
})