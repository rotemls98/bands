import React, { Component } from "react";
import Img from "./Img/Img";
import './home.css';

export default class Home extends Component {


    render() {
        return <div>
            <h1>Home Page</h1>
            <div> welcome to bands site</div>
            <Img alt="home" className="home-image" src="https://images.unsplash.com/photo-1478562853135-c3c9e3ef7905"/>
        </div>
    }
}