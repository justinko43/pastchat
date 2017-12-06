import React, { Component } from 'react';
import { render } from 'react-dom';


class Video extends Component {
    render() {
        return (
            <div id="player">
                <iframe id="player" type="text/html" width="640" height="390" frameBorder="0"
                src={`http://www.youtube.com/embed/${this.props.url}?enablejsapi=1&origin=http://example.com`}
                frameBorder="0">
                </iframe>
            </div> 
        )
    }
}

export default Video;