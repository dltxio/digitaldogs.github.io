import React, { useState } from "react";

import Web3 from "web3";
import dogsERC721 from "../build/contracts/DogERC721.json";
// import setting from "../setting.json";

const TotalSupply = () => {
  const [supply, setSupply] = useState(0);
  const [breed, setBreed] = useState("");

  console.log(process.env.REACT_APP_CONTRACT_ADDRESS);

  const web3 = new Web3(new Web3.providers.WebsocketProvider(process.env.REACT_APP_NODE));

  const contract = new web3.eth.Contract(
    dogsERC721.abi,
    process.env.REACT_APP_CONTRACT_ADDRESS
  );

  const loadBreed = async () => {
    const result = await contract.methods.name().call();
    console.log(result);
    setBreed(result);
  }

  const loadSupply = async () => {
    const result = await contract.methods.count().call();
    console.log(result);
    setSupply(result);
  }

  loadSupply();
  loadBreed();

  return (
    <h2>{supply} {breed}</h2>
  );
};

export default TotalSupply;
