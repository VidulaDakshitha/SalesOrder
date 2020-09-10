import React, {Component} from 'react';
import "./offer.css";
class OfferCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="card mx-auto" style={{width:'90%',height:'450px'}} >
        <img  src={process.env.REACT_APP_BASEURL+"/"+this.props.data.img} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{this.props.data.details}</h5>
          <p className="card-title">FROM {this.props.data.start_date}</p>
          <p className="card-text">TO {this.props.data.end_date}</p>
          <p className="card-text">VENUE {this.props.data.brand_id}</p>
        </div>
      </div>
    );
  }
}

export default OfferCard;
