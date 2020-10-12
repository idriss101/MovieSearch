const styles = {
  Display: {
    boxShadow: "-1px 34px 25px -6px rgba(0, 0, 0, 0.75)",
    display: "inline-block",
    backgroundColor: "black",
    minHeight: "100%",
    minWidth: "100%",
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
