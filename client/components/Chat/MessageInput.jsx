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

    render() {
        return (
            <div id="input-container">
                <form>  
                    <input onChange={(event) => this.setState({input: event.target.value})} value={this.state.input} className="margin-m" type="text" component="input" placeholder="Message Here"/>
                    <button component="input" type="submit" onClick={this.handleSubmit.bind(this)}> submit </button>
                </form>
            </div>
        )
    }
}

export default MessageInput;