
import React,{Component} from 'react';
import axios from '../../../axios';


import MainBg from "./MainBg";
import ProductCard from "./ProductCard";
import './Home.css'
import Navigation from "../../Navigation/Navigation";
class Home extends Component{

constructor(props) {
  super(props);
  this.state={
    data:[]
  }
}

componentDidMount() {

  axios.get('/stock').then(res=>{
    this.setState({
      data:res.data.data
    })
    console.log(res.data.data)
  }).catch(err=>console.log(err))
}

  render() {


        return (
            <div   className="home">
              <Navigation/>
                <MainBg/>

                <br/><br/>

                    <section>

                        <div className="container about">
                            <hr/>
                                <h1 className="text-center">About US</h1><br/>

                                <div className="row">
                                    <div className="col-md-12">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium minus
                                            adipisci esse nihil soluta culpa optio nisi vero dolores obcaecati sed et labore
                                            alias, doloremque repellat nobis libero facilis numquam.

                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis veritatis
                                            sapiente nesciunt recusandae ex quis accusantium eius, cumque mollitia deleniti
                                            voluptatum quo praesentium quasi iste! Molestiae odio, minima unde a.
                                        </p>
                                    </div>
                                </div>
                        </div>


                    </section>

                <br/>

                <div className="container">
                  <hr/>
                    <div className="row">
                      {this.state.data.map(pro=>(
                        <div className="col-md-3">
                          <ProductCard data={pro} />
                        </div>
                      ))}


                    </div>

                </div>

            </div>
        );

    }
}

export default Home;
