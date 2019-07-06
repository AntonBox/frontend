import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import Form from '../components/Form';
import { sendUsernameAction } from '../actions/actionUsername';

class App extends Component {
  render(){
    return (
      <div className="App">
          УРААААА
          <Form sendUsername={this.props.sendUsernameFunction}/>
          <h2>aaa{this.props.fans}</h2>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {fans: state.fetchFans.fans}
}

function mapDispatchToProps(dispatch){
  return{
    sendUsernameFunction: username => {
      dispatch(sendUsernameAction(username))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
