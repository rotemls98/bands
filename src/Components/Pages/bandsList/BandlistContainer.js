import React, {Component} from 'react';
import BandsList from "./BandsList";
import PropTypes from "prop-types";
import { bandsData } from "../../../BandsData";


// lets imagine this come from the server
const bands = bandsData;

const propTypes = {
    match : PropTypes.object.isRequired
}

export default class BandlistContainer extends Component {
    state = {
        bands: []
    }

    // invisible server request
    componentDidMount() {
        this.setState({bands: bands});
    }

    render() {
        const { bands } = this.state;
        const { match } = this.props;
        return (
            <BandsList bands={bands} match={match}/>
        )
    }
}

BandlistContainer.propTypes = propTypes;



