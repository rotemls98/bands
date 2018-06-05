import React, {Component} from "react";
import Proptypes from 'prop-types';
import Band from "./Band";
import { bandsData } from "../../../BandsData";


// imagine this from server
const band = (id) => {return bandsData[id - 1]} ;

const propTypes = {
    match : Proptypes.object.isRequired
}

export default class BandContainer extends Component {
    state = {
        band : {}
    }

    // invisible request
    componentDidMount() {
        console.log(this.props.match);
        const myband = band(this.props.match.params.id);
        this.setState({ band : myband});
    }

    render() {
        return (
                <Band band={this.state.band}/>
        )
    }
}

BandContainer.proptypes = propTypes;