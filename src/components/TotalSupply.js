import React, { useState } from "react";

import Web3 from "web3";
import dogsERC721 from "../build/contracts/DogERC721.json";
import setting from "../setting.json";

const TotalSupply = async () => {
  const [supply, setSupply] = useState();

  //https://rinkby.infura.io/v3/64710bd1f20c42519965cd9c1dab700b
  //const web3 = new Web3(new Web3.providers.WebsocketProvider(setting.Ethereum.Node));
  const web3 = new Web3(new Web3.providers.WebsocketProvider("https://rinkby.infura.io/v3/64710bd1f20c42519965cd9c1dab700b"));

  // const contract = new web3.eth.Contract(
  //   dogsERC721.abi,
  //   setting.Ethereum.ContractAddress
  // );

  // const result = await contract.methods.name();
  // console.log(result);
  // setSupply(result);
  
  return (
    <h2>Total Supply</h2>
  );
};

export default TotalSupply;
