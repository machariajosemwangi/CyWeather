import React from "react";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import WeatherDisplay from "./components/WeatherDisplay";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Box
      sx={{
        width: { lg: "80%" },
        margin: "auto",
        bgcolor: "#F0F0F0",
      }}
    >
      <Navbar />
      <WeatherDisplay />
      <Footer />
    </Box>
  );
};

export default App;
