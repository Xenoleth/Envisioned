const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const favicon = require('serve-favicon');

const init = (data) => {
    const app = express();

    // Config application
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    require('../config/auth.config')(app, data);

    app.use('/static', express.static(path.join(__dirname, '../../client')));
    app.use('/libs', express.static(path.join(__dirname, '../../node_modules')));

    app.use(favicon(path.join(__dirname,'../../client/images/favicon.ico')));
    // add routers
    require('./routers').attachTo(app, data);

    return Promise.resolve(app);
};

module.exports = { init };