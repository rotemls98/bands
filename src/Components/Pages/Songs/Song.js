import React, {Component} from 'react';
import YouTubePlayer from 'react-player/lib/players/YouTube';
import '../Img/img.css';

export default class Song extends Component {

    constructor(props) {
        super(props);

        this.handleLoaded = this.handleLoaded.bind(this);
        this.state = {
            loadedClassName: 'hidden'
        };
    }

    handleLoaded() {
        this.setState({loadedClassName: ''})
    }

    render() {
        const {url} = this.props;
        const {loadedClassName} = this.state;
        return <YouTubePlayer
            url={url}
            controls
            className={`${this.props.className} ${loadedClassName}`}
            onReady={this.handleLoaded}
        />
    }
}