import React, {Component} from "react";
import BandlistContainer from "../bandsList/BandlistContainer";
import "./bands.css";


export default class Bands extends Component {

    render() {
        const {match} = this.props;
        return (
            <div className="bands-container">
                <div className="side left-side guitar">
                </div>
                <div className="list_container">
                    <h1>Bands list</h1>
                    <BandlistContainer match={match}/>
                </div>
                <div className="side right-side guitar"></div>
            </div>

        )
    }

}

