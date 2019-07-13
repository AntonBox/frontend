import FansHolder from './FansHolder';
import  App  from './App';
import { Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';


class Main extends Component{

  render(){
    return (
      <Switch>
        <Route exact path='/' component={App}/>
        <Route path='/fans' component={FansHolder}/>
      </Switch>
    )
  }
}

export default Main;
