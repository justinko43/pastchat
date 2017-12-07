import React, { Component } from 'react';
import { render } from 'react-dom';
import moment from 'moment';


class Comment extends Component {
    millisToMinutesAndSeconds(millis){
        console.log(millis);
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }
    render() {
        const timeStamp = this.millisToMinutesAndSeconds(this.props.timestamp);
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