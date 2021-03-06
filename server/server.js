'use strict';

var express = require('express'),
    bodyParser = require('body-parser'),
    http = require('http'),
    path = require('path'),
    api = require('./routes/api'),
    login = require('./routes/login'),
    path = require("path");

var app = express();

app.set('port', process.env.PORT || 3001);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "PUT");
    next();
});

/* LOGIN ROUTES */
app.post('/api/login', login.login);
app.post('/api/logout', login.logout);


// JSON API
app.get('/api/peoples', api.listAll);
app.get('/api/peoples/:id', api.get);
app.put('/api/peoples/:id', api.update);


app.use(express.static(path.join(__dirname, 'static')));

app.listen(app.get('port'), function () {
    console.log('✔ Express server listening on http://localhost:%d/', app.get('port'));
});
