import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, CardImg, Row, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import axios from "../../axios";
import alertify from "alertifyjs/build/alertify";
import "alertifyjs/build/css/alertify.min.css";
import "alertifyjs/build/css/alertify.css";
import "alertifyjs/build/css/themes/default.min.css";
import Navigation from "../Navigation/Navigation";



class Supplier extends Component {
  constructor(props){
    super(props);
    this.state={
      data:[]
    }

  }

  componentDidMount() {
    var id=localStorage.getItem('nUid')
    if (id===undefined||id===null){
      window.location.href="/register"
    }else{
      axios.get(`customer/${id}`).then(res=>{
        this.setState({
          data:res.data.data
        })

      }).catch(err=>console.log(err))
    }
  }

  render() {
    return (
      <div>
        <Navigation/>


          <Container className="mt-3">
            <Row className="justify-content-center">
              <Col md="6">
                <CardGroup>
                  <Card className="p-4">
                    <CardTitle className="text-primary text-center"><h1>PROFILE</h1></CardTitle>
                    <CardBody>
                      <Card>
                        <CardImg top width="100%" src="/assets/img/avatar.jpg" alt="Card image cap" />

                          {this.state.data.map(data=>(
                            <CardBody className="text-center">
                            <CardTitle><h3>{data.username}</h3></CardTitle>
                              <CardText> </CardText>
                              <CardText><h5>Gender: {data.gender}</h5></CardText>
                            <CardText><h5>DOB: {data.dob}</h5></CardText>
                            <CardText><h5>Email: {data.email}</h5></CardText>
                            <CardText><h5>ContactNo: {data.contact}</h5></CardText>
                            <CardText><h5>Profession: {data.profession}</h5></CardText>
                            <CardText><h5>Address: {data.address} </h5></CardText>

                            </CardBody>
                          ))}

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
