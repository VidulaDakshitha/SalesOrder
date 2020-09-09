import React, {Component} from 'react';
import Navigation from "../../Navigation/Navigation";
import OfferCard from "./OfferCard";

class Offers extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <div className="container">
          <br/>
          <h1 className="text-center text-uppercase">Offers</h1>
          <div className="row">

            <br/>
            <div className="col-md-3">
            <OfferCard/>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Offers;
