import React, { Component } from 'react';
import { render } from 'react-dom';


class RecentVid extends Component {
    render() {
        return (
            <div>
                <div className="recent-inner">
                    <img src={this.props.src} className="recent-thumbnail bg-gr1"></img>
                    <div className="title-container margin-bottom">
                        <div className="h6 margin-right-m overflow-ellipses">{this.props.title}</div>
                        <div className="fw-600 xsmall">{this.props.channel}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RecentVid;