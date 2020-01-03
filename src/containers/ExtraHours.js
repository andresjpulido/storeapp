import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {getHours} from '../redux/actions/hourActions'
import store from '../redux/store';

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

    console.log(this.props)

    //const state = store.getState();
    //console.log(state)
       // console.log(state.authReducer.user)

    this.props.getHours(1);
    console.log(this.state.unpaidHours)
    //console.log(state.authReducer.user)
  }

  render() {

 console.log(this.props.user)

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
  
        <button id="b1" class="btn btn-secondary" type="button" onClick={this.handleNewEmp}>Create new</button>
 
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
