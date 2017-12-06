import React, { Component } from 'react';
import { render } from 'react-dom';


class Comment extends Component {
    render() {
        return (
            <div className="user-comment">
                {this.props.name} <br/> {this.props.comment}
            </div> 
        )
    }
}

export default Comment;