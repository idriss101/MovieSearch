import sizes from "./sizes";

const styles = {
  Display: {
    boxShadow: "-1px 34px 25px -6px rgba(0, 0, 0, 0.75)",
    display: "inline-block",
    backgroundColor: "black",
    minHeight: "100%",
    minWidth: "100%",
    [sizes.down("md")]: {
      zIndex: "25",
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      overflow: "scroll",
    },
    [sizes.down("xs")]: {
      zIndex: "25",
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      overflow: "scroll",
    },
  },
  DisplayText: {
    padding: "50px",
    marginTop: "-10px",
    "& h3": {
      fontSize: "2.3rem",
      marginBottom: "20px",
      "& p": {
        marginBottom: "20px",
        color: "gray",
        fontSize: "1.2rem",
      },
    },
  },
  DisplayPlot: {
    fontSize: "1.3rem",
    lineHeight: "1.7",
  },
};

export default styles;
