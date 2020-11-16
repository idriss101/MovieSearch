import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/HeaderStyles";

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
    const { classes, resetMovies } = this.props;
    const { search } = this.state;
    return (
      <div className={classes.Header}>
        <div className={classes.HeaderContainer}>
          <h1 onClick={() => resetMovies()}>
            <i className='fas fa-film' style={{ marginRight: "10px" }}></i>
            Movie Search
          </h1>

          <form onSubmit={this.handleSubmit}>
            <input
              type='text'
              className={classes.Search}
              name='search'
              onChange={this.handleChange}
              value={search}
              placeholder=' Search for a movie'
            />
          </form>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
