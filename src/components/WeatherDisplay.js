import React, { useState } from "react";
import { Box, TextField, Typography, Stack, Button, Grid } from "@mui/material";

const WeatherDisplay = () => {
  const timeArray = [
    "0700",
    "0800",
    "0900",
    "1000",
    "1100",
    "1200",
    "1300",
    "1400",
    "1500",
    "1600",
    "1700",
  ];
  // initializing the states

  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  // State to handle error
  const [error, setError] = useState(false);

  // Data useStates
  const [temp, setTemp] = useState([]);
  const [humidity, setHumidity] = useState([]);
  const [cloudCover, setCloudCover] = useState([]);
  const [windSpeed, setWindSpeed] = useState([]);

  // The function for fetching data from te API

  async function fetchData(latitude, longitude) {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relativehumidity_2m,cloudcover_mid,windspeed_120m&current_weather=true`
    );

    const data = await response.json();
    // Capturing undefined error using if statement

    if (data.hourly === undefined || data.hourly === null) {
      setError(true);
      setHumidity([]);
      setTemp([]);
      setCloudCover([]);
      setWindSpeed([]);
      // clear the inputs
      setLatitude("");
      setLongitude("");
    } else {
      // start deconstructing, by spread array method
      const temp = [...data.hourly.temperature_2m.slice(6, 17)];
      const humidity = [...data.hourly.relativehumidity_2m.slice(6, 17)];
      const cloudCover = [...data.hourly.cloudcover_mid.slice(6, 17)];
      const windSpeed = [...data.hourly.windspeed_120m.slice(6, 17)];

      // setting the states to this data
      setCloudCover(cloudCover);
      setHumidity(humidity);
      setTemp(temp);
      setWindSpeed(windSpeed);
      setError(false);
      // clear the inputs
      setLatitude("");
      setLongitude("");
    }
  }

  // A function to handle the button click action
  const handleSearch = () => {
    fetchData(latitude, longitude);
  };

  return (
    <Box display="flex" flexDirection="column">
      <Box
        display="flex"
        justifyContent="center"
        sx={{
          mb: { xs: 1, lg: 4 },
          textAlign: "center",
        }}
      >
        <Typography variant="h6">
          What is the latitude and longitude of your location?
        </Typography>
      </Box>
      <Box
        sx={{
          width: { sm: "90%", lg: "70%" },
        }}
        id="text-fields"
        margin="auto"
        mb="2rem"
      >
        <Stack spacing={2}>
          <TextField
            fullWidth
            id="latitude"
            label="Latitude"
            variant="filled"
            type="float"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
            required
          />
          <TextField
            fullWidth
            id="Longitude"
            label="Longitude"
            variant="filled"
            type="float"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            required
          />

          {/* Creating the button */}
          <Button
            variant="contained"
            size="large"
            sx={{
              textTransform: "none",
              fontWeight: "bold",
              fontSize: { sm: "1rem", lg: "1.5rem" },
              width: { lg: "50%" },
              margin: "auto",
            }}
            onClick={handleSearch}
          >
            Check Weather
          </Button>
        </Stack>
      </Box>
      {/* Displaying the data starts here */}

      <Box
        id="data-output"
        pl="2rem"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        mb="1rem"
      >
        {/* First grid containing time */}
        <Grid container spacing={2} mb="1rem">
          <Grid item xs={1}>
            <Typography style={{ fontWeight: 600 }}>Time(hrs)</Typography>
          </Grid>
          {timeArray.map((time) => (
            <Grid item xs={1}>
              <Typography style={{ fontWeight: 600 }}>{time}</Typography>
            </Grid>
          ))}
        </Grid>
        {/* This is the error statement */}
        {error && (
          <Typography variant="h5" color="#DF4343">
            Ohh no! ensure you have correct values.
          </Typography>
        )}
        {/* Second Grid containing Temperature data. */}

        <Grid container spacing={2} mb="1.5rem">
          <Grid item xs={1}>
            <Typography variant="h7" style={{ fontWeight: 600 }}>
              Temp.{" "}
            </Typography>
          </Grid>
          {temp.map((item) => (
            <Grid item xs={1}>
              {item}
            </Grid>
          ))}
        </Grid>

        {/* Third Grid Containing Humidity data */}
        <Grid container spacing={2} mb="1.5rem">
          <Grid item xs={1}>
            <Typography variant="h7" style={{ fontWeight: 600 }}>
              Humidity{" "}
            </Typography>
          </Grid>
          {humidity.map((item) => (
            <Grid item xs={1}>
              {item}
            </Grid>
          ))}
        </Grid>
        {/* Fourth Grid containing Wind data. */}
        <Grid container spacing={2} mb="1.5rem">
          <Grid item xs={1}>
            <Typography variant="h7" style={{ fontWeight: 600 }}>
              Wind{" "}
            </Typography>
          </Grid>
          {windSpeed.map((item) => (
            <Grid item xs={1}>
              {item}
            </Grid>
          ))}
        </Grid>

        {/* Fifth Grid containing Clouds data. */}
        <Grid container spacing={2} mb="1.5rem">
          <Grid item xs={1}>
            <Typography variant="h7" style={{ fontWeight: 600 }}>
              Clouds{" "}
            </Typography>
          </Grid>
          {cloudCover.map((item) => (
            <Grid item xs={1}>
              {item}
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
export default WeatherDisplay;
