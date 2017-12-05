import React, { Component } from 'react';
import { render } from 'react-dom';

class MessageInput extends Component {
    render() {
        return (
            <div id="inputContainer">
                <form>
                    <input type="text" component="input" placeholder="Message Here"/>
                    <button component="input" type="submit"> submit </button>
                </form>
            </div>
        )
    }
}

export default MessageInput;