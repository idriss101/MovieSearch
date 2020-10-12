import React, { Component } from "react";
import Youtube from "react-youtube";
import "./Display.css";
export default class Display extends Component {
  render() {
    const opts = {
      height: "550",
      width: "100%",
      playerVars: {
        autoplay: 0,
      },
    };
    return (
      <div className='Display'>
        <Youtube opts={opts} videoId={this.props.movie.video} />
        <div className='Display-text'>
          <h3>{this.props.movie.title}</h3>
          <div className='Display-text-sub'>
            <p>
              {this.props.movie.year} &#183; {this.props.movie.runtimeStr}
            </p>
          </div>
          <p className='Display-plot'>{this.props.movie.plot}</p>
        </div>
      </div>
    );
  }
}
