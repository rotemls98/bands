import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SongsList from '../Songs/SongsList';
import './band.css';

const propTypes = {
    band: PropTypes.object.isRequired
}


export default class Band extends Component {

    constructor(props) {
        super(props);

        this.handleLoad = this.handleLoad.bind(this);
        this.state = {
            imgLoaded : false
        }
    }

    handleLoad() {
        this.setState({imgLoaded : true});
    }


    render() {
        const {imgLoaded} = this.state;
        const hidden = imgLoaded ?  '' : 'hidden';
        const {band} = this.props;
        const isLoaded = band.songs;
        return (
            <div className={"band-container"}>
                <img alt="band" className={`band-image ${hidden}`} src={band.image} onLoad={this.handleLoad}/>
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

