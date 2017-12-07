import React, { Component } from 'react';
import { render } from 'react-dom';
import RecentVid from './RecentVid';
import placeholders from './placeholders.js'


class Recent extends Component {
    constructor(props) {
        super(props);
        this.renderPlaceholders = this.renderPlaceholders.bind(this);
    }

    renderPlaceholders() {
        return placeholders.map((placeholder, idx) => {
            return (
                <RecentVid key={idx} title={placeholder.title} src={placeholder.src} channel={placeholder.channel} />
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

export default Recent;