const settings = require('./settings.json');
const express = require('express');
const hbs = require('hbs');

const dogContract = require('./build/contracts/DogERC721Metadata.json')

const Eth = require('ethjs');
const Abi = require('ethjs-abi');
const Sign = require('ethjs-signer').sign;

var app = express();
app.use(express.json());

app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/img'));
app.use(express.static(__dirname + '/js'));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/vendor'));

const node = 'http://192.168.1.130:8545';
const contractAddress = '0x3cfa8ea36fc9bef5c666af8a5fa2d27960cd030c';

app.get('/home', (req, res) => {
    res.send({
        plaintext: result,
        timestamp: Date.now()
    });
});

app.get('/', (req, res) => {
    res.render('index.hbs');
});

const dog = (id) => {
    return new Promise((resolve, reject) => {
        const eth = new Eth(new Eth.HttpProvider(node));
        const contract = eth.contract(dogContract.abi).at('0x3cfa8ea36fc9bef5c666af8a5fa2d27960cd030c');
 
        resolve(contract.pack(id));
    });
}

app.get('/dog', async (req, res) => {
    const data = await dog(req.query.id);
    res.send(data);
});

app.post('/dog', (req, res) => {
    const eth = new Eth(new Eth.HttpProvider(node));

    eth.getTransactionCount('0xbd9f7daee6d5fc5595567aed84f0f52d694f056c').then((nonce) => {
        console.log(Number(nonce));
    
        console.log(req.body);

        const add_abi = 
            {
              "constant": false,
              "inputs": [
                {
                  "name": "name",
                  "type": "string"
                },
                {
                  "name": "dob",
                  "type": "uint256"
                },
                {
                  "name": "microchip",
                  "type": "string"
                },
                {
                  "name": "sex",
                  "type": "uint8"
                },
                {
                  "name": "dam",
                  "type": "uint256"
                },
                {
                  "name": "sire",
                  "type": "uint256"
                },
                {
                  "name": "owner",
                  "type": "address"
                }
              ],
              "name": "add",
              "outputs": [],
              "payable": true,
              "stateMutability": "payable",
              "type": "function"
            };

        const name = req.body.name;
        const dob = req.baseUrl.dob;
        const microchip = req.body.microchip;
        const dam = 0;
        const sire = 0; 
        const sex = 0;
        const owner = '0x9e1525DA6AB3498dda99B97dc13E79f4c44b79d8';
        const addPuppy = Abi.encodeMethod(add_abi, [name, dob, microchip, dam, sire, sex, owner]);

        const txParams = {
            nonce: 50,
            gasPrice: 2000000000, 
            gasLimit:  210000,
            to: '0x3cfa8ea36fc9bef5c666af8a5fa2d27960cd030c', 
            value: '0x00', 
            data: addPuppy,
            chainId: 4
        }
        
        var tx = Sign(txParams, '0x60f54928d665c30e3055863a7254d0eb9dc5d4aa14ef2b1af230085c690adada');
        console.log(tx);

        eth.sendRawTransaction(tx).then((txHash) => {
            res.send(txHash);
        });
    });
});

app.get('/dogs', (req, res) => {
    const eth = new Eth(new Eth.HttpProvider(node));
    const contract = eth.contract(dog.abi).at(contractAddress);

    contract.name().then((data) => {
        res.send(data);
    });
});

app.get('/dognames', async (req, res) => {
    const _count = await count();
    const dogs = [];

    for (i = 0; i < 2; i++) {
        var _pup = await dog(i);
        console.log(_pup.name);
        dogs.push(_pup.name);
    }

    res.send(dogs);
});

const count = () => {
    return new Promise((resolve, reject) => {
        const eth = new Eth(new Eth.HttpProvider(node));
        const contract = eth.contract(dogContract.abi).at(contractAddress);

        resolve(contract.totalSupply());
    });
}

app.get('/count', async (req, res) => {
    const _count = await count();
    res.send(_count);
});

app.get('/key', (req, res) => {
    res.send('0x00');
});

app.listen(3000);