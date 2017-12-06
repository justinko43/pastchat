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
        postMessage: actions.postMessage,
        getMessage: actions.getMessage,
        receiveMessage: actions.receiveMessage,
    }, dispatch)
}

class ChatContainer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <div>
                    <MessageBox/>
                </div>
                <div>
                    <MessageInput/>
                </div>
            </div> 
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);