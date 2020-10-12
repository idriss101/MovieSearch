import React, { Component } from "react";
import Youtube from "react-youtube";
import "./Display.css";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  Display: {
    boxShadow: "-1px 34px 25px -6px rgba(0, 0, 0, 0.75)",
    display: "inline-block",
    backgroundColor: "black",
    minHeight: "100%",
    minWidth: "100%",
  },
  DisplayText: {
    padding: "50px",
    marginTop: "-10px",
    "& h3": {
      fontSize: "2.3rem",
      marginBottom: "20px",
      "& p": {
        marginBottom: "20px",
        color: "gray",
        fontSize: "1.2rem",
      },
    },
  },
  DisplayPlot: {
    fontSize: "1.3rem",
    lineHeight: "1.7",
  },
};
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
