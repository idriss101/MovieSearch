import React, { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
export default class Header extends Component {
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
      <div className='Header'>
        <div className='Header-container'>
          <h1 onClick={() => this.props.resetMovies()}>
            <i className='fas fa-film'></i>
            Movie Search
          </h1>

          <form onSubmit={this.handleSubmit}>
            <input
              type='text'
              name='search'
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
