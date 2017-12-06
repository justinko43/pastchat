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
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        // postMessage: actions.postMessage,
        // getMessage: actions.getMessage,
        postComment: actions.postComment,
        fetchComments: actions.fetchComments,
    }, dispatch)
}

class ChatContainer extends Component {
    constructor(props) {
        super(props);
    }
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
        console.log(this.props);
        return (
            <div>
                <div>
                    <MessageBox comments={this.props.comments}/>
                </div>
                <div>
                    <MessageInput postComment={}/>
                </div>
            </div> 
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);