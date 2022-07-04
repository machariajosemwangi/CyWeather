import React from "react";

import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      sx={{
        background: "#3F4E4F",
      }}
      color="#fff"
      p="3rem"
    >
      <Typography style={{ textAlign: "center", fontSize: "14px" }}>
        Ⓒ 2022 Macharia Mwangi. All rights reserved. <br />
        Thank you!
      </Typography>
    </Box>
  );
};

export default Footer;
