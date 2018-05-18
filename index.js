'use strict';

const express = require('express'),
    routes = require('./routes'),
    port = 3000,
    app = express();

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

app.route('/').get(routes.callbacks);
app.route('/comparison').get(routes.comparison);
app.route('/data').get(routes.data);
app.listen(port);