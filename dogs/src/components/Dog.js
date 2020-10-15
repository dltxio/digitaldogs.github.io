import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import { Form as BForm, Button, Card } from "react-bootstrap";
import Web3 from "web3";
import dogsERC721 from "../build/contracts/DogERC721.json";
import setting from "../setting.json";

export default function Dog() {
  const [dog, setDog] = useState([]);
  const [totalSupply, setTotalSupply] = useState([]);
  const onSubmit = async (value) => {
    const web3 = new Web3(
      new Web3.providers.WebsocketProvider(setting.Ethereum.Node)
    );
    const contract = new web3.eth.Contract(
      dogsERC721.abi,
      setting.Ethereum.ContractAddress
    );
    const totalSupply = contract.methods.totalSupply();
    console.log(totalSupply);
  };
  return (
    <div className="mt-5">
      <div>
        <Card
          className="text-center"
          style={{ width: "50rem", margin: "auto", float: "none" }}
        >
          <Card.Body>
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
          </Card.Body>
        </Card>
      </div>
      {totalSupply ? <div>Total supply: {totalSupply}</div> : <div></div>}
      {dog ? <div>Dogs:{dog}</div> : <div>not found</div>}
    </div>
  );
}
