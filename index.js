const settings = require('./settings.json');
const express = require('express');
const hbs = require('hbs');

const Eth = require('ethjs');
const Abi = require('ethjs-abi');

// const Eth = require('ethjs');
// const EthereumTx = require('ethereumjs-tx');
// const Abi = require('ethjs-abi');

var app = express();
app.use(express.json());

app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/img'));
app.use(express.static(__dirname + '/js'));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/vendor'));

app.get('/home', (req, res) => {
    res.send({
        plaintext: result,
        timestamp: Date.now()
    });
});

app.get('/', (req, res) => {
    res.render('index.hbs')
});

app.get('/dogs', (req, res) => {
    res.send([{name: 'puppy'}]);
});

app.listen(3000);