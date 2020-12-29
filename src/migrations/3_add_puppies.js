const DogERC721 = artifacts.require("DogERC721");
const fs = require("fs");
const neatCsv = require("neat-csv");
const moment = require("moment");

const filePath =
  "/Users/lucascullen/GitHub/dltxio/digitaldogs.github.io/src/migrations/beagles.csv";
let dogs = [];

fs.readFile(filePath, async (error, data) => {
  if (error) {
    return console.log("error reading file");
  }

  const parsedData = await neatCsv(data);

  parsedData.forEach(async dog => {
    //console.log(dog);
    dogs.push(dog);
  });
});

module.exports = async (deployer, network, accounts) => {
  const contract = await DogERC721.deployed();

  if (dogs.length > 0) {
    dogs.forEach(async dog => {
      //console.log(dog);

      const ts = moment(dog.DOB, "YYYY-MM-DD").unix();
      const dob = moment.unix(ts);
      console.log(dob.valueOf());

      
      //console.log(dob);
      //await contract.addPuppy("TEST", 0, "0x00", 0, 0, 0, accounts[0]);
      await contract.addPuppy(dog.Name.toUpperCase(), dob.valueOf(), dog.Microchip, dog.Sex, dog.Dam, dog.Sire, dog.Owner);
    });
  }
};
