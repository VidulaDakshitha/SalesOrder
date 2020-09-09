import React, {Component} from 'react';
import axios from "../../axios";
class AddNewProduct extends Component {

  constructor(props) {
    super(props);

    this.state={
          proName:"",
        proPrice:"",
        proDetails:"",
        img:""
    }
  }
  /*
  *
  *  proName:"proname",
            proPrice:1000,
            proDetails:"details",
            img:"path"
  * */

  submit=(e)=>{
  e.preventDefault();

  var img=this.state.img.split("\\");


  const formData = new FormData();
  formData.append('img',document.getElementById('img').files[0]);

    var data={
      proName:this.state.proName,
      proPrice: parseInt(this.state.proPrice),
      proDetails:this.state.proDetails,
      img:img[img.length-1]
    }
    axios.post('/stock',data).then(res=>{
      axios.post('/stock/image',formData).then(res=>{
       window.location.href='/#/main'
      }).catch(err=>console.log(err))


  }).catch(err=>console.log(err))
}

  onchange=e=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }


  render() {
    return (
      <div>
        <div className="col-md-6 mx-auto">
          <div className="card mx-auto shadow  p-3">
            <h1 className="text-center">Add New Product</h1>
            <form action="" onSubmit={this.submit}>
              <h4>Product Name</h4>
              <input type="text" className="form-control" onChange={this.onchange}  name="proName" value={this.state.proName} required/>
              <br/>
              <h4>Price</h4>
              <input type="number" className="form-control" onChange={this.onchange} name="proPrice" value={this.state.proPrice} required />
              <br/>
              <h4>Details</h4>
              <input type="text" className="form-control" onChange={this.onchange} name="proDetails" value={this.state.proDetails} required/>
              <br/>
              <h4>Product Image</h4>
              <input type="file" className="form-control" id="img" onChange={this.onchange} name="img" value={this.state.img} required/>
              <br/>
              <button className="btn btn-primary mx-auto d-block">Add</button>

            </form>
          </div>
        </div>

      </div>
    );
  }
}

export default AddNewProduct;
