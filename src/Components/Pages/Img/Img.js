import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './img.css';

const propTypes = {
    className: PropTypes.string,
    alt: PropTypes.string.isRequired
}

export default class Img extends Component {

    constructor(props) {
        super(props);

        this.handleLoaded = this.handleLoaded.bind(this);
        this.state = {
            loadedClassName : 'hidden'
        }
    }

    handleLoaded() {
        this.setState({loadedClassName : ''});
    }

    render() {
        const { loadedClassName } = this.state;
        const className = loadedClassName === '' ? this.props.className : loadedClassName
        return <img src={this.props.src} alt={this.props.alt} className={className} onLoad={this.handleLoaded}/>
    }
}

Img.prototypes = propTypes;