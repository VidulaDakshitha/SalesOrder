import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, CardTitle, CardText, Table } from 'reactstrap';
import axios from "axios";
import alertify from "alertifyjs/build/alertify";
import "alertifyjs/build/css/alertify.min.css";
import "alertifyjs/build/css/alertify.css";
import "alertifyjs/build/css/themes/default.min.css";



class OrderManagement extends Component {
  constructor(props){
    super(props);
    this.state={
      proName:"",
      proPrice:"",
      proDetails:"",
      pictures: []
    }

    this.onDrop = this.onDrop.bind(this);
    this.handleProName = this.handleProName.bind(this);
    this.handleProPrice = this.handleProPrice.bind(this);
    this.handleProDetails = this.handleProDetails.bind(this);
    
  }
  
  handleProName(event){
    this.setState({proName: event.target.value})
  }
  handleProPrice(event){
    this.setState({proPrice: event.target.value})
  }
  handleProDetails(event){
    this.setState({proDetails: event.target.value})
  }
  onDrop(picture) {
    this.setState({
        pictures: this.state.pictures.concat(picture),
    });
}

  onSubmitHandler=(e)=>{
    e.preventDefault();
    const stockAdd={
        proName: this.state.proName,
        proPrice: this.state.proPrice,
        proDetails: this.state.proDetails,
        picture: this.state.pictures
    }

    console.log(stockAdd);
  }

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
            <Card body outline color="secondary">
                <CardTitle>On going orders</CardTitle>
                <CardText>
                    <Table striped>
                        <thead>
                        <tr>
                        <th>Order ID</th>
                        <th>Order Time</th>
                        <th>Route</th>
                        <th>Order Status</th>
                        <th>Driver Name</th>
                        <th>Driver Contact</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Dummy</td>
                        <td>Dummy</td>
                        <td>Dummy</td>
                        <td>Dummy</td>
                        <td>Dummy</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Dummy</td>
                        <td>Dummy</td>
                        <td>Dummy</td>
                        <td>Dummy</td>
                        <td>Dummy</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>Dummy</td>
                        <td>Dummy</td>
                        <td>Dummy</td>
                        <td>Dummy</td>
                        <td>Dummy</td>
                        </tr>
                    </tbody>
                </Table>
             </CardText>
            </Card>
            </Col>
            <Col md="3">
            <Card body outline color="secondary">
                <CardText>
                <Table striped>
                        <thead>
                        <tr>
                        <th>#</th>
                        <th>Delivery Persons</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        </tr>
                    </tbody>
                </Table>
                </CardText>
            </Card>     
            </Col>
            <Col md="6"> 
            <Card body outline color="secondary">
                <CardTitle>New Orders</CardTitle>
                <CardText>
                <Table striped>
                        <thead>
                        <tr>
                        <th>Order ID</th>
                        <th>Order Time</th>
                        <th>Route</th>
                        <th>Type</th>
                        <th>Assign Driver</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Dummy</td>
                        <td>Dummy</td>
                        <td>Dummy</td>
                        <td><Button color="primary">Assign </Button></td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Dummy</td>
                        <td>Dummy</td>
                        <td>Dummy</td>
                        <td><Button color="primary">Assign </Button></td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>Dummy</td>
                        <td>Dummy</td>
                        <td>Dummy</td>
                        <td><Button color="primary ">Assign </Button></td>
                        </tr>
                    </tbody>
                </Table>


                </CardText>
               
            </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default OrderManagement;
