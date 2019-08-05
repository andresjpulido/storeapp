import React, { Component } from 'react';

class Inventory extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push('/student')
  }

  render() {
    return (
      <div class="container">
        <br /><br /><br />
        <h4>Inventory</h4>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Type</th>
              <th scope="col">Size</th>
              <th scope="col">Amount</th>              
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>drops</td>
              <td>Small</td>
              <td>10</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Inventory;
