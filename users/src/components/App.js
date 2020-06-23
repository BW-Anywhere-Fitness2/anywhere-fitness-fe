import React, { Component } from 'react';
import './App.css';
import Form from './Form'
import UserListView from './UserListView'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Anywhere Fitness</h1>
        <Form />
        <UserListView />
      </div>
    );
  }
}

export default App;