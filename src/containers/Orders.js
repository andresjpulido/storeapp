import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import findOrders from '../redux/actions/orderActions';
import getAllOrders from '../redux/actions/orderActions';
class Orders extends Component {

  constructor(props) {
    super(props); 
    this.test = this.test.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push('/student')
  }
 
  componentDidMount(){
    //this.props.findOrders("x","y");
    //console.log(this.props)    
  }

  test(){
    getAllOrders("test x","test y");
     
    const {
      findOrders 
    } = this.props;
    findOrders("test x","test y");
    console.log(this.props)
  }

  render() {
    this.props.findOrders("x","y");
    console.log(this.props)
    const {
      orders,
  } = this.props;
  console.log(orders)

    return (
      <div className="container">



    {   
      this.props.orders.map((post) => (
      <div key={post.id}>
          {post.id}
      </div>
    ))  
    }

        <br /><br /><br />
        <h4>Orders</h4>

        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product</th>
              <th scope="col">creation date</th>
              <th scope="col">Note</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>toki</td>
              <td>10/01/2019</td>
              <td>New</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Manaia</td>
              <td>10/01/2019</td>
              <td>New</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>toki</td>
              <td>10/01/2019</td>
              <td>Repair</td>
            </tr>
          </tbody>
        </table>

        <button id="be1" class="btn btn-secondary" type="button" onClick={this.test}>test</button>
      </div>
    );
  }
}
 
const mapStateToProps = state => ({
    orders : state.order.orders,
    items: state.items
});

const mapDispatchToProps = {
  findOrders,
}; 

export default connect(mapStateToProps, mapDispatchToProps) (Orders);
 