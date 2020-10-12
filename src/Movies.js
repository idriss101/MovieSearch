import React, { Component } from "react";
import axios from "axios";
import Movie from "./Movie";
import "./Movies.css";
import Header from "./Header";
import Display from "./Display";
import { v4 as uuidv4 } from "uuid";

export default class Movies extends Component {
  state = {
    movies: [],
    selectedMovie: "",
    loading: true,
  };
  componentDidMount() {
    let MOVIEURL = "https://imdb-api.com/en/API/MostPopularMovies/k_1b5ua5kx";
    axios.get(MOVIEURL).then((res) => {
      let data = res.data.items.slice(0, 12);
      this.setState((st) => ({
        movies: data,
      }));
    });
  }
  handleSubmit = (e, search) => {
    e.preventDefault();
    let MOVIEURL = `https://imdb-api.com/en/API/SearchTitle/k_1b5ua5kx/${search}`;
    this.setState({
      movies: [],
      selectedMovie: "",
    });
    axios.get(MOVIEURL).then((res) => {
      console.log(res);
      let data = res.data.results.slice(0, 12);
      data.map((movie) =>
        this.setState((st) => ({
          movies: [...st.movies, movie],
        }))
      );
    });
  };

  showInfo = (id) => {
    let MOVIEURL = `https://imdb-api.com/en/API/Title/k_1b5ua5kx/${id}`;
    let TRAILERURL = `https://imdb-api.com/en/API/YouTubeTrailer/k_1b5ua5kx/${id}`;
    axios.get(MOVIEURL).then((res) => {
      this.setState({
        selectedMovie: res.data,
      });
      axios.get(TRAILERURL).then((res) => {
        this.setState((st) => ({
          selectedMovie: { ...st.selectedMovie, video: res.data.videoId },
        }));
      });
    });
    console.log(this.state.selectedMovie);
  };

  render() {
    const movies = this.state.movies.map((movie) => (
      <Movie
        title={movie.title}
        key={uuidv4()}
        img={movie.image}
        id={movie.id}
        show={this.showInfo}
      />
    ));
    return (
      <div className='Movies'>
        <Header submit={this.handleSubmit} />
        <div className='Movies-display'>
          <div className='Movies-list'>{movies}</div>
          <div className='Movies-details'>
            {this.state.selectedMovie && (
              <Display movie={this.state.selectedMovie} />
            )}
          </div>
        </div>
      </div>
    );
  }
}
