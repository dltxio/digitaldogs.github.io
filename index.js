const settings = require('./settings.json');
const express = require('express');
const hbs = require('hbs');

const dog = require('./build/contracts/DogERC721Metadata.json')

const Eth = require('ethjs');
const Abi = require('ethjs-abi');
const EthereumTx = require('ethereumjs-tx');

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

app.get('/dog', (req, res) => {
    const eth = new Eth(new Eth.HttpProvider('http://192.168.1.130:8545')); //https://rinkeby.infura.io
    const contract = eth.contract(dog.abi).at('0x3cfa8ea36fc9bef5c666af8a5fa2d27960cd030c');

    contract.pack(req.query.id).then((data) => {
        res.send(data);
    });
});

app.post('/dog', (req, res) => {
    const eth = new Eth(new Eth.HttpProvider('http://192.168.1.130:8545')); //https://rinkeby.infura.io
    const contract = eth.contract(dog.abi).at('0x3cfa8ea36fc9bef5c666af8a5fa2d27960cd030c');

    eth.getTransactionCount('0xbd9f7daee6d5fc5595567aed84f0f52d694f056c').then((nonce) => {
        console.log(Number(nonce));
    
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

        const name = 'pup';
        const dob = 2000;
        const microchip = '';
        const dam = 0;
        const sire = 0; 
        const sex = 0;
        const owner = '0x9e1525DA6AB3498dda99B97dc13E79f4c44b79d8';
        const privateKey = Buffer.from('cfdaa0e2b600272e752bd30d1bcbaf67bc1361942eb6f0236840a8903a65cd00', 'hex');
        const addPuppy = Abi.encodeMethod(add_abi, [name, dob, microchip, dam, sire, sex, owner]);

        const txParams = {
            nonce: nonce,
            gasPrice: 21000, 
            gasLimit:  4000000,
            to: '0x3cfa8ea36fc9bef5c666af8a5fa2d27960cd030c', 
            value: '0x00', 
            data: addPuppy,
            chainId: 4
        }
        
        const tx = new EthereumTx(txParams);
        tx.sign(privateKey);
        const serializedTx = tx.serialize();

        // // const tx = new EthereumTx(txParams);
        // // tx.sign(privateKey);

        // // const serializedTx = tx.serialize();
        // // console.log(serializedTx.toString('hex'));

        eth.sendRawTransaction(serializedTx.toString('hex')).then((txHash) => {
            //alert('Transaction ' + txHash);
            res.send(txHash);
        });

        //res.send({signedData: serializedTx.toString('hex')});
    });
});

app.get('/dogs', (req, res) => {
    //const eth = new Eth(new Eth.HttpProvider('https://rinkeby.infura.io')); //192.168.1.130
    const eth = new Eth(new Eth.HttpProvider('http://192.168.1.130:8545'));

    //new Eth(new Eth.p)
    //res.send([{name: 'puppy'}]);
    // eth.getBlockByNumber(45300, true, (err, block) => {
    //     res.send(block);
    // });

    console.log(dog.contractName);

    const contract = eth.contract(dog.abi).at('0x3cfa8ea36fc9bef5c666af8a5fa2d27960cd030c');

    contract.name().then((data) => {
        res.send(data);
    });
});


// app.post('/ethstore', (req, res) => {    
//     const eth = new Eth(new Eth.HttpProvider(settings.Ethereum.Node));
//     eth.getTransactionCount(req.body.who).then((nonce) => {
//         console.log(Number(nonce));
    
//         const privateKey = Buffer.from(req.body.privateKey, 'hex');
//         const addDataFunction = Abi.encodeMethod(repository.abi[0], [req.body.data]);

//         const txParams = {
//             nonce: nonce,
//             gasPrice: settings.Ethereum.GasPrice, 
//             gasLimit: settings.Ethereum.GasLimit,
//             to: req.body.contract, 
//             value: '0x00', 
//             data: addDataFunction,
//             chainId: settings.Ethereum.ChainId
//         }
        
//         const tx = new EthereumTx(txParams);
//         tx.sign(privateKey);

//         const serializedTx = tx.serialize();
//         console.log(serializedTx.toString('hex'));

//         res.send({signedData: serializedTx.toString('hex')});
//     });
// });


app.listen(3000);