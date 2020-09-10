import React, {Component} from 'react';
import Navigation from "../../Navigation/Navigation";
import OfferCard from "./OfferCard";
import axios from "../../../axios";
import ProductCard from "../Home/ProductCard";

class Offers extends Component {

  constructor(props) {
    super(props);
    this.state={
      data:[]
    }
  }

  componentDidMount() {

    axios.get('/offers').then(res=>{
      this.setState({
        data:res.data.data
      })
      console.log(res.data.data)
    }).catch(err=>console.log(err))
  }


  render() {
    return (
      <div>
        <Navigation/>
        <div className="container">
          <br/>
          <h1 className="text-center text-uppercase">Offers</h1>
          <div className="row">

            <br/>

            {this.state.data.map(pro=>(
              <div className="col-md-3">
                <OfferCard data={pro}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Offers;
