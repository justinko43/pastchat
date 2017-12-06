import React, { Component } from 'react';
import { render } from 'react-dom';
import YouTube from 'react-youtube';


class Video extends Component {
    render() {
        console.log(this.props.rep);
        return (
            <div id="player">
                Video should be here
                {/* <iframe id="videoplayer" type="text/html" width="640" height="390" frameBorder="0"
                src={`http://www.youtube.com/embed/${this.props.url}?enablejsapi=1&origin=http://example.com`}
                frameBorder="0">
                </iframe> */}
                <ReactPlayer ref={this.props.rep} id="hello" url={`http://www.youtube.com/embed/${this.props.url}?enablejsapi=1&origin=http://example.com`} playing />

            </div> 
        )
    }
}

export default Video;