import React, { Component } from "react";
import "./Header.css";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  Header: {
    height: "6%",
    width: "100%",
    boxShadow: "0px 15px 10px -15px #111",
    backgroundColor: "black",
    color: "white",
    padding: "10px",
    "& img": {
      height: "60px",
      width: "60px",
      borderRadius: "100%",
      objectFit: "cover",
    },
  },
  HeaderContainer: {
    height: "100%",
    width: "80%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "0 auto",
    "& h1": {
      textTransform: "uppercase",
      cursor: "pointer",
    },
  },
  Search: {
    border: "none",
    width: "450px",
    height: "40px",
    backgroundColor: "#262626",
    color: "white",
    fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif`,
    fontSize: "1.5rem",
    padding: "25px",
    borderRadius: "10px",
    "&:focus": {
      outline: "none",
      border: "none",
    },
  },
};
class Header extends Component {
  state = {
    search: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    this.props.submit(e, this.state.search);
  };
  render() {
    return (
      <div className={this.props.classes.Header}>
        <div className={this.props.classes.HeaderContainer}>
          <h1 onClick={() => this.props.resetMovies()}>
            <i className='fas fa-film'></i>
            Movie Search
          </h1>

          <form onSubmit={this.handleSubmit}>
            <input
              type='text'
              className={this.props.classes.Search}
              id='search'
              onChange={this.handleChange}
              value={this.state.search}
              placeholder=' Search for a movie'
            />
          </form>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
