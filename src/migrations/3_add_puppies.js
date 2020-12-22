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

    parsedData.forEach(element => {
      console.log(element);
      const dob = new Date(element.DOB).valueOf()
      console.log(dob);
      await dogs.addPuppy(datum[0], datum[1], datum[2], datum[3], datum[4], datum[5], datum[6]);
    });
  });
};
