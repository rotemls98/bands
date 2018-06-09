import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import "./songList.css";

const propTypes = {
    songs: PropTypes.array.isRequired
}

export default class SongsList extends Component {

    render() {
        const { songs } = this.props;
        return (
            <div className={"songs-container"}>
                {
                    songs.map((song, i) => (
                        <ExpansionPanel key={i} className={"song-expansion"}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                                <div>{song.name}</div>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <div>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae cupiditate fuga ipsum
                                    ratione ut. Eveniet excepturi explicabo ipsa quidem quisquam sequi sint unde voluptates.
                                    Amet aut corporis culpa cumque cupiditate debitis deleniti doloremque doloribus ducimus
                                    explicabo fuga hic id impedit in ipsa ipsam iste laudantium libero.
                                </div>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>)
                    )
                }
            </div>
        )
    }
}

SongsList.prototypes = propTypes;