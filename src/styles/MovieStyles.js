const styles = {
  Movie: {
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      transform: "translateY(-10px)",
    },
    "& img": {
      width: "100%",
      maxWidth: " 250px",
      maxHeight: "400px",
      minHeight: "400px",
      height: "auto",
      objectFit: "cover",
      borderRadius: "10px",
      display: "block",
      margin: "0 auto",
    },
    "& p": {
      textAlign: "center",
      fontSize: "1.5rem",
      letterSpacing: "2px",
      marginTop: "10px",
    },
  },
};

export default styles;
