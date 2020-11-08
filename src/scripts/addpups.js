require("dotenv").config();

const abi = require("./build/DogERC721.json");
const Web3 = require("web3");
const web3 = new Web3(process.env.RINKEBY_URL);
const tokenContract = new web3.eth.Contract(abi);
const BigNumber = require("bignumber.js");


abi.abi