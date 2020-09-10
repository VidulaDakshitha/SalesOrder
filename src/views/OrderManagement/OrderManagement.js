import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, CardTitle, CardText, Table } from 'reactstrap';
import axios from "../../axios";
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
      pictures: [],
      orders:[]
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
componentDidMount() {
    axios.get('orders').then(res=>{
      this.setState({
        orders:res.data.data
      })
      console.log(res.data.data)
    }).catch(err=>console.log(err))
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
                          <th>Address</th>
                          <th>Status</th>
                          <th>Type</th>
                          <th>Invoice ID</th>
                          <th>Driver ID</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.orders.filter(o=>o.delivery_Person_id !=="noPerson").map(row=>(
                      <tr>
                        <th scope="row">{row.order_id}</th>
                        <td>{row.address}</td>
                        <td>{row.status}</td>
                        <td>{row.type}</td>
                        <td>{row.invoice_id}</td>
                        <td>{row.delivery_Person_id}</td>
                      </tr>
                    ))}


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
                        <th>Address</th>
                        <th>Status</th>
                        <th>Type</th>
                          <th>Invoice ID</th>
                        <th>Assign Driver</th>
                        </tr>
                    </thead>
                    <tbody>

                    {this.state.orders.filter(o=>o.delivery_Person_id==="noPerson").map(row=>(
                      <tr>
                        <th scope="row">{row.order_id}</th>
                        <td>{row.address}</td>
                        <td>{row.status}</td>
                        <td>{row.type}</td>
                        <td>{row.invoice_id}</td>
                        <td><Button color="primary">Assign </Button></td>
                      </tr>
                    ))}


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
