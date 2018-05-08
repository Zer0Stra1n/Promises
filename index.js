'use strict';

const express = require('express'),
    routes = require('./routes'),
    port = 3000,
    app = express();

app.route('/').get(routes.main);
app.route('/data').get(routes.movies);
app.listen(port);