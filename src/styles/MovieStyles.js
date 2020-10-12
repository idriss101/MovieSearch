import sizes from "./sizes";

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
      [sizes.down("xs")]: {
        maxWidth: "250px",
        minHeight: "200px",
      },
    },
    "& p": {
      textAlign: "center",
      fontSize: "1.5rem",
      letterSpacing: "2px",
      marginTop: "10px",
    },
    [sizes.down("xs")]: {
      pointerEvents: "none",
    },
  },
};

export default styles;
