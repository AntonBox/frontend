import React, { Component } from 'react';

class Form extends Component {

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.state = {username: ''};
    }

    // find way to get input value
    handleSubmit(event){
        event.preventDefault();
        return this.props.sendUsername(this.state.username);
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