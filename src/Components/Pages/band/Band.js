import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SongsList from '../Songs/SongsList';
import Img from "../Img/Img";
import './band.css';

const propTypes = {
    band: PropTypes.object.isRequired
}


export default class Band extends Component {
    render() {
        const {band} = this.props;
        const isLoaded = band.songs;
        return (
            <div className="band-container">
                <Img alt="band" className='band-image' src={band.image}/>
                <h1>{band.name}</h1>
                {
                    isLoaded ? <SongsList songs={band.songs}/>
                        :
                        <div>loading</div>
                }

            </div>
        )
    }
}

Band.propTypes = propTypes;

