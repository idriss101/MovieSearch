import React, { Component } from "react";
import "./Movie.css";
export default class Movie extends Component {
  state = {
    clicked: false,
  };

  handleClick = () => {
    this.props.show(this.props.id);
  };

  clicked = () => {
    this.setState({
      clicked: true,
    });
  };
  render() {
    return (
      <div
        className={`Movie ${this.state.clicked && "selected"}`}
        onClick={this.clicked}
      >
        <div onClick={this.handleClick}>
          <img src={this.props.img} alt='' />
          <p>{this.props.title}</p>
        </div>
      </div>
    );
  }
}
