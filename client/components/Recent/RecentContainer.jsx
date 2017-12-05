import React, { Component } from 'react';
import { render } from 'react-dom';
import RecentVid from './RecentVid';


class Recent extends Component {
    render() {
        return (
            <div>
                <h2>Recently Commented</h2>
                <RecentVid/>
            </div> 
        )
    }
}

export default Recent;