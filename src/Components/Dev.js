import React from "react";
import Image from "react-bootstrap/Image";

const Dev = () => {
  return (
    <div class="dev container-fluid" id="dev">
      <h1 class="title dev-title text-center">sam the dev</h1>
      <div class="row dev d-flex">
        <div class="col-md-4 col-sm-6 col-12 mb-1 mx-auto">
          <Image
            class="pic devpic"
            src="../assets/samdevpic.jpeg"
            alt="me and my computer"
            fluid
          />
        </div>

        <div class="col-md-8 col-12">
          <div class="panel-paragraph text-left">
            <div>
              I'm doing my absolute best to figure out how to do this, and I
              think I'm bloody well winning! I'm just about to finish the
              Northcoders bootcamp, where I've been drilled in good Git
              techniques and Test Driven Development. The course has also given
              me an insight into the collaborative nature of programming,
              spending much of the time not in lectures pair programming with a
              randomly assigned partner to fulfil challenges. This in itself
              was... Challenging sometimes, but I have definitely learned my
              most profound lesson - just having someone there with you is
              sometimes all the help you need. Rubber ducking is key.
              <br />
              <br />
              You can view my Github
              <a href="https://github.com/xmenbteam"> here</a>.<br />
              <br />
              Here are some of the languages I've studied on my course:
              <div class="logo-container d-flex flex-md-row flex-wrap justify-content-center">
                <div class="square">
                  <img
                    class="logo"
                    src="../assets//logos/html.png"
                    alt="html"
                  />
                  <h6>HTML 5</h6>
                </div>
                <div class="square">
                  <img class="logo" src="../assets/logos/css.png" alt="CSS" />
                  <h6>CSS</h6>
                </div>
                <div class="square">
                  <img
                    class="logo"
                    src="../assets/logos/javascript.png"
                    alt="javascript"
                  />
                  <h6>JavaScript</h6>
                </div>
                <div class="square">
                  <img
                    class="logo"
                    src="../assets/logos/nodejs.png"
                    alt="node js"
                  />
                  <h6>Node JS</h6>
                </div>

                <div class="square">
                  <img
                    class="logo"
                    src="../assets/logos/postgres.png"
                    alt="postgres"
                  />
                  <h6>PostgreSQL</h6>
                </div>
                <div class="square">
                  <img
                    class="logo"
                    src="../assets/logos/react.png"
                    alt="React"
                  />
                  <h6>React</h6>
                </div>
                <div class="square">
                  <img
                    class="logo"
                    src="../assets/logos/firebase.png"
                    alt="Firebase"
                  />
                  <h6>Firebase</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="project-cards text-center">
        <h3 class="projects-title title">some recent projects...</h3>
        <div class="projects row flex-md-wrap">
          <div class="col-md-4 col-12 ">
            <div class="dev-card d-inline-block shadow-lg">
              <div class="card-img-top">
                <img
                  src="../assets/Pokemon Battler Cover Photo.png"
                  alt="pokemon battler"
                  class="project-image img-fluid border-radius p-4"
                />
              </div>
              <div class="card-body">
                <h5 class="card-title">Pokemon Battler</h5>
                <p class="card-text">
                  We made a pokemon battler using JavaScript. It was great.
                </p>
                <h6 class="card-text">
                  <a
                    href="https://github.com/xmenbteam/fun-pokemon-battler"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View the code here!
                  </a>
                </h6>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-12">
            <div class="dev-card d-inline-block shadow-lg">
              <div class="card-img-top">
                <img
                  src="../assets/NC News.png"
                  alt="NC News"
                  class="project-image img-fluid border-radius p-4"
                />
              </div>
              <div class="card-body">
                <h5 class="card-title">NC News</h5>
                <p class="card-text">
                  A news app. Back-end and front-end created by yours truly.
                </p>
                <h6 class="card-text">
                  <a
                    href="https://github.com/xmenbteam/be-nc-news-sp"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View the backend code here!
                  </a>
                </h6>
                <h6 class="card-text">
                  <a
                    href="https://github.com/xmenbteam/nc-news-frontend"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View the front end code here!
                  </a>
                </h6>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-12">
            <div class="dev-card d-inline-block shadow-lg">
              <div class="card-img-top">
                <img
                  src="../assets/ArguScreenShot.png"
                  alt="the argulympics"
                  class="project-image img-fluid border-radius p-4"
                />
              </div>
              <div class="card-body">
                <h5 class="card-title">The Argulympics</h5>
                <p class="card-text">
                  Our final project at the Northcoders Bootcamp. Created using
                  React Native and Google Firebase. I was mostly in charge of
                  the game logic and styling.
                </p>
                <h6 class="card-text">
                  <a
                    href="https://github.com/xmenbteam/react-native-simon"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View the code here!
                  </a>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dev;
