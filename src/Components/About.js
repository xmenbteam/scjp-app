import React from "react";
import Image from "react-bootstrap/Image";
import thunderbird from "../Assets/thunderbirds.jpeg";
import guitar from "../Assets/Sammusicpic.jpg";

const About = () => {
  return (
    <div class="About" id="about">
      <h1 class="title about-me-title text-center">about me</h1>
      <div class="container text-left">
        <div class="about-me-text flex-row-reverse">
          <div class="row dev">
            <div class="col-md-4">
              <Image
                className="pic thunderbirds "
                src={thunderbird}
                alt="thunderbird sam"
                fluid
              />
            </div>
            <div class="col-md-8">
              <div class="about-me panel-paragraph text-left">
                <h1 class="hello-world">Hello, World!</h1>
                <p class="about-me">
                  See that absolute legend there? That's me. As you can see,
                  I've always had good taste in popular culture. I was born and
                  raised a nerd - Thunderbirds, Power Rangers, and Spider-Man
                  cartoons. I made my first website when I was in year 6, and I
                  got 100% in my year 7 IT exam. Most of my year did too but
                  we're talking about me, not them.
                  <br /> <br />
                  My head was turned by the draw of the stage, and I played in
                  bands and orchestras, trod the boards, and sang in choirs. I
                  always kept my nerdy hand in, regularly finding time to break
                  my dad's computer trying to make cool things happen (Limewire
                  crack of Windows XP anyone?), and playing computer games.
                  Because they count.
                </p>
              </div>
            </div>
          </div>
          <div class="row dev d-flex">
            {/* SMALL SCREEN PIC GUY */}
            <div class="col-8 d-block d-md-none mx-auto">
              <Image
                className="pic guitar smallGuitar"
                src={guitar}
                alt="trying my best"
              />
            </div>
            <div class="col-md-8">
              <div class="about-me panel-paragraph">
                <p class="about-me">
                  As I grew older, I was always torn between science and music,
                  and for about 15 years, music won. I spent my early 20s
                  working in bars and doing gigs. The barwork was supplanted by
                  teaching, and I did a PGCE in secondary music in 2012. I have
                  always been passionate about learning, and this quite easily
                  transferred to a love of teaching.
                  <br />
                  <br />
                  When the pandemic hit, I took this as a sign to change up and
                  do something different with my life. I will always love the
                  arts more than anything in the world, and freedom of
                  expression is the most beautiful trait we share, but I'm also
                  a massive nerd.
                  <br />
                  <br />
                  Northcoders was the avenue I chose, and their Bootcamp has
                  given me but a taste of a world I'm very excited to get stuck
                  in to.
                  <br />
                  <br />
                  Nice one that mate.
                </p>
              </div>
            </div>
            {/* BIG SCREEN PIC GUY */}
            <div class="col-md-4 d-none d-md-block">
              <img class="pic guitar" src={guitar} alt="trying my best" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
