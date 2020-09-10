import React, {Component} from 'react';
import axios from "../../axios";
class AddNewOffer extends Component {

  constructor(props) {
    super(props);

    this.state={
      start_date:"",
      end_date:"",
      details:"",
      batch_id:"",
      brand_id:"",
      img:''
    }
  }
  /*
  *
  *  start_date:"2020-06-08",
    		end_date:"2020-06-08",
            details::"details",
    		batch_id:"cash",
    		brand_id:"cash",
            img:'image'
  * */

  submit=(e)=>{
    e.preventDefault();

    var img=this.state.img.split("\\");


    const formData = new FormData();
    formData.append('img',document.getElementById('img').files[0]);

    var data={
      start_date:this.state.start_date,
      end_date:this.state.end_date,
      details:this.state.details,
      batch_id:this.state.batch_id,
      brand_id:this.state.brand_id,
      img:img[img.length-1]
    }
    console.log(data)
    axios.post('offers',data).then(res=>{
      axios.post('offers/image',formData).then(res=>{
        window.location.href='/#/offers'
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
            <h1 className="text-center">Add New Offer</h1>
            <form action="" onSubmit={this.submit}>
              <h4>Details</h4>
              <input type="text" className="form-control" onChange={this.onchange} name="details" value={this.state.details} required/>
              <br/>

              <h4>Start Date</h4>
              <input type="date" className="form-control" onChange={this.onchange}  name="start_date" value={this.state.start_date} required/>
              <br/>
              <h4>End Date</h4>
              <input type="date" className="form-control" onChange={this.onchange} name="end_date" value={this.state.end_date} required />
              <br/>

              <h4>Batch id</h4>
              <input type="text" className="form-control" onChange={this.onchange}  name="batch_id" value={this.state.batch_id} required/>
              <br/>
              <h4>Brand id</h4>
              <input type="text" className="form-control" onChange={this.onchange} name="brand_id" value={this.state.brand_id} required />
              <br/>

              <h4>Offer Image</h4>
              <input type="file" className="form-control" id="img" onChange={this.onchange} name="img" value={this.state.img} required/>
              <br/>
              <button className="btn btn-primary mx-auto d-block">Publish</button>

            </form>
          </div>
        </div>

      </div>
    );
  }
}

export default AddNewOffer;
