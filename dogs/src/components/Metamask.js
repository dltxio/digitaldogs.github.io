import React from "react";
import { Formik, Form } from "formik";
import { Button, Card } from "react-bootstrap";
import detectEthereumProvider from "@metamask/detect-provider";

export default function Metamask() {
  const onSubmit = async () => {
    const { ethereum } = window;
    try {
      //Will Start the MetaMask Extension
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      const provider = await detectEthereumProvider();
      console.log(provider);
      console.log(accounts[0]);

      const transactionParameters = {
        nonce: "0x00", // ignored by MetaMask
        gasPrice: "0x09184e72a000", // customizable by user during MetaMask confirmation.
        gas: "0x2710", // customizable by user during MetaMask confirmation.
        to: "0x0000000000000000000000000000000000000000", // Required except during contract publications.
        from: ethereum.selectedAddress, // must match user's active address.
        value: "0x00", // Only required to send ether to the recipient from the initiating external account.
        data:
          "0x7f7465737432000000000000000000000000000000000000000000000000000000600057", // Optional, but used for defining smart contract creation and interaction.
        chainId: 3, // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
      };

      // txHash is a hex string
      // As with any RPC call, it may throw an error
      const txHash = await ethereum.request({
        method: "eth_sendTransaction",
        params: [transactionParameters],
      });
      console.log(txHash);
    } catch (error) {
      console.error(error);
    }
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
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Formik>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
