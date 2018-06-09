import React, {Component, Fragment} from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from "@material-ui/core/Divider";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import "./bandsList.css";


const propTypes = {
    bands: PropTypes.array.isRequired,
    match: PropTypes.object.isRequired
}

export default class BandsList extends Component {


    render() {
        const {match} = this.props;
        return <List disablePadding className="bands-list">
            {this.props.bands.map(band => (
                <Fragment key={band.id}>
                    <Link className="item-link" to={`${match.url}/${band.id}`}>
                        <ListItem button>
                            <ListItemText primary={band.name}/>
                        </ListItem>
                    </Link>
                    <Divider/>
                </Fragment>
            ))}
        </List>
    }
}

//

BandsList.propTypes = propTypes;

