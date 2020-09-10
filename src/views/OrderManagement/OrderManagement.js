import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, CardTitle, CardText, Table } from 'reactstrap';
import axios from "../../axios";
import alertify from "alertifyjs/build/alertify";
import "alertifyjs/build/css/alertify.min.css";
import "alertifyjs/build/css/alertify.css";
import "alertifyjs/build/css/themes/default.min.css";
import {Modal} from "react-bootstrap";


class OrderManagement extends Component {
  constructor(props){
    super(props);
    this.state={
      proName:"",
      proPrice:"",
      proDetails:"",
      pictures: [],
      orders:[],
      employee:[],
      c:1,
      show:false,
      adriver:"",
      nowSelected:"",
      mess:""
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


  axios.get('employee')
    .then(res=>{
      this.setState({
        employee:res.data.data
      })
      console.log(res.data.data)
    })
    .catch(err=>console.log('Error!! unsuccessful :'+err.data));



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
  handleClose=()=>{
    if (this.state.show){
      this.setState({
        show:false
      })
    }else{
      this.setState({
        show:true
      })
    }

  }

  assignDriver=id=>{

    console.log(this.state.nowSelected,this.state.adriver);
   if (this.state.adriver===""){
     this.setState({
       mess:"Select Driver"
     })
   }else{
     this.setState({
       mess:""
     })

     var temp = this.state.adriver.split("/");
     var x={
       delivery_Person_id:temp[1].trim(),
       username:temp[0].trim(),
       order_id:this.state.nowSelected.trim()
     }
      axios.put('orders',x).then(res=>{
        console.log(res)
       window.location.reload();
      }).catch(err=>console.log(err))


   }


  }

  handler=(id)=>{
    this.state.nowSelected=id
    this.handleClose()
  }


  changeHandler=e=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  render() {
    this.state.c=1;
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
                          <th>Delivery Person</th>
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

                    {this.state.employee.filter(e=>e.job_role==="Delivery Person").map(row=>(
                      <tr>
                        <th scope="row">{this.state.c}</th>
                        <td>{row.username}</td>
                      </tr>
                    ))}

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
                        <td><Button color="primary" onClick={()=>this.handler(row.order_id)}>Assign </Button></td>
                      </tr>
                    ))}


                    </tbody>
                </Table>


                </CardText>

            </Card>
            </Col>
          </Row>
        </Container>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Assign Driver For </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div>
            <p className="text-center text-danger">{this.state.mess}</p>
            <select name="adriver" id="" value={this.state.adriver} onChange={this.changeHandler} className="form-control">
              <option >Assign Driver</option>
              {this.state.employee.filter(e=>e.job_role==="Delivery Person"&&e.assignDelivery==="No").map(row=>(
                <option value={`${row.username}/${row.user_id}`}>{row.username}</option>

              ))}

            </select>
          </div>


          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.assignDriver}>
              Assign Now
            </Button>
          </Modal.Footer>
        </Modal>

      </div>
    );
  }
}

export default OrderManagement;
