import React from "react";
import samparrymusic from "../Assets/samparrymusic.png";
import xmenbteam from "../Assets/xmbt-star.png";
import thecgband from "../Assets/thecgband.png";

const Music = () => {
  return (
    <div>
      <section id="music" class="music container-fluid">
        <h1 class="title music-title text-center">sam the musician</h1>
        <div class="cover">
          <div class="content text-center">
            <div class="websites row flex-wrap">
              <div class="col-md-4 col-12">
                <a href="http://www.samparrymusic.com" target="blank">
                  <div class="music-card mr-2 d-inline-block shadow-lg">
                    <div class="card-img-top">
                      <img
                        src={samparrymusic}
                        alt="Sam Parry Music website"
                        class="music-website-image img-fluid border-radius p-4"
                      />
                    </div>
                    <div class="card-body">
                      <h3 class="card-title">Sam Parry Music</h3>
                      <p class="card-text">
                        My own personal musician website. <br /> Includes links
                        to my voice over work as well.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-md-4 col-12">
                <a href="http://www.xmenbteam.com" target="blank">
                  <div class="music-card mr-2 d-inline-block shadow-lg">
                    <div class="card-img-top">
                      <img
                        src={xmenbteam}
                        alt="xmenbteam website"
                        class="music-website-image img-fluid border-radius p-4"
                      />
                    </div>
                    <div class="card-body">
                      <h3 class="card-title">XMenBTeam</h3>
                      <p class="card-text">
                        My band. A little bit punk rock, a little bit D n' B...
                        <br />
                        We're sick.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-md-4 col-12">
                <a href="http://www.thecgband.co.uk" target="blank">
                  <div class="music-card art-card mr-2 d-inline-block shadow-lg">
                    <div class="card-img-top">
                      <img
                        src={thecgband}
                        alt="The CG Band website"
                        class="music-website-image img-fluid border-radius p-4"
                      />
                    </div>
                    <div class="card-body">
                      <h3 class="card-title">The CG Band</h3>
                      <p class="card-text">
                        Need a party? <br />
                        Alpine party band for your pleasure. Performed from Nice
                        to North Manchester and everywhere in between.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Music;
