import React from "react";
import Dog from "./components/Dog";
import Nav from "./components/Nav";
import Register from "./components/Register";
import TotalSupply from "./components/TotalSupply";

import "./css/stylish-portfolio.min.css";
import "./vendor/fontawesome-free/css/all.min.css";
import "./vendor/simple-line-icons/css/simple-line-icons.css";
// import "https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700,300italic,400italic,700italic";

const App = () => {
  return (
    <div className="App" id="page-top">
      <a className="menu-toggle rounded" href="#">
        <i className="fas fa-bars"></i>
      </a>

      <Nav />

      <header className="masthead d-flex">
        <div className="container text-center my-auto">
          <h1 className="mb-1">Digital Dogs</h1>
          <h3 className="mb-5">
            <em>
              Provable lineage on the ethereum blockchain
              <i class="fab fa-ethereum"></i>
            </em>
          </h3>

          <p>

          </p>
          <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">
            Coming soon!
          </a>
        </div>
        <div className="overlay"></div>
      </header>

      <section className="content-section bg-light" id="about">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <h2>What we do <i className="fa fa-paw"></i></h2>
              <p className="lead mb-5">Here at Digital Dogs, we provide a harmonised digital registry of pedigree dogs to breeders, dog associations, microchip registries and government bodies.
                Blockchains are an emergent technology that has broad applications.  Digital Dogs harness that technology to make dog registrations more secure, transparent and affordable!</p>

              <p className="lead mb-5" id="totalSupply"></p>

              <a className="btn btn-dark btn-xl js-scroll-trigger" href="#services">Demo</a>
            </div>
          </div>
        </div>
      </section>

      <Register />
      <Dog />

      <section className="content-section bg-primary text-white">
        <div className="container text-center">
          <h2 className="mb-4">Get in touch</h2>
          <p>We understand this technology is new and confusing.  Please email woof @ digitaldogs.io to have a chat.</p>
        </div>
      </section>

    </div>
  );
};

export default App;
