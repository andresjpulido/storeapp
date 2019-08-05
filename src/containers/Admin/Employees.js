import React, { Component } from 'react';
import axios from 'axios'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import {connect} from 'react-redux';
import findEmployees from '../../redux/actions/employeeActions'

class Employees extends Component {

  state = {
    amount: 0,
    type: "Toki",
    size: "Small",
    products: [ ],
    columns: [{
      dataField: 'name',
      text: 'Name'
    },
    {
      dataField: 'notes',
      text: 'Notes',
      sort: true
    }]
  }

  constructor(props) {
    super(props); 
  }

  componentDidMount() {
    
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

    const {
      findEmployees,
      match,
      history,
    } = this.props;

    findEmployees()
 console.log(" ******* handleNewEmp *******")
  }

  test = () => {
    axios.get("http://localhost:1337/message")
      .then(function (response) {
        console.log(response.data);

      })
      .catch(function (error) {
        console.log("An error has occurred.")

      });
  }



  render() {

const {employee} = this.props;
console.log(employee)

    return (
      <div className="container">

        <br /><br /><br />
        <h4>Employees</h4>

        <form>

          <BootstrapTable
            striped
            hover
            keyField='id'
            data={employee}
            columns={this.state.columns}
            rowEvents={this.rowEvents}
          />


        </form>

        <button id="b1" class="btn btn-secondary" type="button" onClick={this.handleNewEmp}>Create new</button>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    employee:state.employee
  };
};

/*
  const wrapper = connect(mapStateToProps);
  const component = wrapper (Employees)
  export default component;
*/
 
const mapDispatchToProps = {
  findEmployees,
};  

export default (connect(mapStateToProps, mapDispatchToProps))(Employees);
