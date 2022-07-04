import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { Stack, Typography } from "@mui/material";
import "./navbar.css";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      spacing={{ xs: 4, lg: 4 }}
      mb="2rem"
      pl={{ xs: 0, lg: "2rem" }}
      className="home"
    >
      <Typography variant="h4" color="#052c80">
        <FontAwesomeIcon icon={faCloud} /> CyWeather
      </Typography>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        spacing={{ xs: 1, sm: 2, lg: 4 }}
        alignItems="center"
        className="second-stack"
      >
        <Typography
          variant="h5"
          color="#031c52"
          borderBottom="3px solid #960505"
          mouse="pointer"
        >
          Home
        </Typography>
        <Typography
          variant="h7"
          color="#04266e"
          fontWeight={400}
          className="how-weather"
        >
          How is the weather?
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Navbar;
