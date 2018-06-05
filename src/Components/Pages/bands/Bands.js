import React, {Component} from "react";
import BandlistContainer from "../bandsList/BandlistContainer";
import "./bands.css";


export default class Bands extends Component {

    render() {
        const {match} = this.props;
        return (
            <div>
                {/*<h1>Bands list</h1>*/}
                <div></div>
                <div className="list_container">
                    <BandlistContainer match={match}/>
                </div>
                <div></div>
            </div>

        )
    }

}

