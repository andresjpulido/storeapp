import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {getHours} from '../redux/actions/hourActions'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
  } from "react-router-dom";

class ExtraHours extends Component {

  state = {
    amount: 0,
    type: "Toki",
    size: "Small",
    employees: [],
    columns: [{
      dataField: 'end_date',
      text: 'Date'
    },
    {
      dataField: 'id_emp',
      text: 'Hours',
      sort: true
    },
    {
      dataField: 'activity',
      text: 'Activity' 
    }] 
  }

  componentWillMount() {   
    const u = this.props.user;  
    this.props.getHours(u.username);
    console.log(this.state.unpaidHours, u.username)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push('/newea')
  }

  render() {
 
    return (
      <div className="container">

        <br /><br /><br />
        <h4>Extra Hours</h4>

        <BootstrapTable
          striped
          hover
          keyField='id'
          data={this.props.unpaidHours}
          columns={this.state.columns} />

        <button id="move" class="btn btn-secondary" type="button" onClick={this.handleSubmit}>New</button>
         
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.authReducer.user,
    error: state.error,
    unpaidHours: state.hourReducer.unpaidHours,
    pending: state.pending
  }
}
 
const mapDispatchToProps = dispatch => bindActionCreators({
  //fetchEmployees: fetchEmployeesAction,
  getHours: getHours
}, dispatch)  

export default (connect(mapStateToProps, mapDispatchToProps))(ExtraHours); 
