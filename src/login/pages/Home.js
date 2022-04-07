import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getOrders, getOpenedOrders } from '../../redux/actions/orderActions';
import Lastlogin from '../components/lastLogin';
import Notifications from '../components/notifications';

class Dashboard extends Component {

  componentDidMount() {
    this.props.getOpenedOrders();
  }

  render() {

    const user = this.props.user;

    if (user.username === undefined) {
      //create generic method to check the session agains the jwt key 
      // this.props.history.push('/')
      return (<div className="container"></div>)
    }

    return (
      <div className="container">
        <br /><br /><br />

        <div className="jumbotron">

          <h1>Welcome {user.username}!</h1>

          <Lastlogin lastlogin={this.props.user.lastlogin} />
          <Notifications orders={this.props.orders} />

        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.generalReducer.error,
    pending: state.generalReducer.pending,
    user: state.authReducer.user,
    orders: state.orderReducer.orders
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  getOrders, getOpenedOrders
}, dispatch)

export default (connect(mapStateToProps, mapDispatchToProps))(Dashboard);

