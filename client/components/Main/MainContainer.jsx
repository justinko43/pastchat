import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import Summary from './Summary';
import ReactPlayer from 'react-player';

const mapStateToProps = store => ({
    url: store.video.url,
    title: store.video.title,
    description: store.video.description,
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        fetchVideo: actions.fetchVideo,
        setTime: actions.setTime,
    }, dispatch)
}

class MainContainer extends Component {
    constructor(props){
        super(props);
    }

    componentWillMount(){
        this.props.fetchVideo(`https://www.youtube.com/watch?v=${this.props.url}`);
    }

    componentDidUpdate(){
        this.props.fetchVideo(`https://www.youtube.com/watch?v=${this.props.url}`);        
    }

    _onReady(played, loaded) {
        this.props.setTime(played);
    }
    
    render() {    
        return (
            <div id = 'main-container'>
                <div id = 'video-container' className="margin-top-xl">
                    <ReactPlayer controls={true} url={`https://www.youtube.com/watch?v=${this.props.url}`} onProgress={this.props.setTime}/>
                    <div id="summary-container" className="margin-xl">
                        <Summary title={this.props.title} description={this.props.description} />
                    </div>
                </div>
            </div>
        )
    }


}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);