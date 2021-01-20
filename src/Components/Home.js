import React from "react";
import "../App.css";
import Image from "react-bootstrap/Image";

const Home = () => {
  return (
    <div id="Home" class="container-fluid text-center mh-100">
      <div class="home-row row">
        <div class="panel col-lg-4 col-md-5 col-sm-7 col-9 mx-auto mx-lg-4 ">
          <h1 class="panel-item">
            sam <span class="cj">cj</span> parry
          </h1>
          <h5 class="panel-item">
            <em>if you know, you know...</em>
          </h5>
          <h2 class="panel-item">
            DEV // <br></br> MUSICIAN // <br></br> VO //
          </h2>
        </div>
        <div class="d-none d-lg-block">
          <Image
            className="bigScreenPic"
            src={require("../Assets/Headshot-top.jpg")}
            alt="Headshot by Charlotte Wellings"
            fluid
          />
        </div>
        <div class="d-block d-lg-none smallScreenPic">
          <Image
            className="smallScreenPic pic"
            src="../assets/Headshot-top.jpg"
            alt="Headshot by Charlotte Wellings"
            fluid
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
