import React, { Component } from 'react';
import './App.css';
import Register from './Register';
import Login from './Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Login app online</h1>
        <h2>Login</h2>
        <Login />
        <h2>Register</h2>
        <Register />
      </div>
    );
  }
}

export default App;
