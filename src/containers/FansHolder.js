import React, { Component } from 'react';
import {connect} from 'react-redux';
import fetchFansAction from '../actions/actionFetchFans';

class FansHolder extends Component {
    componentDidMount() {
        this.props.fetchFansFunction(this.props.username);
      }

    render(){
        return (
            <div className="fansHolder">
                <ul>       
                {this.props.fans.map((fan, index)=> {
                    return (<li key={index}>
                    <div>Username: {fan.username}</div>
                    <div>Count: {fan.count}</div>
                    <div>Link: {fan.link}</div>
                    </li>)
                })}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        username: state.sendUsername.username,
        fans: state.fetchFans.fans
    }
  }

function mapDispatchToProps(dispatch){
    return{
        fetchFansFunction: username => {
            dispatch(fetchFansAction(username))
        }
    }
}  
  
export default connect(mapStateToProps, mapDispatchToProps)(FansHolder);