import React, { Component } from 'react';

class Form extends Component {

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.state = {username: ''};
    }

    handleSubmit(event){
        let username = this.state.username;
        event.preventDefault();
        return this.props.sendUsername(username);
    }

    handleInput(event){
        this.setState({username: event.target.value});
    }

    render(){
    return (
        <div className="Form">
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleInput}/>
            </form>
        </div>
    );
    }
}

export default Form;
