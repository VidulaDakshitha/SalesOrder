import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import axios from "axios";
import alertify from "alertifyjs/build/alertify";
import "alertifyjs/build/css/alertify.min.css";
import "alertifyjs/build/css/alertify.css";
import "alertifyjs/build/css/themes/default.min.css";
import ImageUploader from 'react-images-upload';


class StockManagement extends Component {
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
        img: this.state.pictures
    }

    console.log(stockAdd);

    axios.post('stock',stockAdd)
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
                      <h1>Stock Management</h1>
                      <p className="text-muted">Add Stocks</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-calendar"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Pro Name" name="proName" onChange={this.handleProName} required />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-calendar"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Pro Price" name="proPrice" onChange={this.handleProPrice} required />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-tag"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Pro Details" name="proDetails" onChange={this.handleProDetails} required />
                      </InputGroup>

                      <InputGroup className="mb-4">
                      <ImageUploader
                          withIcon={true}
                          buttonText='Choose images'
                          onChange={this.onDrop}
                          imgExtension={['.jpg', '.gif', '.png', '.gif']}
                          maxFileSize={5242880}
                          />
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

export default StockManagement;
