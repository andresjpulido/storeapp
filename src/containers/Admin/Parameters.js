import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {getParameters} from '../../redux/actions/parameterActions'

class Parameters extends Component {

  state = {
    amount: 0,
    type: "Toki",
    size: "Small",
    parameters: [],
    columns: [{
      dataField: 'label',
      text: 'Name'
    },
    {
      dataField: 'value',
      text: 'Value',
      sort: true
    }] 
  }

  constructor(props) {
    super(props);   
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
    this.props.getParameters();
    console.log(this.state.parameters)
  }

  render() {
 
    const {parameters, error, pending} = this.props;
    console.log(parameters, error, pending)
 
    return (
      <div className="container">

        <br /><br /><br />
        <h4>Parameters</h4>

        <BootstrapTable
          striped
          hover
          keyField='id'
          data={this.props.parameters}
          columns={this.state.columns} />
   
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.error,
    parameters: state.parameterReducer.parameters,
    pending: state.pending
  }
}
 
const mapDispatchToProps = dispatch => bindActionCreators({
  getParameters: getParameters
}, dispatch)  

export default (connect(mapStateToProps, mapDispatchToProps))(Parameters);
