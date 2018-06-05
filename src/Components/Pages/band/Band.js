import React, {Component} from 'react';
import PropTypes from 'prop-types';


const propTypes = {
    band : PropTypes.object.isRequired
}



export default class Band extends Component {


    render() {
        const {band} = this.props;
        return (
            <h1>{band.name}</h1>

        )
    }
}

Band.propTypes = propTypes;

