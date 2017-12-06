import React, { Component } from 'react';
import { render } from 'react-dom';
import Comment from './Comment';


class MessageBox extends Component {
    render() {
        return (
            <div>
                {this.props.comments.map((element, i) => {
                    return (
                        <Comment 
                        comment={element.message}
                        timestamp={element.timestamp}
                        name={element.name}
                        avatar={element.avatar} 
                        key={i}/>
                    )
                })}
            </div> 
        )
    }
}

export default MessageBox;