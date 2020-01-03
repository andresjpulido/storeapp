import React, { Component, store } from 'react';
import fetchAuthAction from '../api/fetchAuth';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import signIn from '../redux/actions/authAction';

const INITIAL_STATE = {
  username: '',
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
    const { username, password } = this.state;
    e.preventDefault();
    this.props.signIn(username, password)

    const user = this.props.user;
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {

    let er = this.props.error;
console.log("this.props.error " + er + " - " + this.state.error)

    let user = this.props.user;
    if (user && user.token) {
      console.log(user.token)
      localStorage.setItem('session', user.token);
      this.props.history.push('/home')

    }
    const { username, password, error, user1 } = this.state;

    const isInvalid = password === '' || username === '';

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
                  <label for="username">Username</label>
                  <input type="text" value={username} name="username" onChange={this.onChange}
                    className="form-control" id="email"
                    placeholder="username" />
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
                {er && <p className="text-danger">{er.message}</p>}
              </form>

            </div>
          </div>
          <br /><br /><br /><br />

        </div></div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.authReducer.error,
    employees: state.employeeReducer.employees,
    pending: state.pending,
    user: state.authReducer.user
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchAuth: fetchAuthAction,
  signIn: signIn
}, dispatch)

export default (connect(mapStateToProps, mapDispatchToProps))(Login);
