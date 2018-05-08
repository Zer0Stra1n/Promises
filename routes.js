'use strict';

const api = module.exports,
    data = require('./movies'),
    path = require('path');

api.main = (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
}

api.movies = (req, res) => {
    res.status(200).json(data);
}