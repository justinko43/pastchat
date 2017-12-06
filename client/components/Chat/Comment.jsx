import React, { Component } from 'react';
import { render } from 'react-dom';


class Comment extends Component {
    millisToMinutesAndSeconds(millis){
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }
    render() {
        return (
            <div>
                {this.props.name} {this.millisToMinutesAndSeconds(this.props.timestamp)} 
                <br/> 
                {this.props.comment}
            </div> 
        )
    }
}

export default Comment;