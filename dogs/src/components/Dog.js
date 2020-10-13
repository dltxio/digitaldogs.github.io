import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import { Form as BForm, Button, Card } from "react-bootstrap";
import Web3 from "web3";
import dogContract from "../build/contracts/DogERC721Metadata.json";
import setting from "../setting.json";

export default function Dog() {
  const [dog, setDog] = useState([]);
  const node = setting.Ethereum.Node;
  const onSubmit = async (value) => {
    const web3 = new Web3(new Web3.providers.WebsocketProvider(node));
    const contract = new web3.eth.Contract(
      dogContract.abi,
      setting.Ethereum.ContractAddress
    );
    contract.methods
      .totalSupply()
      .call({ from: setting.Ethereum.ContractAddress }, function (
        error,
        result
      ) {
        //console.log(result);
      });

    contract.methods
      .pack(value.index)
      .call({ from: setting.Ethereum.ContractAddress }, function (
        error,
        result
      ) {
        console.log(result);
        setDog(JSON.stringify(result));
      });
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
      {dog ? <div>{dog}</div> : <div>not found</div>}
    </div>
  );
}
