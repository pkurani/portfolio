import React, {Component} from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import AboutMe from "./AboutMe.js"
import Projects from "./Projects.js"
import Contact from "./Contact.js"

import 'bootstrap/dist/css/bootstrap.min.css';
import './body.css';

class MainPage extends Component {

  render() {
        return (
          <div>
            <TopHeaderBar  />
            <div id="bodyPadding">
              <br />
              <Home  />
              <br />
              <AboutMe  />
              <br />
              <Projects  />
                <br />
              <Contact />
            </div>
            <br />
            <br />
          </div>
        )
  }
}

class TopHeaderBar extends Component {
  render() {
    return(
      <Navbar collapseOnSelect expand="md" variant="dark" sticky="top" id="TopHeaderBar">
          <Navbar.Brand href="#home">parth kurani</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link className="headerLinks" id="link1"> home </Nav.Link>
                <Nav.Link className="headerLinks" id="link2"> about </Nav.Link>
                <Nav.Link className="headerLinks" id="link3"> projects </Nav.Link>
                <Nav.Link className="headerLinks" id="link4"> contact </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    )
  };
}

class Home extends Component {
  render() {
    return(
      <div className="rounded" id="home">
        <p>hi, i'm parth</p>
      </div>
    )
  };

}


export default MainPage
