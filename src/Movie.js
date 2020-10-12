import React, { PureComponent } from "react";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/MovieStyles";

class Movie extends PureComponent {
  state = {
    clicked: false,
  };

  handleClick = () => {
    this.props.show(this.props.id);
  };

  clicked = (e) => {
    e.preventDefault();
    this.setState({
      clicked: true,
    });
  };
  render() {
    return (
      <div className={this.props.classes.Movie} onClick={this.clicked}>
        <div onClick={this.handleClick}>
          <img src={this.props.img} alt='' />
          <p>{this.props.title}</p>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(Movie);
