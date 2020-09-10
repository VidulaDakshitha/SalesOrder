import React, { Component} from 'react';
import axios from '../../axios';

import {
    Badge,
    Card,
    CardBody,
    CardHeader,
    Col,
    Pagination,
    PaginationItem,
    PaginationLink,
    Row,
    Table,
    Button,
    ModalBody,
    ModalHeader,
    Modal,
    ModalFooter,
    FormGroup,
    Input,
    Label,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
  } from "reactstrap";

class EmployeeDashboard extends Component{

    constructor(props){
        super(props);
        this.state={

            large: false,
            username:"",
            password:"",
            gender:"",
            dob:"",
            nic:"",
            job_role:"",
            address:"",
          data:[]
        }
    }

    toggleLarge=()=> {
        this.setState({
          large: !this.state.large,
        });
      }

      onChangeHandler=(e)=>{

        this.setState({
          [e.target.name]:e.target.value
        })

        if(e.target.value.length<7)
        {
          console.log("visited")
          this.setState(
            {
              valid1: false,
              invalid1: true,
            }
          );

        }else{
          console.log("visited 2")
          this.setState(
            {
              invalid1: false,
              valid1: true,
            }
          );

        }
      }

      onSubmitHandler=(e)=>{
        e.preventDefault();

        const regEmployees={
          username:this.state.username,
          password:this.state.password,
          gender: this.state.gender,
          dob: this.state.dob,
          nic: this.state.nic,
          job_role: this.state.job_role,
          address: this.state.address,

        }

        // const url = "/user/update/";
        // BaseService.PostService(url, regUsers)
        //   .then((res) => {
        //     if (res.data.success === true) {
        //       alertify.success("Successfully Registered");
        //       window.location.href="/#/login";
        //     } else {
        //       alertify.alert("Cannot perform the operation");
        //     }
        //   })
        //   .catch((err) => {
        //     alertify.alert("Cannot perform the operation");
        //   });

          console.log(regEmployees);

          axios.post('employee',regEmployees)
                  .then(res=>{
                    console.log('Added new register user :'+res.data)
                    window.location.reload()
                  })
                  .catch(err=>console.log('Error!! unsuccessful :'+err.data));
      }

  componentDidMount() {
    axios.get('employee')
      .then(res=>{
        this.setState({
          data:res.data.data
        })
        console.log(res.data)
      })
      .catch(err=>console.log('Error!! unsuccessful :'+err.data));
  }

  render(){

        return(
<div>
<Card><CardBody>
    <CardHeader><h4>Employee Details</h4>

    <div className="text-right">
        <i className="fa fa-plus-circle fa-lg " onClick={()=>{this.toggleLarge()}}></i>
        </div>
    </CardHeader>
<Table responsive className="table table-hover hover">
            <thead>

            <tr>
                <i
                  className="fa fa-reorder fa-lg mt-4"
                  style={{ paddingTop: 12 }}
                ></i>
                 <th>
                  <i className="fa fa-user-circle-o fa-fw"></i>
                  Employee ID
                </th>
                <th>
                  <i className="fa fa-user-circle-o fa-fw"></i>
                  Full name
                </th>
                <th>
                  <i className="fa fa-id-card fa-fw mt-4"></i>
                  Address
                </th>
                <th>
                  <i className="fa fa-calendar fa-fw mt-4"></i>
                  Role
                </th>
              <th>
                <i className="fa fa-calendar fa-fw mt-4"></i>
                Gender
              </th>
              <th>
                <i className="fa fa-calendar fa-fw mt-4"></i>
                Birth Day
              </th>
              </tr>


            </thead>

            <tbody>
            {this.state.data.map(row=>(
              <tr>
                <i
                  className="fa fa-edit fa-lg mt-4"
                  onClick={() => {


                  }}
                ></i>

                <td>{row.user_id}</td>
                <td>{row.username}</td>
                <td>{row.address}</td>
                <td>{row.job_role}</td>
                <td>{row.gender}</td>
                <td>{row.dob}</td>




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
                      Add Employee
                    </ModalHeader>
                    <ModalBody>
                      <form onSubmit={this.onSubmitHandler}>
                      {/* <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="First Name" name="firstname" value={this.state.firstname} autoComplete="new-password"  onChange={this.onChangeHandler}/>

                    </InputGroup>


                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Last Name" name="lastname" value={this.state.lastname}   onChange={this.onChangeHandler}/>

                    </InputGroup> */}

                              <InputGroup className="mb-3">
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                    <i className="icon-user"></i>
                                  </InputGroupText>
                                </InputGroupAddon>
                                <Input type="text" placeholder="Full Name" name="username" value={this.state.username} onChange={this.onChangeHandler}/>
                              </InputGroup>

                              <FormGroup tag="fieldset">
                                    <p className="text-muted">Gender</p>
                                      <FormGroup check className="mt-4" style={{paddingLeft:"30px"}}>
                                            <Label check>
                                              <Input type="radio" name="gender" value="Male" onChange={this.onChangeHandler} />{' '}
                                              Male
                                            </Label>
                                      </FormGroup>
                                      <FormGroup check className="mt-4" style={{paddingLeft:"30px"}}>
                                            <Label check>
                                              <Input type="radio" name="gender" value="Female" onChange={this.onChangeHandler} />{' '}
                                            Female
                                            </Label>
                                      </FormGroup>
                              </FormGroup>


                              <FormGroup>
                              <p className="text-muted">Enter Birthdate</p>
                              <InputGroup className="mb-3">
                                            <InputGroupAddon addonType="prepend">
                                              <InputGroupText>
                                                <i className="icon-calendar"></i>
                                              </InputGroupText>
                                            </InputGroupAddon>
                                            <Input type="Date" placeholder="Enter DOB" name="dob" value={this.state.dob} onChange={this.onChangeHandler}/>
                                          </InputGroup>
                              </FormGroup>

                              <InputGroup className="mb-3">
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                    <i className="icon-user"></i>
                                  </InputGroupText>
                                </InputGroupAddon>
                                <Input type="text" placeholder="NIC" name="nic" value={this.state.nic}   onChange={this.onChangeHandler}/>
                              </InputGroup>

                              <InputGroup className="mb-3">
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                    <i className="icon-user"></i>
                                  </InputGroupText>
                                </InputGroupAddon>
                                <Input type="text" placeholder="Address" name="address" value={this.state.address}   onChange={this.onChangeHandler}/>
                              </InputGroup>

                              <InputGroup className="mb-3">
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                    <i className="icon-user"></i>
                                  </InputGroupText>
                                </InputGroupAddon>
                                <Input type="text" placeholder="Job role" name="job_role" value={this.state.job_role} onChange={this.onChangeHandler}/>
                              </InputGroup>
                        <InputGroup className="mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="icon-user"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.onChangeHandler}/>
                        </InputGroup>

                    <Button color="success" type="submit" >Add Employee</Button>

                      </form>
                    </ModalBody>
                  </Modal>
</div>
            );
        }
    }



export default EmployeeDashboard;
