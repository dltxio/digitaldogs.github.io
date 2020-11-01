import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import { Form as BForm, Button } from "react-bootstrap";
import Web3 from "web3";
import dogsERC721 from "../build/contracts/DogERC721.json";
import setting from "../setting.json";

const TotalSupply = () => {
  const [dog, setDog] = useState();

    const web3 = new Web3(
    new Web3.providers.WebsocketProvider(setting.Ethereum.Node)
    );

      const contract = new web3.eth.Contract(
        dogsERC721.abi,
        setting.Ethereum.ContractAddress
      );

      const puppy = await contract.methods.totalSupply();
      //console.log(puppy);


      console.log(dog);
      setDog(dog);


    //const getDog = contract.methods.getPuppy(value.index).encodeABI();
    //setDog(getDog);
  };
  
  return (
    <>
      <div className="dog">
        <h2>Search for a dog</h2>
        <Formik
          initialValues={{
            index: "",
          }}
          onSubmit={onSubmit}
        >
          <Form className="mt-5">
            <BForm.Group>
              <BForm.Label className="d-block my-3">Index</BForm.Label>
              <Field
                id="index"
                name="index"
                placeholder=""
                className="d-block my-3 w-100"
              />
            </BForm.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Formik>
        <p></p>
        {dog ? (
          <div>
            <label>Name: {dog.Name}</label>
            <p></p>
            <label>DOB: {dog.DOB}</label>
            <p></p>
            <label>Sex: {dog.Sex}</label>
            <p></p>
            <label>Dam ID: {dog.Dam}</label>
            <p></p>
            <label>Sire ID: {dog.Sire}</label>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};

export default Dog;
