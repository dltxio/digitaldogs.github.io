const DogERC721 = artifacts.require("DogERC721");
const fs = require("fs");
const neatCsv = require("neat-csv");

const filePath = "./data/beagles.csv";
let dogs = [];

fs.readFile(filePath, async (error, data) => {
  if (error) {
    return console.log("error reading file");
  }

  const parsedData = await neatCsv(data);

  parsedData.forEach(async (dog) => {
    dogs.push(dog);
  });
});

module.exports = async (deployer, network, accounts) => {
  const contract = await DogERC721.deployed();

  dogs.forEach(async dog => { 
    console.log(dog)
    //await contract.addPuppy("TEST", 0, "0x00", 0, 0, 0, accounts[0]);
    await contract.addPuppy(dog.Name.toUpperCase(), dob, dog.Microchip, dog.Sex, dog.Dam, dog.Sire, dog.Owner);
  });
};
