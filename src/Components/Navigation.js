import React from "react";
import "../App.css";
import { Navbar, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <div>
      <Navbar sticky="top" className="navBar" expand="md">
        <Navbar.Brand className="navBrand" href="/">
          scjp
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="mr-auto">
            <Nav.Link className="navLink" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="navLink" href="about">
              About
            </Nav.Link>
            <Nav.Link className="navLink" href="dev">
              Dev
            </Nav.Link>
            <Nav.Link className="navLink" href="music">
              Music
            </Nav.Link>
            <Nav.Link className="navLink" href="contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
