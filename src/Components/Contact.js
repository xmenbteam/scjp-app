import React from "react";

const Contact = () => {
  return (
    <div>
      <section id="contact">
        <h1 class=" title contact-title text-center">contact</h1>

        <div class="row justify-content-center">
          <h3 class="projects-title title">
            <a href="mailto:samcjparry@gmail.com">email me</a>
          </h3>
        </div>
        <div class="row justify-content-center">
          <br />
          <h3>or use this form...</h3>
        </div>

        <div class="row">
          <div class="col-md-3"></div>
          <form
            class="col-md-6 sm-10 justify-content-center"
            action="contactform.php"
            method="post"
            enctype="text/plain"
          >
            <div class="content">
              <div class="form-group">
                <label for="nameInput">name:</label>
                <input
                  type="text"
                  name="name"
                  class="form-control"
                  id="nameInput"
                  aria-describedby="emailHelp"
                  placeholder="Your name"
                ></input>
              </div>
              <div class="form-group">
                <label for="emailInput">email address:</label>
                <input
                  type="email"
                  name="mail"
                  class="form-control"
                  id="emailInput"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                ></input>
              </div>
            </div>
            <div class="form-group">
              <label for="message">message:</label>
              <textarea
                class="form-control"
                name="message"
                id="message"
                rows="3"
                placeholder="Ask me anything!"
              ></textarea>
            </div>
            <button
              type="submit"
              class="btn btn-primary"
              name="submit"
              value="SEND MESSAGE"
            >
              submit
            </button>
            <div class="col-md-3"></div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
