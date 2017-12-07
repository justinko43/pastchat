import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import MessageBox from './MessageBox';
import MessageInput from './MessageInput';
import * as actions from '../../actions/actions';

const mapStateToProps = store => ({
    comments: store.chat.comments,
<<<<<<< HEAD
    url: store.chat.url,
=======
    url: store.video.url,
    time: store.video.time,
>>>>>>> 12d8edb546e22d84fc03065b47964ce5eb697ed1
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
<<<<<<< HEAD
        // postMessage: actions.postMessage,
        // getMessage: actions.getMessage,
        postComment: actions.postComment,
=======
>>>>>>> 12d8edb546e22d84fc03065b47964ce5eb697ed1
        fetchComments: actions.fetchComments,
    }, dispatch)
}

class ChatContainer extends Component {
    constructor(props) {
        super(props);
    }
<<<<<<< HEAD
    componentWillMount(){
        this.props.fetchComments(`Q5Am4Xc1axA`);
    }
    onSubmit(event) {
        event.preventDefault();
        if (event.target.querySelector('input').value) {
            this.props.postComment(event.target.querySelector('input').value);
            event.target.reset();
        }
    }
    render() {
        return (
            <div id='chat-container' className="bg-gr3">
                <div id="message-container">
                    <MessageBox comments={this.props.comments}/>
                </div>
                <div>
                    <MessageInput postComment={this.onSubmit}/>
                </div>
=======
    componentDidMount(){
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
                timestamp: this.props.time,
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
        return (
            <div id="chat-container" className="bg-white">
                <MessageBox comments={this.props.comments.filter((obj) => obj.timestamp <= this.props.time)}/>
                <MessageInput postComment={this.onSubmit.bind(this)}/>
>>>>>>> 12d8edb546e22d84fc03065b47964ce5eb697ed1
            </div> 
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);