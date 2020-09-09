import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import axios from "axios";
import alertify from "alertifyjs/build/alertify";
import "alertifyjs/build/css/alertify.min.css";
import "alertifyjs/build/css/alertify.css";
import "alertifyjs/build/css/themes/default.min.css";
import ImageUploader from 'react-images-upload';

class Offer extends Component {
  constructor(props){
    super(props);
    this.state={
      startDate:"",
      endDate:"",
      details:"",
      batchID:"",
      brandID:"",
      pictures: []
    }

    this.onDrop = this.onDrop.bind(this);
    this.handleStartDate = this.handleStartDate.bind(this);
    this.handleEndDate = this.handleEndDate.bind(this);
    this.handleDetails = this.handleDetails.bind(this);
    this.handleBatchID = this.handleBatchID.bind(this);
    this.handleBrandID = this.handleBrandID.bind(this);
    
  }
  
  handleStartDate(event){
    this.setState({startDate: event.target.value})
  }
  handleEndDate(event){
    this.setState({endDate: event.target.value})
  }
  handleDetails(event){
    this.setState({details: event.target.value})
  }
  handleBatchID(event){
    this.setState({batchID: event.target.value})
  }
  handleBrandID(event){
    this.setState({brandID: event.target.value})
  }
  onDrop(picture) {
    this.setState({
        pictures: this.state.pictures.concat(picture),
    });
}

  onSubmitHandler=(e)=>{
    e.preventDefault();
    const offerAdd={
      start_date: this.state.startDate,
      end_date: this.state.endDate,
      details: this.state.details,
      batchID: this.state.batchID,
      brandID: this.state.brandID,
      img: this.state.pictures
    }

    console.log(offerAdd);

    axios.post('offers',offerAdd)
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
                      <h1>OFFER MANAGEMENT</h1>
                      <p className="text-muted">Add Offers</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-calendar"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="date" placeholder="Starting date" name="start_date" onChange={this.handleStartDate} required />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-calendar"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="date" placeholder="End date" name="end_date" onChange={this.handleEndDate} required />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-tag"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Details" name="details" onChange={this.handleDetails} required />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-tag"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Batch ID" name="batch_id" onChange={this.handleBatchID} required />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-tag"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Brand ID" name="brand_id" onChange={this.handleBrandID} required />
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

export default Offer;
