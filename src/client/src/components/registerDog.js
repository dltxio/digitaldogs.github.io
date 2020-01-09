import React from "react";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import { useFormik } from "formik";

export default function RegisterDog() {
  const formik = useFormik({
    initialValues: {
      privateKey: "",
      name: "",
      dob: "",
      sex: "",
      microchip: "",
      dam: "",
      sire: "",
      owner: "0xD009F888F95EFDe95199BaD766EFab74015b9239"
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  return (
    <div className="container text-center">
      <h2 className="mx-auto mb-5">
        Register <em>your</em> dog on the blockchain!
      </h2>
      <div className="container-fluid">
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Private Key</label>
            <input
              type="text"
              className="form-control"
              id="privateKey"
              onChange={formik.handleChange}
              value={formik.values.privateKey}
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">Dob</label>
            <input
              type="date"
              className="form-control"
              id="dob"
              placeholder="yyyyMMdd"
              onChange={formik.handleChange}
              value={formik.values.dob}
            />
          </div>

          <div className="btn-group btn-group-toggle">
            <ToggleButtonGroup type="radio" name="sex">
              <ToggleButton value={0} name="sex" onChange={formik.handleChange}>
                Male
              </ToggleButton>
              <ToggleButton value={1} name="sex" onChange={formik.handleChange}>
                Female
              </ToggleButton>
            </ToggleButtonGroup>
          </div>

          <div className="form-group">
            <label htmlFor="name">Microchip</label>
            <input
              type="text"
              className="form-control"
              id="microchip"
              onChange={formik.handleChange}
              value={formik.values.microchip}
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">Dam ID</label>
            <input
              type="number"
              className="form-control"
              id="dam"
              placeholder="0"
              onChange={formik.handleChange}
              value={formik.values.dam}
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">Sire ID</label>
            <input
              type="number"
              className="form-control"
              id="sire"
              placeholder="0"
              onChange={formik.handleChange}
              value={formik.values.sire}
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">Owner Public Key</label>
            <input
              type="text"
              className="form-control"
              id="owner"
              onChange={formik.handleChange}
              value={formik.values.owner}
            />
          </div>
          <input
            type="submit"
            className="btn btn-primary btn-xl"
            value="Register"
          />
        </form>
      </div>
    </div>
  );
}
