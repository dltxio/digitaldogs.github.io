import React, { useState } from "react";
import ResultItem from "./searchResult";

export default function SearchDogs() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([
    {
      owner: 123,
      name: "fido",
      sex: "male",
      microchip: "abcde123",
      dob: "2018-01-01",
      sire: "557678",
      dam: "45023"
    },
    {
      owner: 456,
      name: "Ralph",
      sex: "female",
      microchip: "asdkjlkln2",
      dob: "2017-01-01",
      sire: "8815465",
      dam: "328668"
    }
  ]);
  const submitSearch = event => {
    alert("You searched for " + search);
    event.preventDefault();
  };
  return (
    <div className="container ">
      <h2 className="mx-auto mb-5">Search for dog registrations</h2>
      <div className="container-fluid text-center">
        <form onSubmit={submitSearch}>
          <div className="form-group">
            <label htmlFor="searchBox">Search</label>
            <input
              className="form-control mb-3"
              type="text"
              placeholder="Search for dogs"
              id="searchBox"
              onChange={event => setSearch(event.target.value)}
            />
            <input
              type="submit"
              className="btn btn-primary btn-xl"
              value="Search"
            />
          </div>
        </form>
      </div>
      {results.length > 0 && <h3 className="mx-auto mb-5">Search Results</h3>}
      <div className="container-fluid">
        <ul className="list-group">
          {results.length > 0 &&
            results.map((value, index) => {
              return (
                <ResultItem
                  key={index}
                  name={value.name}
                  owner={value.owner}
                  sex={value.sex}
                  dob={value.dob}
                  microchip={value.microchip}
                  dam={value.dam}
                  sire={value.sire}
                />
              );
            })}
        </ul>
      </div>
    </div>
  );
}
