//for pay admin to view all card payments and do actions

import React, { Component } from "react";
import {
    Button,
    Container,
    Table, Alert,
} from "reactstrap";

import axios from "../../axios";


class SupplierDisplay extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data:[]
        };
    }

    componentDidMount() {
      axios.get('supplier')
        .then(res=>{
          this.setState({
            data:res.data.data
          })
          console.log(res.data)

        })
        .catch(err=>console.log('Error!! unsuccessful :'+err.data));
    }


  render() {
        return (
            <div>
                <Container>
                    <Alert color="info">
                        <h1 className="my-auto mx-auto text-center text-dark">Supplier Details</h1>
                    </Alert>

                    <Table responsive="md">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Sup ID</th>
                            <th>Email</th>
                          <th>Phone Number</th>
                            <th>Join</th>

                            <th>Actions</th>
                        </tr>
                        </thead>
                            <tbody>
                            {this.state.data.map(row=>(
                              <tr>
                                <td>{row.supplier_name}</td>
                                <th scope="row">#</th>
                                <td>{row.supplier_id}</td>
                                <td>{row.email}</td>
                                <td>{row.contact}</td>
                                <td>{row.join_date}</td>
                                <td><Button color="success">Edit</Button> <Button color="danger">Remove</Button></td>
                              </tr>

                            ))}






                            </tbody>

                    </Table>
                </Container>


            </div>
        );
    }
}

export default SupplierDisplay;
