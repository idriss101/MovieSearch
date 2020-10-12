import sizes from "./sizes";

const styles = {
  Header: {
    height: "6%",
    width: "100%",
    boxShadow: "0px 15px 10px -15px #111",
    backgroundColor: "black",
    color: "white",
    padding: "10px",
  },
  HeaderContainer: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "0 auto",
    "& h1": {
      textTransform: "uppercase",
      cursor: "pointer",
      [sizes.down("xs")]: {
        fontSize: "1.5rem",
      },
    },
    [sizes.down("xs")]: {
      flexDirection: "column",
    },
  },
  Search: {
    border: "none",
    width: "100%",
    height: "40px",
    backgroundColor: "#262626",
    color: "white",
    textAlign: "center",
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
    [sizes.down("xs")]: {
      padding: "10px",
    },
  },
};

export default styles;
