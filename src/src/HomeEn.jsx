import React, { useEffect, useRef, useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { grey, teal } from "@mui/material/colors";
import AOS from "aos";
import "aos/dist/aos.css";
import ReactPlayer from "react-player/lazy";
import Iframe from "react-iframe";
import { browserName, CustomView } from "react-device-detect";
import Nav from "./navEn";

// import Blog from './src/Blog'

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://cholujdesign.com/">
        CholujDesign S.C.
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme({
  palette: {
    primary: {
      light: "#ff7961",
      main: "#A97900",
      dark: "#ba000d",
      contrastText: "#fff",
    },
    secondary: {
      light: "#4b688b",
      main: "#1b222e",
      dark: "#001834",
      contrastText: "#fff",
    },
  },

  typography: {
    fontFamily: ["Aboreto"].join(","),
  },
});

export default function Album() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const videoParentRef = useRef();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Nav/>
      <main>
        {/* desktop */}
        <CustomView condition={browserName === "Chrome"}>
          <div className="player-wrapper">
            <ReactPlayer
              ref={videoParentRef}
              playsinline={true}
              className="react-player"
              url="https://www.youtube.com/watch?v=PeBJaU_vzUw-U"
              width="100%"
              height="100%"
              volume={0}
              muted={true}
              // playsInline={true}
              playing={true}
              loop={true}
              controls={false}
              pip={true}
              playbackRate={1}
            />
          </div>
        </CustomView>
        <img className="bgPic" width="100%" />
        <div className="destopText" data-aos="zoom-in">
          <Button variant="contained" href="/ONas">
            <Typography
              component="h3"
              variant="h3"
              align="center"
              color="white"
            >
              CHD
            </Typography>
          </Button>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="primary"
            gutterBottom
          >
            Architects
          </Typography>

          <Button href="tel:+48509446074" variant="contained">
            +48 509 446 704
          </Button>
          <Button href="mailto:biuro@cholujdesign.pl" variant="contained">
            biuro@cholujdesign.pl
          </Button>
          <Button
            variant="contained"
            href="https://goo.gl/maps/CfisLfUTRzM1tD6fA"
          >
            Rynek Główny 43
          </Button>
        </div>

        {/* mobile&tablet */}
        <div className="homeMobile">
          <Box
            sx={{
              // backgroundImage: `url(https://drive.google.com/uc?export=view&id=10oapHpS9XICtTtT21Uehn90kbCga7-eL)`,
              // backgroundSize: "cover",
              // backgroundPosition: "center",
              minHeight: "85vh",
              alignItems: "center",
              py: 0,
              display: { md: "none", lg: "none", xl: "none" },
            }}
          >
            <Container data-aos="zoom-in" maxWidth="xs">
            <br/><br/><br/><br/>
              <Button variant="contained" href="/ONas">
                <Typography
                  component="h3"
                  variant="h3"
                  align="center"
                  color="white"
                >
                  CHD
                </Typography>
              </Button>
              <Typography
                component="h3"
                variant="h3"
                align="center"
                color="primary"
                gutterBottom
              >
                Architects
              </Typography>
              {/* <Typography variant="h5" align="center" color="white" paragraph>
              adw.jan kowalski
              <br />
              adw.jan kowalski
            </Typography> */}
              <Stack
                sx={{ pt: 5 }}
                direction="column"
                spacing={2}
                justifyContent="center"
              >
                <Button href="tel:+48509446074" variant="contained">
                  +48 509 446 704
                </Button>
                <Button href="mailto:biuro@cholujdesign.pl" variant="contained">
                  biuro@cholujdesign.pl
                </Button>
                <Button
                  variant="contained"
                  href="https://goo.gl/maps/CfisLfUTRzM1tD6fA"
                >
                  Rynek Główny 43
                </Button>
              </Stack>
            </Container>
          </Box>
        </div>
        <div className="bgHome">
          <Container sx={{ py: 0 }} maxWidth="lg">
            <Grid container spacing={5}>
              <Grid item xs={12} sm={6} sx={{ pb: 10 }}></Grid>
              <Grid item xs={12} sm={6} sx={{ pb: 10 }}></Grid>

              <Grid data-aos="zoom-in" item xs={12} sm={12} sx={{ pb: 5 }}>
                <Box
                  sx={{
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "20px",
                    alignItems: "center",
                    py: 5,
                  }}
                >
                  <Typography
                    component="h4"
                    variant="h4"
                    align="left"
                    color="white"
                    gutterBottom
                  >
                    Architecture, Interiors, CGI
                  </Typography>
                  <Typography variant="h6" align="left" color="white" paragraph>
                  We offer services in the field of architecture design,
                     interior design, animation, visualization, 3D modeling
                     and website design. we work with
                     developers to the full extent, it allows
                     presenting the client with a cohesive design starting from
                     of the proposed building through the way it is presented
                     ending with the website design.
                  </Typography>
                </Box>
              </Grid>
              <Grid data-aos="zoom-out" item xs={12} sm={12} sx={{ pb: 5 }}>
                <Box
                  sx={{
                    backgroundImage: `url(https://svgsilh.com/svg/2409580-ffffff.svg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "20px",
                    alignItems: "center",
                    py: 15,
                    minHeight: "50vh",
                  }}
                />
              </Grid>

              <Grid data-aos="zoom-in" item xs={12} sm={12} sx={{ pb: 5 }}>
                <Typography
                  component="h4"
                  variant="h4"
                  align="center"
                  color="white"
                  gutterBottom
                >
                   Manifesto
                </Typography>
                <Typography variant="h6" align="left" color="white" paragraph>
                We focus first on the needs and
                   expectations of our customers, each project is analyzed
                   individually.
                   <br />
                   The leitmotif in our work is the impact of light
                   natural and artificial for colors and texture of the block
                   of the building, the geometry of the interior and the link between the design and nature.
                   <br />
                   We place great emphasis on the user's perception in the design
                   facility. Spatial design is experienced through
                   more than just one sense.
                </Typography>
              </Grid>
              <Grid data-aos="zoom-out" item xs={12} sm={12} sx={{ pb: 11 }}>
                <Box
                  sx={{
                    backgroundImage: `url(https://svgsilh.com/svg/1559455-ffffff.svg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "20px",
                    alignItems: "center",
                    py: 11,
                    minHeight: "50vh",
                  }}
                />
              </Grid>

              <Grid data-aos="zoom-in" item xs={12} sm={12} sx={{ pb: 11 }}>
                <Typography
                  component="h4"
                  variant="h4"
                  align="center"
                  color="white"
                  gutterBottom
                >
                 Publications, Cooperation
                 </Typography>
                 <Typography variant="h6" align="left" color="white" paragraph>
                   Our work has been appreciated not only by our own
                   customers, but also by the architectural press.
                   <br />
                   We cooperate with designers from Poland, England, USA,
                   the Netherlands.
                   <br />
                   Depending on the scale and specifications of the project, we enlarge ours
                   team, this allows us to offer high-quality services.
                   <br />
                  <a href="https://www.homify.nl/ideabooks/9077119/ontdek-een-simpele-keukentransformatie">
                    <Typography
                      variant="h6"
                      align="center"
                      color="white"
                      paragraph
                    >
                      link
                    </Typography>
                  </a>
                </Typography>
              </Grid>
              <Grid data-aos="zoom-out" item xs={12} sm={12} sx={{ pb: 11 }}>
                <Box
                  sx={{
                    backgroundImage: `url(https://svgsilh.com/svg/312122-ffffff.svg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "20px",
                    alignItems: "center",
                    py: 11,
                  }}
                />
              </Grid>
            </Grid>
          </Container>
        </div>
      </main>
    </ThemeProvider>
  );
}
