import { Box,  Typography } from '@mui/material'
import { grey } from '@mui/material/colors';
import React from 'react'

const Footer = () => {
  const styles = {
    width: "100%",
    height: "10vh",
    padding: "5px",
    color: "black",
    bgcolor: "gray",
    textAlign: "center",
    marginTop: "20px",
    color:"white"
  };
  return (
    <Box sx={styles} >
      <Typography sx={{p:1}}>Developed by FS Team</Typography>
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