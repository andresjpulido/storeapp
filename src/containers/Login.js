import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";


const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class Login extends Component {
  constructor(props) {
    super(props);
    localStorage.setItem('session', 0);
    this.state = { ...INITIAL_STATE };
  }

  handleSubmit = (e) => {
    const { email, password } = this.state;
    e.preventDefault();
    localStorage.setItem('session', 1);
    this.props.history.push('/home')


  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';

    return (
      <div className="vertical-center">
      <div className="container ">
      <br /><br />
      <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-sm">
                    <h2 className="text-primary text-center ">Sign in</h2>
                </div>
            </div>


            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label for="email">Username</label>
                <input type="email" value={email} name="email" onChange={this.onChange}
                className="form-control" id="email"
                placeholder="email@example.com" />
              </div>
              <div className="form-group">
                <label for="password">Password</label>
                <input type="password" className="form-control" id="password" name="password"
                placeholder="Password" value={password} onChange={this.onChange} />
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                <label className="form-check-label" for="dropdownCheck">
                  Remember me
                </label>
              </div>
              <br />
              <button type="submit" className="btn btn-primary float-right">Login</button>
              <br />
              {error && <p className="text-danger">{error.message}</p>}
            </form>



</div>
</div>
          <br /><br /><br /><br />

      </div></div>
    );
  }
}



export default Login;
