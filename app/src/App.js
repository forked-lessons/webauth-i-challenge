import React, { Component } from 'react';
import './App.css';
import Register from './Register';
import Login from './Login';
import axios from 'axios';
import UserList from './UserList';

class App extends Component {
  logoutUser = () => {
    axios
      .get(
        'http://localhost:5000/api/auth/logout'
        // username: this.state.username,
        // password: this.state.password
      )
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className="App">
        <h1>Login app online</h1>
        <h2>Login</h2>
        <Login />
        <h2>Register</h2>
        <Register />
        <button
          onClick={e => {
            e.preventDefault();
            this.logoutUser();
          }}
        >
          Logout
        </button>
        <UserList />
      </div>
    );
  }
}

export default App;
