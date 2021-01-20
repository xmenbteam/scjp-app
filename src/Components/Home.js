import React from "react";
import "../App.css";
import Image from "react-bootstrap/Image";

const Home = () => {
  return (
    <div id="Home" class="container-fluid text-center">
      <div class="home-row row">
        <div class="panel">
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

        <Image
          class="welcome"
          src="../assets/Headshot-top.jpg"
          alt="Headshot by Charlotte Wellings"
          fluid
        />
      </div>
    </div>
  );
};

export default Home;
