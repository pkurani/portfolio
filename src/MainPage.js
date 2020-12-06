import React, {Component} from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'
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
              <Home  />
              <AboutMe  />
              <Projects  />
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
          <Navbar.Brand href="#home">Parth Kurani</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link className="headerLinks"> Home </Nav.Link>
                <Nav.Link className="headerLinks"> About </Nav.Link>
                <Nav.Link className="headerLinks"> Projects </Nav.Link>
                <Nav.Link className="headerLinks"> Contact </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    )
  };
}

class Home extends Component {
  render() {
    return(
      <Container id="home">
        <p>Hi, I'm Parth</p>
      </Container>
    )
  };

}


export default MainPage
