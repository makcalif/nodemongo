require('dotenv/config');
var bodyParser = require('body-parser');
var express = require('express');
var assert = require('assert');
const mongoUtil = require('./mongoUtil');
//var MongoClient = require('mongodb').MongoClient;


mongoUtil.connectToServer((err, client) => {
	if (err) {
		console.log(err);
	}
});

const app = express(); 
const port = process.env.PORT || 8088;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Import routes
const saveRoute = require('./routes/save');
const readRoute = require('./routes/read');

app.use('/save', saveRoute);
app.use('/', readRoute); 
 
var server = app.listen(port, () => {});


