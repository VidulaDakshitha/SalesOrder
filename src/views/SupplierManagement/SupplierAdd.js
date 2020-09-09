import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import axios from "axios";
import alertify from "alertifyjs/build/alertify";
import "alertifyjs/build/css/alertify.min.css";
import "alertifyjs/build/css/alertify.css";
import "alertifyjs/build/css/themes/default.min.css";



class Supplier extends Component {
  constructor(props){
    super(props);
    this.state={
      supName:"",
      contact:"",
      email:"",
      joinDate: ""
    }

    this.handleSupName = this.handleSupName.bind(this);
    this.handleContact = this.handleContact.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleJoinDate = this.handleJoinDate.bind(this);
    
  }
  
  handleSupName(event){
    this.setState({supName: event.target.value})
  }
  handleContact(event){
    this.setState({contact: event.target.value})
  }
  handleEmail(event){
    this.setState({email: event.target.value})
  }
  handleJoinDate(event){
    this.setState({joinDate: event.target.value})
  }
  

  onSubmitHandler=(e)=>{
    e.preventDefault();
    const supAdd={
        supplier_name: this.state.supName,
        contact: this.state.contact,
        email: this.state.email,
        join_date: this.state.joinDate
    }

    console.log(supAdd);

    axios.post('supplier',supAdd)
                    .then(res=>console.log('Added new register user :'+res.data))
                    .catch(err=>console.log('Error!! unsuccessful :'+err.data));
  }

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form onSubmit={this.onSubmitHandler}>
                      <h1>Supplier Management</h1>
                      <p className="text-muted">Add Supplier</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-calendar"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Sup Name" name="supName" onChange={this.handleSupName} required />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-calendar"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Contact" name="contact" onChange={this.handleContact} required />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-tag"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="email" placeholder="Email" name="email" onChange={this.handleEmail} required />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-tag"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Join Date" name="joinDetails" onChange={this.handleJoinDate} required />
                      </InputGroup>
                      
                      <Row>
                        <Col xs="6">
                          <Button type="submit" color="primary" className="px-4">ADD</Button>
                        </Col>
                      </Row>
                      
                    </Form>
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
