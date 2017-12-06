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
    }, dispatch)
}


class NavContainer extends Component {
    constructor(props) {
        super(props);
    }

    onSave(event) {
        event.preventDefault();
        console.log(event.target.querySelector('input').value);
        console.log(this.props);
        // this.props.setLink(event.target.querySelector('input').value);
        // if (event.target.querySelector('input').value) {
        //     this.props.setLink(event.target.querySelector('input').value);
        //     event.target.reset();
        // }
    }

    render() {
        console.log('this');
        console.log(this.props);        
        return (
            <div id="nav-container">
                <div>
                    <form onSubmit={this.onSave}>
                        <input type="text" component="input" placeholder="URL HERE"/>
                        <input type="submit"/>
                    </form>
                </div>
                <div>
                    <a id="oAuth-container" href="/auth/google">Sign in with Google</a>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavContainer);