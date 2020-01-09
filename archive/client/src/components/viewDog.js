import React from "react";
export default function ViewDog({ location }) {
  const { name, dob, sex, owner, sire, dam, microchip } = location.state;
  return (
    <div className="container">
      <div className="container-fluid">
        <h2>Dog View</h2>
        <div className="d-flex justify-content-between p-2">
          <span className="d-inline-flex">
            <h5 className="mr-3">Name: </h5>
            {name}
          </span>
          <span className="d-inline-flex">
            <h5 className="mr-3">DOB: </h5>
            {dob}
          </span>
          <span className="d-inline-flex">
            <h5 className="mr-3">Sex: </h5>
            {sex}
          </span>
        </div>
        <div className="d-flex justify-content-between p-2">
          <span className="d-inline-flex">
            <h5 className="mr-3">Owner: </h5>
            {owner}
          </span>
          <span className="d-inline-flex">
            <h5 className="mr-3">Sire: </h5>
            {sire}
          </span>
          <span className="d-inline-flex">
            <h5 className="mr-3">Dam: </h5>
            {dam}
          </span>
        </div>
        <span className="d-inline-flex align-items-baseline">
          <h5 className="p-2">Microchip: </h5>
          {microchip}
        </span>
      </div>
    </div>
  );
}
