import React, { Component } from 'react';
import { render } from 'react-dom';

class MessageInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.postComment(this.state.input);
        this.setState({ input: '' });
    }

    renderInput() {
        if (this.props.user.name) {
            return (
                <form>
                    <input onChange={(event) => this.setState({ input: event.target.value })} value={this.state.input} className="margin-m" type="text" placeholder="Message Here" />
                    <button type="submit" onClick={this.handleSubmit.bind(this)}>submit</button>
                </form>
            );
        } else {
            return <div id="login-error"><strong>You must be logged in to comment.</strong></div>;
        }
    }

    render() {
        return (
            <div id="message-input">
                {this.renderInput.call(this)}
            </div>
        )
    }
}

export default MessageInput;