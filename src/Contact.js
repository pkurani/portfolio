import React, {Component} from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import 'bootstrap/dist/css/bootstrap.min.css';
import './body.css';

class Contact extends Component {
  render() {
    return(
      <div className="text-white rounded" id="contact">
        <div id="contactRow">
            <h1>let's get in touch!</h1>
          </div>
        <Row id="contactRow2">
          <Col xs={3} className="contactCols">
          <a href="mailto:student@brown.edu">
            <img src="/images/mail.png" className="contactPNG"/>
            </a>
          </Col>
          <Col xs={3} className="contactCols">
          <a href="https://linkedin.com">
            <img src="/images/linkedin.png" className="contactPNG"/>
            </a>
          </Col>
          <Col xs={3} className="contactCols">
          <a href="https://twitter.com">
            <img src="/images/twitter.png" className="contactPNG"/>
            </a>
          </Col>
          <Col xs={3} className="contactCols">
          <a href="https://github.com">
            <img src="/images/github.png" className="contactPNG"/>
            </a>
          </Col>
        </Row>
      </div>
    )
  };

}

export default Contact
