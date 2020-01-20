import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
  } from "react-router-dom";

class NavBar extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  state = {
    navCollapsed: true
}

_onToggleNav = () => {
    console.log("_onToggleNav")
    this.setState({ navCollapsed: !this.state.navCollapsed })

}

  handleClick = event => {
    localStorage.setItem('session', 0);
    console.log("Cleaning session from localstorage")
    this.props.history.push('/')
  }

  isAdmin = () =>{
    let user = this.props.user;
    console.log(user.username)
    if(user.username === "admin"){
      return "dropdown"
    }else{
      return "dropdown d-none";
    }    
  }

  render() { 
    const { navCollapsed } = this.state
    const session = localStorage.getItem('session');
    let user = this.props.user;
    console.log("render() NavBar" + session + user.token + typeof user.token) 

    if(typeof user.token === 'undefined')
      return (
        <div></div>
      )
    else
  
      return (
 
        <nav class="navbar navbar-expand-md navbar-dark fixed-top">
          <a class="navbar-brand" href="#">Store</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" 
          data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" 
          aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class={(navCollapsed ? 'collapse' : '') + ' navbar-collapse ' + navCollapsed} id="navbarCollapse">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link to={`/home`} class="nav-link">Home <span class="sr-only">(current)</span></Link>
              </li>
              <li class={this.isAdmin()}>
                <Link to={`/admin`} class="nav-link" data-toggle="dropdown">Admin</Link>
                <ul class="dropdown-menu">
                  <li class="text-center"><Link to={`/admin`}>Admin</Link></li>
                  <li class="text-center"><Link to={`/employees`}>Employees</Link></li>
                  <li class="text-center"><Link to={`/payslips`}>Payslips</Link></li>
                  <li class="text-center"><Link to={`/movements`}>Inventory</Link></li>
                </ul>
              </li>              
              <li class="dropdown">
                <Link to={`/orders`} class="nav-link" data-toggle="dropdown">Orders</Link>
                <ul class="dropdown-menu">
                  <li class="text-center"><Link to={`/orders`}>Active</Link></li>
                  <li class="text-center"><Link to={`/order`}>New</Link></li>
                </ul>
              </li>
              <li class="nav-item">
                <Link to={`/inventory`} class="nav-link">Inventory</Link> 
              </li>
              <li class="dropdown">
                <Link to={`/ea`} class="nav-link">Hours</Link> 
              </li>

            </ul>

            {user.username}

            <form class="form-inline mt-2 mt-md-0" >              
              <Link to={`/`} onClick={this.handleClick.bind(this)}>Logout</Link>
            </form>
          </div>
        </nav>
      );
    }
  }

  const mapStateToProps = (state) => {
    return { 
      user: state.authReducer.user
    }
  }
  
  const mapDispatchToProps = dispatch => bindActionCreators({
     
  }, dispatch)
  
export default (connect(mapStateToProps, mapDispatchToProps))(NavBar);
 
//export default NavBar;