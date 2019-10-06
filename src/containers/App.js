import React, { Component } from 'react';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Login from './Login';
import Home from './Home';
import Orders from './Orders';
import Order from './Order';
import Inventory from './Inventory';
import ExtraHours from './ExtraHours';
import NewProduct from './NewProduct';
import NewEA from './EA/NewEA';
import Admin from './Admin/Admin';
import Employees from './Admin/Employees';
import Employee from './Admin/Employee';
import Payslip from './EA/Payslip';
import Payslips from './Admin/Payslips';
import OnePayslip from './EA/OnePayslip';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const session = localStorage.getItem('session');
console.log(session)
    return (
      <div>

        <BrowserRouter>
        <div>
          <NavBar />
            <Switch>
              <Route
                path="/"
                exact
                component={Login}
                model="1"
              />
              <Route
                path="/home"
                exact
                component={Home}
              />
              <Route
                path="/admin"
                exact
                component={Admin}
              />
              <Route
                path="/employees"
                exact
                component={Employees}
              />   
              <Route
                path="/employee"
                exact
                component={Employee}
              />                                               
              <Route
                path="/orders"
                exact
                component={Orders}
              />
              <Route
                path="/order"
                exact
                component={Order}
              />
              <Route
                path="/inventory"
                exact
                component={Inventory}
              />
              <Route
                path="/ea"
                exact
                component={ExtraHours}
              />
              <Route
                path="/newproduct"
                exact
                component={NewProduct}
              />
              <Route
                path="/newea"
                exact
                component={NewEA}
              />
              <Route
                path="/payslip"
                exact
                component={Payslip}
              />    
              <Route
                path="/payslips"
                exact
                component={Payslips}
              />   
              <Route
                path="/onepayslip"
                exact
                component={OnePayslip}
              />                     
              <Redirect to="/" />
            </Switch>
        </div>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
