import { Box, Paper, Typography } from "@mui/material";
// import NavbarIcon from "../assets/avatar.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import {
  flex,
  iconGi,
  iconIns,
  iconLi,
  iconTwi,
  iconYou,
  iconsBtn,
} from "../components/styles/globalStyle";
// import { red } from "@mui/material/colors";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <Box
      sx={{
        mt: 5,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexWrap: "wrap",

        "& > :not(style)": {
          m: 1,
          width: 300,
          height: 400,
        },
      }}
    >
      <Paper sx={flex} elevation={24}>
        {/* <img src={NavbarIcon} alt="img" /> */}
        <Typography sx={{ fontSize: "2rem" }}>Mustafa O2gur</Typography>
        <Typography sx={{ fontSize: "2rem" }}>Our Team 💪</Typography>
        <Box sx={iconsBtn}>
          <Link target="blank" to="https://www.linkedin.com/in/mustafa-ozgur-/">
            <LinkedInIcon sx={iconLi} />
          </Link>
          <Link target="blank" to="https://github.com/mustafao2gur">
            <GitHubIcon sx={iconGi} />
          </Link>
          <Link target="blank" to="https://www.instagram.com/">
            {" "}
            <InstagramIcon sx={iconIns} />
          </Link>
          <Link target="blank" to="https://twitter.com/">
            <TwitterIcon sx={iconTwi} />
          </Link>
          <Link target="blank" to="https://www.youtube.com">
            <YouTubeIcon sx={iconYou} />
          </Link>
        </Box>
      </Paper>
    </Box>
  );
};

export default About;
