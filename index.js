const settings = require('./settings.json');
const express = require('express');
const hbs = require('hbs');
const PORT = process.env.PORT || 3000;

const dogContract = require('./build/contracts/DogERC721Metadata.json');

const Eth = require('ethjs');
const Abi = require('ethjs-abi');
const Sign = require('ethjs-signer').sign;
const HdKey = require('ethereumjs-wallet/hdkey');

var app = express();
app.use(express.json());

app.set('view engine', 'hbs');

app.use('/css', express.static(__dirname + '/css'));
app.use('/img',express.static(__dirname + '/img'));
app.use('/js', express.static(__dirname + '/js'));
app.use(express.static(__dirname + '/public'));
app.use('/vendor', express.static(__dirname + '/vendor'));

const node = settings.Ethereum.Node;
const contractAddress = settings.Ethereum.ContractAddress;

const add_abi = {
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

const dog = (id) => {
    return new Promise((resolve, reject) => {
        //https://mainnet.infura.io/v3/eaf5e0b4a01042a48211762c8d4eec44/'
        //const eth = new Eth(new Eth.HttpProvider(node));
        const eth = new Eth(new Eth.HttpProvider('https://mainnet.infura.io/v3/eaf5e0b4a01042a48211762c8d4eec44'));
        const contract = eth.contract(dogContract.abi).at('0x4390282c7d623edee9aacb971303077aba2d5e14');

        resolve(contract.pack(id));
    });
}

const count = () => {
    return new Promise((resolve, reject) => {
        const eth = new Eth(new Eth.HttpProvider(node));
        const contract = eth.contract(dogContract.abi).at(contractAddress);

        resolve(contract.totalSupply());
    });
}

app.get('/home', (req, res) => {
    res.send({
        plaintext: result,
        timestamp: Date.now()
    });
});

app.get('/', (req, res) => {
    res.render('index.hbs', { title: 'Digital Dogs '} );
});

app.get('/dog', async (req, res) => {
    const data = await dog(req.query.id);
    res.send(data);
});

app.post('/dog', (req, res) => {
    const eth = new Eth(new Eth.HttpProvider(node));

    eth.getTransactionCount('0xbd9f7daee6d5fc5595567aed84f0f52d694f056c').then((nonce) => {
        console.log(Number(nonce));
        console.log(req.body);

        const name = req.body.name;
        const dob = req.baseUrl.dob;
        const microchip = req.body.microchip;
        const dam = req.body.dam;
        const sire = req.body.sire;
        const sex = req.body.sex;
        const owner = req.body.owner;
        const addPuppy = Abi.encodeMethod(add_abi, [name, dob, microchip, dam, sire, sex, owner]);

        const txParams = {
            nonce: nonce,
            gasPrice: '4000000000',
            gasLimit: '200000',
            to: settings.Ethereum.ContractAddress,
            value: '0x00',
            data: addPuppy,
            chainId: 4
        }

        var tx = Sign(txParams, settings.Ethereum.PrivateKey);
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

//For opensea ERC721
app.get('/dogmeta', async (req, res) => {

    const _dog = await dog(req.query.id);

    const meta = {
        token_id: req.query.id,
        image_url: "http://digitaldogs.io/img/",
        image_preview_url: "http://digitaldogs.io/img/",
        image_thumbnail_url: "http://digitaldogs.io/img/",
        image_original_url: "http://digitaldogs.io/img/",
        animation_url: "http://digitaldogs.io/img/",
        name: _dog.name,
        description: "A Beagle",
        external_link: "http://digitaldogs.io/"
    };

    res.send(meta);
});

//Get single dog name based on index
app.get('/dogname', async (req, res) => {
    var _pup = await dog(req.query.id);
    res.send({ name: _pup.name });
});

app.get('/dognames', async (req, res) => {
    const _count = await count();
    console.log(Number(_count));

    const dogs = [];
    //var puppies = [];

    for (i = 0; i < 2; i++) {
        var _pup = await dog(i);
        console.log(_pup.name);
        dogs.push(_pup.name);

        //puppies.push(_pup);
    }

    //var result = await Promise.all(puppies);

    res.send(dogs);
});

app.get('/count', async (req, res) => {
    const _count = await count();
    res.send(_count);
});

app.get('/key', (req, res) => {
    const index = req.query.index;

    const walletPub = HdKey.fromExtendedKey(settings.Ethereum.xPubKey);
    const address = walletPub.deriveChild(index).getWallet().getAddressString();
    res.send(address);
});

app.listen(PORT);
