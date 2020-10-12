import React, { Component } from "react";
import axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import Movie from "./Movie";
import "./Movies.css";
import Header from "./Header";
import Display from "./Display";
import { v4 as uuidv4 } from "uuid";

const styles = {
  MoviesDisplay: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    width: "100%",
    height: "100vh",
    margin: "0 auto",
    background: `radial-gradient(
      circle,
      rgba(32, 50, 67, 1) 0%,
      rgba(32, 34, 38, 1) 95%
    )`,
    color: "white",
    overflow: "scroll",
    paddingTop: "3rem",
    paddingBottom: "15rem",
    "& h2": {
      textTransform: "uppercase",
      fontSize: "2rem",
      marginLeft: "60px",
    },
  },
  MoviesList: {
    display: "grid",
    width: "40%",
    gridTemplateColumns: "repeat(3, 30%)",
    alignItems: "center",
    gridGap: "2%",
  },
  MoviesDetails: {
    width: "40%",
    maxHeight: "50%",
  },
  MoviesContainer: {},
};

class Movies extends Component {
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
  resetMovies = () => {
    let MOVIEURL = "https://imdb-api.com/en/API/MostPopularMovies/k_1b5ua5kx";
    axios.get(MOVIEURL).then((res) => {
      let data = res.data.items.slice(0, 12);
      this.setState((st) => ({
        movies: data,
        selectedMovie: "",
      }));
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
      <div>
        <Header submit={this.handleSubmit} resetMovies={this.resetMovies} />
        <div className={this.props.classes.MoviesDisplay}>
          <div className={this.props.classes.MoviesList}>{movies}</div>
          <div className={this.props.classes.MoviesDetails}>
            {this.state.selectedMovie && (
              <Display movie={this.state.selectedMovie} />
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(Movies);
