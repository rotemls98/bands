import React from "react";
import {Link} from 'react-router-dom';
import Tab from '@material-ui/core/Tab/Tab';
import HomeIcon from '@material-ui/icons/Home';
import MusicNote from '@material-ui/icons/MusicNote';
import InfoIcon from '@material-ui/icons/Info';

export const HomeTab = (props) => (
    <Tab
        label="HOME"
        icon={<HomeIcon/>}
        component={Link}
        to="/"
        {...props}
    />

)

export const BandsTab = (props) => (
    <Tab label="BANDS"
         icon={<MusicNote/>}
         component={Link}
         to="/bands"
         {...props}
    />
)

export const AboutTab = (props) => (
    <Tab
        label="ABOUT"
        icon={<InfoIcon/>}
        component={Link}
        to="/about"
        {...props}
    />
)