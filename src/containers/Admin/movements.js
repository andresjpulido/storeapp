import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {getMovements} from '../../redux/actions/movementsActions'

class Movements extends Component {

  state = {
    amount: 0,
    type: "Toki",
    size: "Small",
    movements: [],
    columns: [      
    {
        dataField: 'productType.name',
        text: 'Product',
        sortable: true,
    },
    {
        dataField: 'size.name',
        text: 'Size',
        sortable: true
    },    
    {
        dataField: 'amount',
        text: 'Total'
    }],
    columns2: [   
      {
          dataField: 'createdAt',
          text: 'Date',
          sortable: true,
      },   
      {
          dataField: 'productType.name',
          text: 'Product',
          sortable: true,
      },
      {
          dataField: 'size.name',
          text: 'Size',
          sortable: true
      },    
      {
          dataField: 'amount',
          text: 'Amount'
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
    this.props.getMovements();
    console.log(this.state.employees)
  }

  render() {
 
    const {employees, error, pending} = this.props;
    console.log(employees, error, pending)
 
    


    return (
      <div className="container">

        <br /><br /><br />
        <h4>Movements</h4>

        <form>
          <div class="form-group">
            <label for="nameInput">Week:</label>
            <select class="form-control" id="position" name="position" onChange={this.handleChange}  >
              <option value="2019-12-29/2020-01-04">2019-12-29 - 2020-01-04</option>
              <option value="2020-01-05/2020-01-11">2020-01-05 - 2020-01-11</option>
              <option value="2020-01-12/2020-01-18">2020-01-12 - 2020-01-18</option>
              <option value="2020-01-19/2020-01-25">2020-01-05 - 2020-01-11</option>
            </select> 
          </div>
        </form>

        <h5>Details</h5>

        <BootstrapTable
          striped
          hover
          keyField='id'
          data={this.props.movements}
          columns={this.state.columns} 
         
        />
  
        <h5>History</h5>

        <BootstrapTable
          striped
          hover
          keyField='id'
          data={this.props.movements}
          columns={this.state.columns2} 
         
        />       

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.error,
    movements: state.movementsReducer.movements,
    pending: state.pending
  }
}
 
const mapDispatchToProps = dispatch => bindActionCreators({
    getMovements: getMovements
}, dispatch)  

export default (connect(mapStateToProps, mapDispatchToProps))(Movements);
