import React, { Component } from 'react';

class Dashboard extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push('/student')
  }

  render() {
    
    return (
      <div className="container">
      <br /><br /><br />

        <div class="jumbotron">

        <h1>Welcome XXXXX!</h1>
          <p class="lead">Your last date login was 03/02/2019.</p>

         <h1>Notifications</h1>
          <p class="lead">There are <span class="badge">5</span> pending orders.</p>
          <p class="lead">There are <span class="badge">2</span> pending supplies.</p>
        </div>

      </div>
    );
  }
}

export default Dashboard;
