import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import './comp.css';


const styles = {
    root: {
      backgroundColor: "yellow",
    },
  };
  

class Comp extends Component {

    render() {
        const { classes } = this.props;
        return(
            <div>
                <h1 className={classes.root}>CSS IN JS</h1>
                <h1 className="comp"> HELLO </h1>
            </div>
        )
    }
}

// export default Comp;
export default withStyles(styles)(Comp);