import React from 'react';

import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Login from './login/pages/Login';
import Home from './login/pages/Home';
import Orders from './order/pages/Orders';
import Order from './order/pages/Order';
import Customers from './admin/pages/customers';
import Customer from './admin/pages/customer';
import Inventory from './inventory/pages/Inventory';
import Movement from './inventory/pages/movement';
import Movements from './inventory/pages/movements';
import ExtraHours from './hour/pages/ExtraHours';
import NewEA from './hour/pages/NewEA';
import Employees from './admin/pages/Employees';
import Employee from './admin/pages/Employee';
import Payslip from './admin/pages/Payslip';
import Payslips from './admin/pages/Payslips';
import Parameters from './admin/pages/Parameters'
import ProductTypes from './admin/pages/ProductTypes'
import ProductType from './admin/pages/ProductType'
import OnePayslip from './payslip/OnePayslip';
import ProductionReport from './reports/pages/production'
import OrdersReport from './reports/pages/orders'
import IndexReports from './reports/pages/reports';
import Alert from './components/alert';
import Users from './admin/pages/users';
import User from './admin/pages/user';
import Roles from './admin/pages/roles';
import Rol from './admin/pages/rol';
import Resources from './admin/pages/resources'; 
import { useSelector } from 'react-redux';
import Password from './admin/pages/password';
import Products from './inventory/pages/products';
import Product from './inventory/pages/product';

export default function App() {

  const pending = useSelector(state => state.generalReducer.pending)
  const redirectTo = useSelector(state => state.generalReducer.redirectTo)

   
  return (

    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/home" exact element={<Home />} />
        <Route path="/password/:id" exact element={<Password />} />

        <Route path="/employees" exact element={<Employees />} />
        <Route path="/employee" exact element={<Employee />} />
        <Route path="/employee/:id" exact element={<Employee />} />

        <Route path="/orders" exact element={<Orders />} />
        <Route path="/order" exact element={<Order />} />
        <Route path="/order/:id" exact element={<Order />} />

        <Route path="/customers" exact element={<Customers />} />
        <Route path="/customer/:id" exact element={<Customer />} />
        <Route path="/customer" exact element={<Customer />} />

        <Route path="/inventory" exact element={<Inventory />} />

        <Route path="/movement" exact element={<Movement />} />
        <Route path="/movements" exact element={<Movements />} />
        <Route path="/ea" exact element={<ExtraHours />} />

        <Route path="/newea/:id" exact element={<NewEA />} />
        <Route path="/newea" exact element={<NewEA />} />

        <Route path="/users" exact element={<Users />} />
        <Route path="/user" exact element={<User />} />
        <Route path="/user/:id" exact element={<User />} />

        <Route path="/roles" exact element={<Roles />} />
        <Route path="/rol" exact element={<Rol />} />
        <Route path="/rol/:id" exact element={<Rol />} />

        <Route path="/resources" exact element={<Resources />} />

        <Route path="/parameters" exact element={<Parameters />} />
        <Route path="/payslip" exact element={<Payslip />} />
        <Route path="/payslips" exact element={<Payslips />} />
        <Route path="/onepayslip" exact element={<OnePayslip />} />

        <Route path="/product" exact element={<Product />} />
        <Route path="/product/:id" exact element={<Product />} />
        <Route path="/products" exact element={<Products/>} />

        <Route path="/producttypes" exact element={<ProductTypes/>} />
        <Route path="/producttype" exact element={<ProductType/>} />
        <Route path="/producttype/:id" exact element={<ProductType/>} />

        <Route path="/reports/reports" exact element={<IndexReports/>} />
        <Route path="/reports/production" exact element={<ProductionReport/>} />
        <Route path="/reports/orders" exact element={<OrdersReport/>} />

        <Route element={<Login />} />
      </Routes>
      {
        pending &&
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      }       
      {
        redirectTo &&
        
        <Navigate replace to={redirectTo} />
      }
      <Alert />
      <Footer />

    </BrowserRouter>

  );
}