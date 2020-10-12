import React, { PureComponent } from "react";
import "./Movie.css";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  Movie: {
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      transform: "translateY(-10px)",
    },
    "& img": {
      width: "100%",
      maxWidth: " 250px",
      maxHeight: "400px",
      minHeight: "400px",
      height: "auto",
      objectFit: "cover",
      borderRadius: "10px",
      display: "block",
      margin: "0 auto",
    },
    "& p": {
      textAlign: "center",
      fontSize: "1.5rem",
      letterSpacing: "2px",
      marginTop: "10px",
    },
  },
};

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
