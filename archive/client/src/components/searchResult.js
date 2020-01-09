import React from "react";
import { Link } from "react-router-dom";

export default function ResultItem({
  name,
  sex,
  dob,
  microchip,
  dam,
  sire,
  owner
}) {
  return (
    <li className="list-group-item">
      <Link
        to={{
          pathname: "/record",
          state: { name, sex, dob, microchip, dam, sire, owner }
        }}
      >
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
      </Link>
    </li>
  );
}
