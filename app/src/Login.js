import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;
