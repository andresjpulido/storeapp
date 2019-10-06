import React, { Component } from 'react';
import axios from 'axios'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchPayslipAction from '../../api/fetchPayslips';
import {getPayslipsError, getPayslips, getPayslipsPending} 
from '../../redux/reducers/payslipReducer';
import store from '../../redux/store.js';

class payslips extends Component {

  state = {
    amount: 0,
    type: "Toki",
    size: "Small",
    payslips: [],
    columns: [{
      dataField: 'description',
      text: 'Description'
    },
    {
      dataField: 'id',
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
    const {fetchPayslips} = this.props;
    fetchPayslips();
    console.log(" ******* handleNewEmp *******")
    console.log(this.props)

    console.log(getPayslips(this.state))
    console.log(this.state)
    console.log(this.props)
    
    console.log(store.getState());
    
    this.render()
  }

  componentWillMount() {
    
    const {fetchPayslips} = this.props;
    fetchPayslips();
    console.log(this.state.payslips)
}

  render() {
 
    const {payslips, error, pending} = this.props;
    console.log(payslips, error, pending)
 
    return (
      <div className="container">

        <br /><br /><br />
        <h4>Payslips</h4>

        <BootstrapTable
          striped
          hover
          keyField='id'
          data={this.props.payslips}
          columns={this.state.columns} />
  
        <button id="b1" class="btn btn-secondary" type="button" onClick={this.handleNewEmp}>Create new</button>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.error,
    payslips: state.payslipReducer.payslips,
    pending: state.pending
  }
}
 
const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPayslips: fetchPayslipAction
}, dispatch)  

export default (connect(mapStateToProps, mapDispatchToProps))(payslips);
