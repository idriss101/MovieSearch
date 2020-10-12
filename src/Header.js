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
              name='search'
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
