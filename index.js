'use strict';

const express = require('express'),
    routes = require('./routes'),
    port = 3000,
    app = express();

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

app.route('/').get(routes.callbacks);
app.route('/promises').get(routes.promises);
app.route('/observables').get(routes.observables);
app.route('/comparison').get(routes.comparison);
app.route('/data').get(routes.data);
app.listen(port);

console.log('Application loaded on: http://localhost:'+port);
