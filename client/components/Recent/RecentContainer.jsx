import React, { Component } from 'react';
import { render } from 'react-dom';
import RecentVid from './RecentVid';


class Recent extends Component {
    render() {
        return (
            <div id="recent-container" className="bg-gr3">
                <h3 id="recent-video-title">Recent Videos</h3>
                <RecentVid/>
            </div> 
        )
    }
}

export default Recent;