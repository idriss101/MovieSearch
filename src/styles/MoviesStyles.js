import sizes from "./sizes";

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
    paddingBottom: "50px",
    "& h2": {
      textTransform: "uppercase",
      fontSize: "2rem",
      marginLeft: "60px",
    },
    [sizes.down("md")]: {
      justifyContent: "center",
      alignItems: "center",
    },
  },
  MoviesList: {
    display: "grid",
    width: "40%",
    gridTemplateColumns: "repeat(3, 40%)",
    alignSelf: "center",
    gridGap: "1%",
    [sizes.down("lg")]: {
      gridTemplateColumns: "repeat(2, 50%)",
      gridGap: "0",
    },
    [sizes.down("md")]: {
      gridTemplateColumns: "repeat(2, 50%)",
      width: "100%",
      gridGap: "0",
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "repeat(1, 100%)",
      width: "100%",
      gridGap: "1%",
    },
  },
  MoviesDetails: {
    width: "40%",
    maxHeight: "50%",
  },
  MoviesContainer: {},
};

export default styles;
