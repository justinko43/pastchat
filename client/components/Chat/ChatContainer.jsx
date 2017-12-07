import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import MessageBox from './MessageBox';
import MessageInput from './MessageInput';
import * as actions from '../../actions/actions';

const mapStateToProps = store => ({
    comments: store.chat.comments,
    url: store.chat.url,
    time: store.video.time,
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        // postMessage: actions.postMessage,
        // getMessage: actions.getMessage,
        fetchComments: actions.fetchComments,
    }, dispatch)
}

class ChatContainer extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount(){
        this.props.fetchComments(this.props.url);
    }
    onSubmit(value) {
        fetch(`/comments`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                comment: value,
                timestamp: 7777,
                videoId: this.props.url
            }),
        }).then((res) => {
            this.props.fetchComments(this.props.url); 
        });
    }

    handleArray(time, comments, array, index) {
        if (comments[index].timestamp === time) {
            array.push(comments[index++]);
            if (array.length > 5) array.shift();
        }
        return array;
    } 

    render() {
        console.log(this.props.time);
        return (
            <div id="chat-container" className="bg-white">
<<<<<<< HEAD
                <MessageBox comments={this.props.comments.filter((obj) => obj.timestamp <= this.props.time)}/>
                <MessageInput postComment={this.onSubmit}/>
=======
                <MessageBox comments={this.props.comments}/>
                <MessageInput postComment={this.onSubmit.bind(this)}/>
>>>>>>> 94a8a9cff294c031cc5db3329386df7de80adbc0
            </div> 
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);