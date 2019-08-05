import React, { Component } from 'react';

class Orders extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push('/student')
  }

  render() {
    return (
      <div className="container">

        <br /><br /><br />
        <h4>Orders</h4>

        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product</th>
              <th scope="col">creation date</th>
              <th scope="col">Note</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>toki</td>
              <td>10/01/2019</td>
              <td>New</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Manaia</td>
              <td>10/01/2019</td>
              <td>New</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>toki</td>
              <td>10/01/2019</td>
              <td>Repair</td>
            </tr>
          </tbody>
        </table>

      </div>
    );
  }
}

export default Orders;
