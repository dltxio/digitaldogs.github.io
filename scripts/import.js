const parse = require("csv-parse");
const Web3 = require("web3");

const fs = require("fs");
const neatCsv = require("neat-csv");

const filePath = "../data/beagles.csv";
fs.readFile(filePath, async (error, data) => {
  
  if (error) {
      return console.log("error reading file");
  }
  
  const parsedData = await neatCsv(data);

  parsedData.forEach(element => {
    console.log(element);
    //await dogs.addPuppy(datum[0], datum[1], datum[2], datum[3], datum[4], datum[5], datum[6]);
  });
});

const web3 = new Web3(
  new Web3.providers.WebsocketProvider(
    "wss://rinkeby.infura.io/ws/v3/f22ec9acdf944e1eb2dc04ed2bea08e5"
  )
);

// const contract = new web3.eth.Contract(
//   abi,
//   "0x4b68878E484120fDdE766E1423aFD8d7eA3e2e35"
// );

// data.forEach(datum => {
//   //tring calldata name, uint256 dob, bytes32 microchip, Sex sex, uint256 dam, uint256 sire, address owner
//   console.log(datum);
//   contract.methods
//     .add(datum[0], datum[1], datum[2], datum[3], datum[4], datum[5], datum[6])
//     .call() //{from: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe'}
//     .then(function (result) {
//       console.log(result);
//     });
// });
