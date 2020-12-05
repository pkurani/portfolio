import React, {Component} from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'


import 'bootstrap/dist/css/bootstrap.min.css';
import './body.css';

class Projects extends Component {
  render() {
    return(
      <div id="projects">
        <Row className="flex-row-reverse">
          <Col xs={12} md={5}>
            <div className="left">
              <div className="productCardRight">
                <Card>
                  <Card.Body>
                    <div className="card-title h2">Development</div>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </Col>
          <Col xs={12} md={7}>
            <img className="rounded mb-0 imageContent right" src="/images/website1.png" />
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={5}>
          <div className="right">
            <div className="productCardLeft">
              <Card>
                <Card.Body>
                  <div className="card-title h2">Development</div>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
          </Col>
          <Col xs={12} md={7}>
            <img className="rounded mb-0 imageContent left" src="/images/website1.png" />
          </Col>
        </Row>

          <Row className="flex-row-reverse">
            <Col xs={12} md={5}>
              <div className="left">
              <div className="productCardRight">
                <Card>
                  <Card.Body>
                    <div className="card-title h2">Development</div>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              </div>
            </Col>
            <Col xs={12} md={7}>
              <img className="rounded mb-0 imageContent right" src="/images/website1.png" />
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={5}>
              <div className="right">
              <div className="productCardLeft">
                <Card>
                  <Card.Body>
                    <div className="card-title h2">Development</div>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              </div>
            </Col>
            <Col xs={12} md={7}>
              <img className="rounded mb-0 left" src="/images/website1.png" />
            </Col>
          </Row>


      </div>
    )
  };

}

export default Projects
