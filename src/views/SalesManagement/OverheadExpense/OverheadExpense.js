import React, { Component} from 'react';
import axios from '../../../axios';


import {
    Badge,
    Col,
    Nav,
    NavItem,
    NavLink,
    Row,
    TabContent,
    TabPane,
  } from "reactstrap";
  import {
    Card,
    CardBody,
    Button,
    Pagination,
    PaginationItem,
    PaginationLink,
    Table,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    CardTitle,
  } from "reactstrap";
  import {
    CardFooter,
    CardHeader,
    Collapse,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Dropdown,
    Fade,
    Form,
    FormGroup,
    FormText,
    FormFeedback,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupButtonDropdown,
    InputGroupText,
    Label,
  } from "reactstrap";



class Payment extends Component{

    constructor(props){
        super(props);
        this.state={
            large: false,
            expense:"",
            amount:"",
            paymentMode:"",
            payDate:"",
          data:[]
        }

        this.onSubmit=this.onSubmit.bind(this);
        this.handleExpense = this.handleExpense.bind(this);
        this.handleAmount = this.handleAmount.bind(this);
        this.handlePaymentMode = this.handlePaymentMode.bind(this);
        this.handlePayDate = this.handlePayDate.bind(this);
    }

    handleExpense(event){
      this.setState({expense: event.target.value})
    }

    handleAmount(event){
      this.setState({amount: event.target.value})
    }

    handlePaymentMode(event){
      this.setState({paymentMode: event.target.value})
    }

    handlePayDate(event){
      this.setState({payDate: event.target.value})
    }

    onSubmit(event){
      event.preventDefault();
      const newExpense={
          expense: this.state.expense,
          amount: this.state.amount,
          paymentMode: this.state.paymentMode,
          payDate: this.state.payDate
      };

      console.log(newExpense);

      axios.post('expense',newExpense)
          .then(res=>{
            console.log('Added new expense :'+res.data)
            window.location.reload()
          })
          .catch(err=>console.log('Error!! unsuccessful :'+err.data));

  }

  componentDidMount() {
  this.getData();
    }

  getData=()=>{
    axios.get('expense')
      .then(res=>{
        this.setState({
          data:res.data.data
        })
        console.log(res.data)

      })
      .catch(err=>console.log('Error!! unsuccessful :'+err.data));
  }


    toggleLarge=()=> {
        this.setState({
          large: !this.state.large,
        });
      }

render(){

  return(

      <div className="animated fadeIn">
          <Card><CardBody>
              <CardTitle>

                                <h3>Overhead Expense</h3>

              <div className="text-right">
              <i className="fa fa-plus-circle fa-lg " onClick={()=>{this.toggleLarge()}}></i>
              </div>
              </CardTitle>
                      <Table responsive className="table table-hover">
                      <thead>
                        <tr>
                        <i className="fa fa-reorder fa-lg mt-4" style={{paddingTop:12}}></i>
                          <th>

                            <i className="fa fa-user-circle-o fa-fw"></i>Expense ID
                          </th>

                          <th>
                          <i className="fa fa-id-card fa-fw mt-4"></i>
                          Expense
                          </th>
                          <th>
                            <i className="fa fa-phone fa-fw"></i>Amount
                          </th>
                          <th>
                            <i className="fa fa-circle-o-notch fa-fw fa-spin mt-4"></i>
                          Payment Mode
                          </th>
                          <th>
                            <i className="fa fa-circle-o-notch fa-fw fa-spin mt-4"></i>
                          Date
                          </th>
                          <th>
                            <i className="fa fa-circle-o-notch fa-fw fa-spin mt-4"></i>
                          Details
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                      {this.state.data.map(row=>(
                        <tr >
                          <i
                            className="fa fa-edit fa-lg mt-4"
                            onClick={()=>{}}
                          ></i>
                          <td>{row.oh_id}</td>
                          <td>{row.expense}</td>
                          <td>{row.amount}</td>
                          <td>{row.paymentMode}</td>
                          <td>{row.payDate}</td>
                          <td><Button>View Details</Button></td>
                        </tr>
                      ))}


                      </tbody>
                    </Table>
                    </CardBody></Card>



                    <Modal
                          isOpen={this.state.large}
                          toggle={this.toggleLarge}
                          className={"modal-lg " + this.props.className}
                        >
                    <ModalHeader toggle={this.toggleLarge}>
                            Add Overhead Expense
                          </ModalHeader>
                          <ModalBody>
                            <form onSubmit={this.onSubmit}>
                              <Row>
                                <Col xs="12" sm="6">
                                  <Card style={{ borderColor: "white" }}>
                                    <CardBody>
                                      <FormGroup>
                                        <Label htmlFor="firstName">Expense</Label>
                                        <Input
                                          type="text"
                                          id="Expense"
                                          name="Expense"
                                          placeholder="Enter Expense"
                                          onChange={this.handleExpense}
                                        />
                                      </FormGroup>

                                      <FormGroup>
                                        <Label htmlFor="mobileNumber">
                                          Amount
                                        </Label>
                                        <Input
                                          type="Number"
                                          id="Amount"
                                          name="Amount"
                                          placeholder="Enter Amount"
                                          onChange={this.handleAmount}
                                        />
                                      </FormGroup>


                                    </CardBody>
                                  </Card>
                                </Col>

                                <Col xs="12" sm="6">
                                  <Card style={{ borderColor: "white" }}>
                                    <CardBody>

                                      <FormGroup>
                                        <Label htmlFor="street">Date</Label>
                                        <Input
                                          type="Date"
                                          id="Date"
                                          name="Date"
                                          placeholder="Add Date"
                                          onChange={this.handlePayDate}
                                        />
                                      </FormGroup>

                                      <FormGroup>
                                        <Label htmlFor="street">Payment Mode</Label>
                                        <Input
                                          type="select"
                                          id="mode"
                                          name="mode"


                                          onChange={this.handlePaymentMode}
                                        >
                                            <option >Select Catergory</option>

                                    <option value="Cheque">Cheque</option>
                                    <option value="Cash">Cash</option>
                                    <option value="Bank">Bank</option>

                                        </Input>
                                      </FormGroup>



                                    </CardBody>
                                  </Card>
                                </Col>
                              </Row>
                              <Button
                                type="submit"
                                color="primary"
                                className="pull-right"
                              >
                                Save
                              </Button>
                            </form>
                          </ModalBody>
                        </Modal>
                  </div>
            );
        }
    }



export default Payment;
