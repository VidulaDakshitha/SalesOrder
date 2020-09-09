import React, { Component} from 'react';
import Axios from "../../../src/axios";


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

class CustomerManagement extends Component{

    constructor(props){
        super(props);
        this.state={

            large: false,
            data2:""
        }
    }

    componentDidMount(){

       Axios({
      method: "GET",
      url:"/api/v1/orders",
    })
      .then((res) => {
        this.setState({
          data: res.data.data,
        });



    }).catch({


    });

}

    toggleLarge=()=> {
        this.setState({
          large: !this.state.large,
        });
      }

    render(){

        return(
<div>
<Card><CardBody>
    <CardHeader><h4>Order Information</h4>

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
                  Order ID
                </th>
                <th>
                  <i className="fa fa-user-circle-o fa-fw"></i>
                  Status
                </th>
                <th>
                  <i className="fa fa-id-card fa-fw mt-4"></i>
                  Time
                </th>
                <th>
                  <i className="fa fa-calendar fa-fw mt-4"></i>
                 Bill Amount
                </th>
              </tr>
            </thead>

            <tbody>

                <tr>
                  <i
                    className="fa fa-edit fa-lg mt-4"
                    onClick={() => {


                    }}
                  ></i>

                <td>003</td>
                  <td>Processing</td>
                  <td>12/10/2019</td>
                  <td>Rs1500</td>




                </tr>

            </tbody>
          </Table>
          </CardBody></Card>




</div>
            );
        }
    }



export default CustomerManagement;
