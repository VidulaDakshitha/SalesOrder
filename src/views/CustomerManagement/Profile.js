import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, CardImg, Row, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import axios from "axios";
import alertify from "alertifyjs/build/alertify";
import "alertifyjs/build/css/alertify.min.css";
import "alertifyjs/build/css/alertify.css";
import "alertifyjs/build/css/themes/default.min.css";



class Supplier extends Component {
  constructor(props){
    super(props);
    this.state={
    }
    
  }
  

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <CardGroup>
                <Card className="p-4">
                <CardTitle className="text-primary text-center"><h1>PROFILE</h1></CardTitle>
                  <CardBody>
                    <Card>
                        <CardImg top width="100%" src="/assets/img/avatar.jpg" alt="Card image cap" />
                            <CardBody className="text-center">
                                <CardTitle><h3>John Smith</h3></CardTitle>
                                    <CardSubtitle className="text-muted"><h4>WS Holdings</h4></CardSubtitle>
                                    <CardText> </CardText>
                                        <CardText><h5>Username: </h5></CardText>
                                        <CardText><h5>Gender: </h5></CardText>
                                        <CardText><h5>DOB: </h5></CardText>
                                        <CardText><h5>Email: </h5></CardText>
                                        <CardText><h5>ContactNo: </h5></CardText>
                                        <CardText><h5>Profession: </h5></CardText>
                                        <CardText><h5>Address: </h5></CardText>
                                        
                            </CardBody>
                    </Card>
                  </CardBody>
                </Card>
                
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Supplier;
