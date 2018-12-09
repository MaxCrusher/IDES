import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Button } from "react-bootstrap"
import DeleteUser from './Component/DeleteUser/'
import Main from './Component/Main/'
import NewUser from './Component/NewUser/'

class App extends Component {
  
  render() {
    return (
      <Router>
        <div className="App">
          <div className='App_block'>
          <header className='header'>
            <Link to="/">
              <Button bsStyle="success">Home</Button>
            </Link>
            <Link to="/deleteuser">
              <Button bsStyle="success">Delete User</Button>
            </Link>
            <Link to="/newuser">
              <Button bsStyle="success">New User</Button>
            </Link>
          </header>
          
          <Route path="/" exact render={() => <Main/>}/>
          <Route path="/deleteuser" exact render={() => <DeleteUser/>}/>
          <Route path="/newuser" exact render={() => <NewUser/>}/>
        </div>
        </div>
      </Router>
    );
  }
}

export default App;
