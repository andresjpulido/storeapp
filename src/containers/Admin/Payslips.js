import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
 
import {getPayslips} from '../../redux/actions/payslipActions';
 

function operateFormatter (value, row, index)   {
  return [
    '<a class="like" href="javascript:void(0)" title="Like">',
    '<i class="fa fa-heart"></i>',
    '</a>  ',
    '<a class="remove" href="javascript:void(0)" title="Remove">',
    '<i class="fa fa-trash"></i>',
    '</a>'
  ].join('')
}
 
window.operateEvents = {
  'click .like': function (e, value, row, index) {
    alert('You click like action, row: ' + JSON.stringify(row))
  } 
}

function activeFormatter(cell, row) {
  var url = "http://192.168.1.6:4000/api/payslippdf/" + cell 

  return (
    <div> 
      <a href = {url} target = "_blank">Pdf {cell}</a>       
    </div>
  );
}

class payslips extends Component {

  state = {
    amount: 0,
    type: "Toki",
    size: "Small",
    payslips: [],
    columns: [ 
    {
      dataField: 'createdAt',
      text: 'Date',
      sort: true
    },
    {
      dataField: 'employee.firstName',
      text: 'Employee',
      sort: true,
      clickToSelect: false,
    },
    {
      dataField: 'id',
      text: 'File',
      sort: true,
      
       
      formatter: activeFormatter 

    } 
    ] 
  }
 
  activeFormatter = (cell, row) =>{
    return (
      <div> 
        <a href = "#" target = "_blank">Pdf</a>       
      </div>
    );
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

  handleNewPayslip = (e) => {
    e.preventDefault();
    this.props.history.push('/payslip')
    
  }

  componentWillMount() { 
     this.props.getPayslips();
   }

  render() {
 
    const {payslips, error, pending, user} = this.props;
    console.log(payslips, error, pending, user)
    console.log(this.state);
 

let token = localStorage.getItem('session')

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
         
         
        <button id="b1" class="btn btn-secondary" type="button" onClick={this.handleNewPayslip}>Create new</button>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    error: state.error,
    payslips: state.payslipReducer.payslips,
    employees: state.employeeReducer.employees,
    pending: state.pending,
    user: state.authReducer.user
  }
}
 
const mapDispatchToProps = dispatch => bindActionCreators({ 
  getPayslips: getPayslips
}, dispatch)  

export default (connect(mapStateToProps, mapDispatchToProps))(payslips);