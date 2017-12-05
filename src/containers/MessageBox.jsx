import React, { Component } from 'react';
import { render } from 'react-dom';
import Comments from './Comments';


class MessageBox extends Component {
    render() {
        return (
            <div>
                <Comments/>
            </div> 
        )
    }
}

export default MessageBox;