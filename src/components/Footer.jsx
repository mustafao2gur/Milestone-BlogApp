import { Box,  Typography } from '@mui/material'
import { grey } from '@mui/material/colors';
import React from 'react'

const Footer = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        p: 2,
        position: "fixed",
        bottom: 0,
        bgcolor: grey["600"],
        width: "100%",
      }}
    >
      <Typography>Developed by FS Team</Typography>
      <Typography>
        Copyright ©{" "}
        <a href="https://www.linkedin.com/in/mustafa-ozgur-/" target="blank">
          mustafao2gur
        </a>{" "}
        2023
      </Typography>
    </Box>
  );
}

export default Footer