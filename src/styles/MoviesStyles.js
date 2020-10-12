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

export default styles;
