const DogERC721 = artifacts.require("DogERC721");
const fs = require("fs");
const neatCsv = require("neat-csv");

module.exports = async (deployer, network, accounts) => {

  const contract = await DogERC721.deployed();
  const filePath = "./data/beagles.csv";

  fs.readFile(filePath, async (error, data) => {
    if (error) {
      return console.log("error reading file");
    }

    const parsedData = await neatCsv(data);

    parsedData.forEach(async (dog) => {
      console.log(dog);

      //const dob = new Date(dog.DOB).valueOf()
      //console.log(dob);

      //string calldata name, uint256 dob, bytes32 microchip, Sex sex, uint256 dam, uint256 sire, address owner
      await contract.addPuppy(dog.Name.toUpperCase(), dob, dog.Microchip, dog.Sex, dog.Dam, dog.Sire, dog.Owner);
    });
  });
};
