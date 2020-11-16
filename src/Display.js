import React, { Component } from "react";
import Youtube from "react-youtube";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import styles from "./styles/DisplayStyles";

class Display extends Component {
  render() {
    const opts = {
      height: "550",
      width: "100%",
      playerVars: {
        autoplay: 0,
      },
    };
    const { classes, movie, reset } = this.props;
    return (
      <div className={classes.Display}>
        <Youtube opts={opts} videoId={movie.video} />
        <div className={classes.DisplayText}>
          <h3>{movie.title}</h3>
          <p>
            {movie.year} &#183; {movie.runtimeStr}
          </p>
          <p className={classes.DisplayPlot}>{movie.plot}</p>
          <Button variant='contained' color='secondary' onClick={() => reset()}>
            Done
          </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Display);
