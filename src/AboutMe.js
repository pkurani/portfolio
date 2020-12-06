import React, {Component} from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import 'bootstrap/dist/css/bootstrap.min.css';
import './body.css';

class AboutMe extends Component {
  render() {
    return(
      <div className="text-white rounded" id="AboutMe">
        <Row>
        <Col xs={12}>
          <h1>about me</h1>
        </Col>
        <hr/>
        <Col xs={12}>
          <p> i'm an aspiring software engineer/ux desginer passionate about creating intuitive, accessible user experiences
          through a minimalist framework. feel free to browse through my work, check out my GitHub, or message me about any questions you may have!</p>
        </Col>
        </Row>
      </div>
    )
  };

}

export default AboutMe
