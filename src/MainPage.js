import React, {Component} from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import AboutMe from "./AboutMe.js"
import Projects from "./Projects.js"
import Contact from "./Contact.js"
import AnchorLink from 'react-anchor-link-smooth-scroll'
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
                <AnchorLink className="headerLinks nav-link" href='#home' id="link1">home</AnchorLink>
                <AnchorLink className="headerLinks nav-link" href='#aboutMe' id="link2">about</AnchorLink>
                <AnchorLink className="headerLinks nav-link" href='#projects' id="link3">projects</AnchorLink>
                <AnchorLink className="headerLinks nav-link" href='#contact' id="link4">contact</AnchorLink>
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
