'use strict';

const api = module.exports,
    axios = require('axios'),
    path = require('path');

api.comparison = (req, res) => {
    res.sendFile(path.resolve(__dirname, 'comparison.html'));
}

api.callbacks = (req, res) => {
    res.sendFile(path.resolve(__dirname, 'callbacks.html'));
}

api.data = (req, res) => {
    let url = 'https://pokeapi.co/api/v2/pokemon/' + req.query.mon
    axios.get(url).then(resp => {
        return res.status(200).json(resp.data);
    }).catch(error => console.log(error));
}