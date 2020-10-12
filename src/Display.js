import React, { Component } from "react";
import Youtube from "react-youtube";
import "./Display.css";
import { withStyles } from "@material-ui/core/styles";
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
    return (
      <div className={this.props.classes.Display}>
        <Youtube opts={opts} videoId={this.props.movie.video} />
        <div className={this.props.classes.DisplayText}>
          <h3>{this.props.movie.title}</h3>
          <p>
            {this.props.movie.year} &#183; {this.props.movie.runtimeStr}
          </p>
          <p className={this.props.classes.DisplayPlot}>
            {this.props.movie.plot}
          </p>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Display);
