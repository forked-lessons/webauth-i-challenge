import React, { Component } from 'react';
import axios from 'axios';

class UserList extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }
  componentDidMount() {
    axios
      .get('http://localhost:5000/api/users')
      .then(res => {
        console.log(res);
        this.setState({ users: res.data });
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: err });
      });
  }
  render() {
    console.log('rendering App', this.state.users);

    return (
      <div>
        {this.state.users.map(user => (
          <h4 user={user}>{user.username}</h4>
        ))}
      </div>
    );
  }
}

export default UserList;
