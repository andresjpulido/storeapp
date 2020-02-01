import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import store from '../redux/store';
import {getOrders} from '../redux/actions/orderActions';

class Dashboard extends Component {

  constructor(props) {
    super(props);     
  }
 
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push('/student')
  }

  componentDidMount(){
    console.log(this.props.user)
  }

  formatLastLogin(){
   
    var lastlogin = new Date(this.props.user.lastlogin);
    console.log("Formateando la fecha en el dashboard " + this.props.user.lastlogin)
    return (
          <p class="lead">Your last date login was {new Intl.DateTimeFormat('en-NZ', { 
              year: 'numeric', 
              month: 'long', 
              day: '2-digit' ,
              hourCycle: 'h24',
              hour: 'numeric',
              minute: 'numeric',
              second: 'numeric'
          }).format(lastlogin)}.</p>
    )}

  render() {
    const state = store.getState();
    console.log(state)
    console.log(state.authReducer.user) 

    const user = this.props.user;
   
    console.log(user.username)

    if(user.username === undefined){
      //create generic method to check the session agains the jwt key
      console.log("redireccionando ...")
      this.props.history.push('/')
      return (<div className="container"></div>)
    }

    this.props.getOrders();

    return (
      <div className="container">
      <br /><br /><br />

        <div class="jumbotron">

        <h1>Welcome {user.username}!</h1>
         {this.formatLastLogin()} 

         <h1>Notifications</h1>
         {
            this.props.orders && this.props.orders.lenght > 0  &&
            <p class="lead">There are <span class="badge">5</span> pending orders.</p>
         }
          
           
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.authReducererror, 
    pending: state.pending,
    user: state.authReducer.user,
    orders: state.orderReducer.orders
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  getOrders
}, dispatch) 

export default (connect(mapStateToProps, mapDispatchToProps))(Dashboard);

