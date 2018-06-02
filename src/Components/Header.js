import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs/Tabs';
import {HomeTab, BandsTab, AboutTab} from "./AppTabs";
import './header.css';


const getValue = () => {
    const url = window.location.href;
    if (url.includes("bands")) {
        return 1;
    }
    else if (url.includes("about")) {
        return 2;
    }
    else {
        return 0;
    }
}

export default class Header extends Component {
    state = {
        value: getValue(),
    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    render() {
        return (
            <AppBar position="static" color="primary">
                <Tabs
                    value={this.state.value}
                    onChange={this.handleChange}
                    fullWidth
                    centered
                >
                    <HomeTab/>
                    <BandsTab/>
                    <AboutTab/>
                </Tabs>
            </AppBar>
        )
    }
}

