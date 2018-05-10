'use strict';

const api = module.exports,
    axios = require('axios'),
    path = require('path');

api.main = (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
}

api.movies = (req, res) => {
    let url = 'https://pokeapi.co/api/v2/pokemon/' + req.query.mon
    axios.get(url).then(resp => {
        return res.status(200).json(resp.data);
    }).catch(error => console.log(error));
}