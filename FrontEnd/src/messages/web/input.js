/**
 * Created by Orion on 3/17/2018.
 */

import React, { Component } from 'react';
import Container from '../containers/input';

class Input extends Component{
    state = {
        message: ""
    };
    handleChange = event => {
        this.setState({
            message: event.target.value
        })
    };
    handleKeyPress = event => {
        switch(event.key){
            case 'Enter':
                this.props.sendMessage(this.state.message);
                this.setState({message: ""});
                break;
            default:
                break;
        }
    };
    render(){
        return(
            <div className="row">
                <input className="inputMessage" placeholder="Entrez votre message" type="text" value={this.state.message} onChange={this.handleChange} onKeyPress={this.handleKeyPress}/>
            </div>
        );
    }
}

export default Container(Input)
