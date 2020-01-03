import React, { Component } from 'react';

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


  render() {
    const { navCollapsed } = this.state
    const session = localStorage.getItem('session');
 
  if(session==0)
  return (
    <div></div>
  )
  else
  return (
    <nav class="navbar navbar-expand-md navbar-dark fixed-top">
          <a class="navbar-brand" href="#">Store</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class={(navCollapsed ? 'collapse' : '') + ' navbar-collapse ' + navCollapsed} id="navbarCollapse">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link to={`/home`} class="nav-link">Home <span class="sr-only">(current)</span></Link>
              </li>
              <li class="dropdown">
                <Link to={`/admin`} class="nav-link" data-toggle="dropdown">Admin</Link>
                <ul class="dropdown-menu">
                  <li class="text-center"><Link to={`/admin`}>Admin</Link></li>
                  <li class="text-center"><Link to={`/employees`}>Employees</Link></li>
                  <li class="text-center"><Link to={`/payslips`}>Payslips</Link></li>
                </ul>
              </li>              
              <li class="dropdown">
                <Link to={`/orders`} class="nav-link" data-toggle="dropdown">Orders</Link>
                <ul class="dropdown-menu">
                  <li class="text-center"><Link to={`/orders`}>Active</Link></li>
                  <li class="text-center"><Link to={`/order`}>New</Link></li>
                </ul>
              </li>
              <li class="dropdown">
                <a class="nav-link" href="/inventory" data-toggle="dropdown">Inventory</a>
                <ul class="dropdown-menu">
                  <li class="text-center"><Link to={`/inventory`}>All</Link></li>
                  <li class="text-center"><Link to={`/newproduct`}>Add</Link></li>
                </ul>
              </li>
              <li class="dropdown">
                <a class="nav-link" href="/ea" data-toggle="dropdown">Extra hours</a>
                <ul class="dropdown-menu" onClick={this._onToggleNav}>
                  
                  <li class="text-center"><Link to={`/ea`}>All</Link></li>
                  <li class="text-center"><Link to={`/newea`}>Add</Link></li>
                </ul>
              </li>

            </ul>
            <form class="form-inline mt-2 mt-md-0" >
              <Link to={`/`} onClick={this.handleClick.bind(this)}>Logout</Link>
            </form>
          </div>
        </nav>
      );
    }
  }

export default NavBar;
