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

export default styles;
