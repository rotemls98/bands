import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import YouTubePlayer from 'react-player/lib/players/YouTube'
import Song from "./Song";

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
                        <ExpansionPanel key={i} className="song-expansion">
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                                <div>{song.name}</div>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                {/*<YouTubePlayer className="player" controls url={song.url}/>*/}
                                <Song className="player" url={song.url}/>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>)
                    )
                }
            </div>
        )
    }
}

SongsList.prototypes = propTypes;