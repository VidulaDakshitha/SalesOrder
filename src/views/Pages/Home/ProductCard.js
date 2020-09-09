import React, {Component} from 'react';

class ProductCard extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="card mx-auto" style={{width:'90%',height:'450px'}} >
                <img  src={process.env.REACT_APP_BASEURL+"img/product/"+this.props.data.img} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.data.proName}</h5>
                        <h5 className="card-title">{this.props.data.proPrice}</h5>
                        <p className="card-text">{this.props.data.proDetails}</p>

                    </div>
            </div>
        );
    }
}

export default ProductCard;
