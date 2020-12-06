import React, {Component} from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

class Contact extends Component {
  render() {
    return(
      <div className="p-3 mb-2 text-white rounded" id="contact">
        <Row>
        <Col xs={12}>
          <p>Contact</p>
        </Col>
        <hr/>
        <Col xs={12}>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, "</p>
        </Col>
        </Row>
      </div>
    )
  };

}

export default Contact
