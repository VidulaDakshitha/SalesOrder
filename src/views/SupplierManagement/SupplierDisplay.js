//for pay admin to view all card payments and do actions

import React, { Component } from "react";
import {
    Button,
    Container,
    Table, Alert,
} from "reactstrap";

import axios from "axios";


class SupplierDisplay extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data:[]
        };
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
                            <th>Provided Items</th>
                            <th>Phone Number</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                            <tbody>
                                <tr>
                                <td>Dummy</td>
                                <th scope="row">#</th>
                                <td>Dummy</td>
                                <td>Dummy</td>
                                <td>Dummy</td>
                                <td><Button color="success">Edit</Button> <Button color="danger">Remove</Button></td>
                                </tr>

                                <tr>
                                <td>Dummy</td>
                                <th scope="row">#</th>
                                <td>Dummy</td>
                                <td>Dummy</td>
                                <td>Dummy</td>
                                <td><Button color="success">Edit</Button> <Button color="danger">Remove</Button></td>
                                </tr>

                                <tr>
                                <td>Dummy</td>
                                <th scope="row">#</th>
                                <td>Dummy</td>
                                <td>Dummy</td>
                                <td>Dummy</td>
                                <td><Button color="success">Edit</Button> <Button color="danger">Remove</Button></td>
                                </tr>

                                <tr>
                                <td>Dummy</td>
                                <th scope="row">#</th>
                                <td>Dummy</td>
                                <td>Dummy</td>
                                <td>Dummy</td>
                                <td><Button color="success">Edit</Button> <Button color="danger">Remove</Button></td>
                                </tr>

                                <tr>
                                <td>Dummy</td>
                                <th scope="row">#</th>
                                <td>Dummy</td>
                                <td>Dummy</td>
                                <td>Dummy</td>
                                <td><Button color="success">Edit</Button> <Button color="danger">Remove</Button></td>
                                </tr>
                            </tbody>
                        
                    </Table>
                </Container>


            </div>
        );
    }
}

export default SupplierDisplay;
