import React, { Component } from 'react';
import { render } from 'react-dom';
import RecentVid from './RecentVid';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/actions';
import placeholders from './placeholders.js'


const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        setLink: actions.setLink,
        fetchComments: actions.fetchComments
    }, dispatch)
}

class Recent extends Component {
    constructor(props) {
        super(props);
        this.renderPlaceholders = this.renderPlaceholders.bind(this);
    }

    renderPlaceholders() {
        return placeholders.map((placeholder, idx) => {
            return (
                <RecentVid href={placeholder.vidId} key={idx} title={placeholder.title} src={placeholder.src} channel={placeholder.channel} />
            );
        });
    }

    render() {
        return (
            <div id="recent-container" className="bg-white">
                <div className="fw-600 h4 margin-top margin-bottom text-center">Recent Videos</div>
                { this.renderPlaceholders() }
            </div> 
        )
    }
}

export default connect(mapDispatchToProps)(Recent);