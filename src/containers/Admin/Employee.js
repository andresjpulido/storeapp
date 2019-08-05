import React, { Component } from 'react';
import {connect} from 'react-redux';

class Employee extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push('/student')
  }

  render() {
    return (
      <div className="container">

        <br /><br /><br />
        <h4>Employee</h4>

        <form>
          <div class="form-group">
            <label for="nameInput">FistName</label>
            <input type="text" class="form-control" id="nameInput" placeholder="Name" />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">LastName</label>
            <input type="text" class="form-control" id="record" placeholder="" />
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Movil</label>
            <input type="text" class="form-control" id="record" placeholder="" />
          </div>
          <div class="form-group">
            <label for="record">Email</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@domain.com" />
          </div>
          <div class="form-group">
            <label for="record">Address</label>
            <input type="text" class="form-control" id="record" placeholder="" />
          </div>
        </form>
        <button type="submit" className="btn btn-primary float-right">Save</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    employee: state.employee
  };
};

const wrapper = connect(mapStateToProps);
const component = wrapper(Employee)

export default (connect(mapStateToProps))(Employee);
