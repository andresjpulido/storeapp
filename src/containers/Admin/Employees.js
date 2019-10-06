import React, { Component } from 'react';
import axios from 'axios'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchEmployeesAction from '../../api/fetchEmployees';
import {getEmployeesError, getEmployees, getEmployeesPending} 
from '../../redux/reducers/employeeReducer';
import store from '../../redux/store.js';

class Employees extends Component {

  state = {
    amount: 0,
    type: "Toki",
    size: "Small",
    employees: [],
    columns: [{
      dataField: 'firstName',
      text: 'Name'
    },
    {
      dataField: 'lastName',
      text: 'Last Name',
      sort: true
    }] 
  }

  constructor(props) {
    super(props);  
    //is.handleNewEmp = this.handleNewEmp.bind(this);
  }
 

  rowEvents = {
    onClick: (e, row, rowIndex) => {
      console.log(`clicked on row with index: ${row.id}`);
      this.props.history.push('/payslip')
    },
    onMouseEnter: (e, row, rowIndex) => {
      //console.log(`enter on row with index: ${rowIndex}`);
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push('/student')
  }

  handleNewEmp = (e) => {
    e.preventDefault();
    //this.props.history.push('/employee')
    const {fetchEmployees} = this.props;
    fetchEmployees();
    console.log(" ******* handleNewEmp *******")
    console.log(this.props)

    console.log(getEmployees(this.state))
    console.log(this.state)
    console.log(this.props)
    
    console.log(store.getState());
    
    this.render()
  }

  componentWillMount() {
    
    const {fetchEmployees} = this.props;
    fetchEmployees();
    console.log(this.state.employees)
}

  render() {
 
    const {employees, error, pending} = this.props;
    console.log(employees, error, pending)
 
    return (
      <div className="container">

        <br /><br /><br />
        <h4>Employees</h4>

        <BootstrapTable
          striped
          hover
          keyField='id'
          data={this.props.employees}
          columns={this.state.columns} />
  
        <button id="b1" class="btn btn-secondary" type="button" onClick={this.handleNewEmp}>Create new</button>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.error,
    employees: state.employeeReducer.employees,
    pending: state.pending
  }
}
 
const mapDispatchToProps = dispatch => bindActionCreators({
  fetchEmployees: fetchEmployeesAction
}, dispatch)  

export default (connect(mapStateToProps, mapDispatchToProps))(Employees);
