const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://vinnyslins:lins2019@ds159661.mlab.com:59661/tindev', {
	useNewUrlParser: true
});

app.use(express.json());
app.use(routes);

app.listen(3333);
