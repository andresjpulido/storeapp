import React, { Component } from 'react';
import axios from 'axios'

class NewEA extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push('/student')
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
    return (
      <div className="container">

        <br /><br /><br />
        <h4>New Extra Hour</h4>

        <form>

          <div class="form-group">
            <label for="dateInput">Date</label>
            <input type="date" class="form-control" id="dateInput" placeholder="" />
          </div>
          <div class="form-group">
            <label for="amountInput">Amount</label>
            <input type="text" class="form-control" id="amountInput" placeholder="" />
          </div>
          <div class="form-group">
            <label for="activitiesInput">Activities</label>
            <textarea class="form-control" id="activitiesInput" placeholder="" />
          </div>

        </form>
        <button type="button" onClick={this.test} className="btn btn-primary float-right">Save</button>
      </div>
    );
  }
}

export default NewEA;
