import React, {Component} from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'


import 'bootstrap/dist/css/bootstrap.min.css';
import './body.css';

class Projects extends Component {
  render() {
    return(
      <div className="rounded" id="projects">
      <h1 id="projectHeader"> projects </h1>
        <Row className="flex-row-reverse">
          <Col xs={12} lg={5}>
            <div className="left">
              <div className="productCardRight">
              <Card id="firstCard">
                <Card.Body>
                  <Card.Title as="h3">cool cars</Card.Title>
                  <Card.Text>
                    a react-based, minimalist website that allows users to purchase cars of their choice. options range from Hondas to Toyotas to even Lamborghinis.
                  </Card.Text>
                  <Button variant="primary" href="https://protected-forest-85131.herokuapp.com/">learn more</Button>
                </Card.Body>
              </Card>
              </div>
            </div>
          </Col>
          <Col xs={12} lg={7}>
          <a href="https://lit-meadow-88957.herokuapp.com/#home">
            <img className="right projectImg" src="/images/website1.png" />
          </a>
          </Col>
        </Row>

        <Row>
          <Col xs={12} lg={5}>
          <div className="right">
            <div className="productCardLeft">
            <Card id="secondCard">
              <Card.Body>
                <Card.Title as="h3">auto shop webpage redesign</Card.Title>
                <Card.Text>
                  a redesign of EcQuality Auto Shop's services page that allows users to more easily parse and consume the services it offers.
                </Card.Text>
                <Button variant="primary" href="https://boiling-garden-29329.herokuapp.com/">learn more</Button>
              </Card.Body>
            </Card>
            </div>
          </div>
          </Col>
          <Col xs={12} lg={7}>
          <a href="https://rocky-woodland-30105.herokuapp.com/">
            <img className="left projectImg" src="/images/redesign.png" />
          </a>
          </Col>
        </Row>

          <Row className="flex-row-reverse">
            <Col xs={12} lg={5}>
              <div className="left">
              <div className="productCardRight">
              <Card id="thirdCard">
                <Card.Body>
                  <Card.Title as="h3">SockSoho</Card.Title>
                  <Card.Text>
                    a high-fidelity mockup of Y-Combinator's SockSoho -- a buisness that makes cool socks accessible to men in India. mockup was iteratively designed
                    to create a user experience that emphasizes accessability, usablity, and simplicity.
                  </Card.Text>
                  <Button variant="primary" href="https://fast-stream-89261.herokuapp.com/">learn more</Button>
                </Card.Body>
              </Card>
              </div>
              </div>
            </Col>
            <Col xs={12} lg={7}>
            <a href="https://www.figma.com/proto/zSBO7EcNSd0dyTKMnAfcvK/High-fi-SockSoho?node-id=3%3A3&scaling=min-zoom">
              <img className="right projectImg" src="/images/iterative.png" />
            </a>
            </Col>
          </Row>

          <Row>
            <Col xs={12} lg={5}>
              <div className="right">
              <div className="productCardLeft">
              <Card id="fourthCard">
                <Card.Body>
                  <Card.Title as="h3">cact-I + cact-you = cact-us</Card.Title>
                  <Card.Text>
                    an analysis of ab testing two versions of a cactus website to determine if an emphasis on simplicity and usability affects user-interaction.
                  </Card.Text>
                  <Button variant="primary" href="https://salty-ocean-39686.herokuapp.com/">learn more</Button>
                </Card.Body>
              </Card>
              </div>
              </div>
            </Col>
            <Col xs={12} lg={7}>
            <a href="https://ancient-cove-94132.herokuapp.com/">
              <img className="left projectImg" src="/images/infographic.png" />
            </a>
            </Col>
          </Row>
          <br />


      </div>
    )
  };

}

export default Projects
