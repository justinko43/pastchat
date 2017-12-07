import React, { Component } from 'react';
import { render } from 'react-dom';
import Comment from './Comment';


class MessageBox extends Component {

    render() {
        return (
            <div id="message-box">
                {this.props.comments.sort((a, b) => a.timestamp - b.timestamp).map((element, i) => {
                    return (
                        <Comment
                            comment={element.message}
                            timestamp={element.timestamp}
                            name={element.name}
                            avatar={element.avatar}
                            key={i} />
                    )
                })}
            </div> 
        )
    }
}

export default MessageBox;