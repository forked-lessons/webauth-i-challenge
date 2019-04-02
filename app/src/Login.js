import React, { Component } from 'react';
import axios from 'axios';
class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }
  inputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  loginUser = () => {
    axios
      .post('http://localhost:5000/api/auth/login', {
        username: this.state.username,
        password: this.state.password
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={this.state.username}
            onChange={e => this.inputChange(e)}
          />
          <input
            type="password"
            placeholder="password"
            value={this.state.password}
            onChange={e => this.inputChange(e)}
            name="password"
          />
          <button
            onClick={e => {
              e.preventDefault();
              this.loginUser();
            }}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
