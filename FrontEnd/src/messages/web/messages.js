/**
 * Created by Orion on 3/17/2018.
 */

import React, { Component } from 'react';
import Message from "./message";
import Container from '../containers/messages';

class Messages extends Component{

    render(){
        const createMessage = id => {
            return(
                <div key={id} >
                    <Message id={id}/>
                </div>
            )
        };
        return(
            <div className="messages">
                { this.props.messages.map( createMessage) }
            </div>
        );
    }
}

export default Container(Messages)
