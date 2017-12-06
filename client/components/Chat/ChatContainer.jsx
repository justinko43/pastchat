import React, { Component } from 'react';
import { render } from 'react-dom';
import MessageBox from './MessageBox';
import MessageInput from './MessageInput';

class ChatContainer extends Component {
    render() {
        return (
            <div id='chat-container' className="bg-gr3">
                <div id="message-container">
                    <MessageBox/>
                </div>
                <div>
                    <MessageInput/>
                </div>
            </div> 
        )
    }
}

export default ChatContainer;