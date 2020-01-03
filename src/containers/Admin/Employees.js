import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {getAllEmployees} from '../../redux/actions/employeeActions'

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
 
  handleNewEmp = (e) => {
    e.preventDefault();
    this.props.history.push('/employee')
  }

  componentWillMount() {    
    const {getAllEmployees} = this.props;
    //fetchEmployees();
    this.props.getAllEmployees();
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
  //fetchEmployees: fetchEmployeesAction,
  getAllEmployees: getAllEmployees
}, dispatch)  

export default (connect(mapStateToProps, mapDispatchToProps))(Employees);
