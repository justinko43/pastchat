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

    render() {
        return (
            <div id="nav-container" className="bg-white">
                <div className="nav-inner">
                    <div id="logo">
                        <img src="https://image.flaticon.com/icons/svg/31/31989.svg" />
                        <span className="h6 fw-600">TEAM DIAMOND</span>
                    </div>
                    <div className="form-container">
                        <form onSubmit={this.onSave}>
                            <input type="text" component="input" placeholder="Enter Video ID"/>
                            <input type="submit"/>
                        </form>
                    </div>
                    <a id="oAuth-container" href="/auth/google">Sign in with Google</a>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavContainer);