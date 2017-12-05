import React, { Component } from 'react';
import { render } from 'react-dom';
import MessageBox from './MessageBox';
import ChatBox from './ChatBox';

class Chat extends Component {
    render() {
        return (
            <div>
                <div>
                    <MessageBox/>
                </div>
                <div>
                    <ChatBox/>
                </div>
            </div> 
        )
    }
}

export default Chat;