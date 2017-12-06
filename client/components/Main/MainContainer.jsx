import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import Video from './Video';
import Summary from './Summary';

const mapStateToProps = store => ({
    url: store.video.url,
    title: store.video.title,
    description: store.video.description,
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        fetchVideo: actions.fetchVideo,
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

    render() {
        return (
            <div id = 'main-container'>
                <div id = 'video-container'>
                    <Video url={this.props.url}/>
                </div>
                <div id = 'summary-container'>
                    <Summary title={this.props.title} description={this.props.description} />
                </div>
            </div> 
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);