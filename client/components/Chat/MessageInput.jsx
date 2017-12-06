import React, { Component } from 'react';
import { render } from 'react-dom';

class MessageInput extends Component {
    render() {
        return (
            <div id="input-container">
                <form>  
                    <input className="margin-m" type="text" component="input" placeholder="Message Here"/>
                    <button component="input" type="submit"> submit </button>
                </form>
            </div>
        )
    }
}

export default MessageInput;