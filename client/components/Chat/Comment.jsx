import React, { Component } from 'react';
import { render } from 'react-dom';
import moment from 'moment';


class Comment extends Component {
    render() {
        const timeStamp = moment(this.props.timestamp).format('h:mm a');
        return (
            <div className="user-comment margin">
                <div>
                    <img src={this.props.avatar}/>
                </div>
                <div>
                    <span className="fw-600 margin-right-s">{this.props.name}</span>
                    <span className="text-gr2 xsmall">{timeStamp}</span>
                    <div>{this.props.comment}</div>
                </div>
            </div> 
        )
    }
}

export default Comment;