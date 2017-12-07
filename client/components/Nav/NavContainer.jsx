import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/actions';



const mapStateToProps = store => ({
    url: store.video.url
})

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        setLink: actions.setLink,
        fetchComments: actions.fetchComments
    }, dispatch)
}


class NavContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        };
        this.onSave = this.onSave.bind(this);
    }

    onSave(event) {
        event.preventDefault();
        this.props.setLink(event.target.querySelector('input').value);
        if (event.target.querySelector('input').value) {
            const url = event.target.querySelector('input').value;
            this.props.setLink(url);
            this.props.fetchComments(url);
            event.target.reset();
        }
    }

    componentWillMount() {
        fetch('/auth', {credentials: 'include'}).then(response => response.json())
            .then(user => this.setState({ user }));
    }

    googleLogin() {
        if (this.state.user.name) {
            return <span>Logged in as <strong>{this.state.user.name.replace(/"/g, '')}</strong> | <a href='/logout'>Logout</a></span>;
        } else {
            return <a id="oAuth-container" href="/auth/google">Sign in with Google</a>;
        } 
    }

    render() {
        console.log(this.state.user);
        return (
            <div id="nav-container">
                <div>
                    <form onSubmit={this.onSave}>
                        <input type="text" component="input" placeholder="URL HERE"/>
                        <input type="submit"/>
                    </form>
                </div>
                <div>
                    {this.googleLogin()}
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavContainer);