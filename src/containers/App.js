import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import Form from '../components/Form';
import sendUsernameAction from "../actions/actionSendUsername";
import { Link } from 'react-router-dom';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Form sendUsername={this.props.sendUsernameFunction}/>
        <Link to='/fans'>Fans</Link>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {username: state.sendUsername.username}
}

function mapDispatchToProps(dispatch){
  return {
    sendUsernameFunction: username => dispatch(sendUsernameAction(username))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
