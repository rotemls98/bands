import React, {Component, Fragment} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs/Tabs';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {HomeTab, BandsTab, AboutTab} from "./AppTabs";
import Home from "./Pages/Home";
import About from "./Pages/About";
import './header.css';


const Bands = () => (
    <div> bands list</div>
)


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
            <Router>
                <Fragment>
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
                    <Route exact path="/" component={Home}/>
                    <Route path="/bands" component={Bands}/>
                    <Route path="/about" component={About}/>
                </Fragment>
            </Router>
        )
    }
}

