import React, { Component } from 'react';

class ExtraHours extends Component {



  render() {
    return (
      <div className="container">

        <br /><br /><br />
        <h4>Extra Hours</h4>
        <table class="table">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Hours</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>28/01/2018</td>
            <td>2,5</td>
          </tr>
          <tr>
            <td>29/01/2018</td>
            <td>3,5</td>
          </tr>
          <tr>
            <td>30/01/2018</td>
            <td>2,5</td>
          </tr>
          <tr>
            <td>31/01/2018</td>
            <td>2,5</td>
          </tr>
          <tr>
            <td>01/02/2019</td>
            <td>2</td>
          </tr>
          <tr>
            <th scope="row">Total</th>
            <td>12</td>
          </tr>
        </tbody>
      </table>

      </div>
    );
  }
}

export default ExtraHours;
