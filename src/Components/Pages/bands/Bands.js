import React, {Component, Fragment} from "react";
import {Route} from "react-router-dom";
import BandsList from "../bandsList/BandsList";
import Band from "../band/Band";
import "./bands.css";


export default class Bands extends Component {

    render() {
        const {bands, match} = this.props;
        return (
            <div>
                <div></div>
                <div>
                    <h1>Bands list</h1>
                    <div className="list_container">
                        <BandsList bands={bands} match={match}/>
                    </div>
                </div>
                <div></div>
            </div>

        )
    }

}

