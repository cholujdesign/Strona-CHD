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
import { Helmet } from "react-helmet";
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
    fontFamily: ["Gotu"].join(","),
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
      <Nav />
      <main>
        {/* desktop */}
        <CustomView condition={browserName === "Chrome"}>
          <div className="player-wrapper">
            <ReactPlayer
              ref={videoParentRef}
              playsinline={true}
              className="react-player"
              url="https://youtu.be/cCwqpy8ra7w"
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
          <Button variant="contained" href="/Specjalizacje">
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
          <br /> <br />
                {/* <Button href="/Certyfikaty" color="secondary" variant="contained">
                  <Typography
                    component="h3"
                    variant="h3"
                    align="center"
                    color="white"
                  >
                    We make energy certificates!
                  </Typography>
                </Button> */}
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
              <br />
              <br />
              <br />
              <br />
              <Button variant="contained" href="/Specjalizacje">
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
          <Container sx={{ py: 0 }} maxWidth="md">
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
                    Architecture, interiors, CGI
                  </Typography>
                  <Box
                    sx={{
                      backgroundImage: `url("/images/nyc1.jpeg")`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: "20px",
                      alignItems: "center",
                      py: 15,
                      minHeight: "50vh",
                    }}
                  />
                  <Typography
                    variant="h6"
                    align="justify"
                    color="white"
                    paragraph
                  >
                    We offer architectural design services,
                     interior architecture, animation, visualization, 3D modeling
                     and website design. we work with
                     developers to the full extent, this allows for
                     presenting a coherent design to the client, starting from
                     the proposed building, through the way it is presented
                     ending with the website design.
                  </Typography>
                </Box>
              </Grid>
              <Grid data-aos="zoom-in" item xs={12} sm={12} sx={{ pb: 5 }}>
                <Typography
                  variant="h6"
                  align="justify"
                  color="white"
                  paragraph
                >
              We have extensive technical knowledge acquired in many areas
                   construction sites. We like to experiment with new technologies.
                   Sometimes we create prototypes of lamps, furniture and solutions ourselves
                   construction. Our team members have
                   experience in running your own business, which translates
                   to better understand private sector clients.
                </Typography>

                <Box
                  sx={{
                    backgroundImage: `url("/images/nyc2.jpeg")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "20px",
                    alignItems: "center",
                    py: 5,
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
                <Typography
                  variant="h6"
                  align="justify"
                  color="white"
                  paragraph
                >
              We focus on the needs first and foremost
                   expectations of our clients, each project is analyzed
                   individually.
                   <br />
                   The leitmotif of our work is the impact of light
                   natural and artificial on the colors and texture of the body
                   building, interior geometry and the project's connection with nature.
                   <br />
                   We place great emphasis on the user's perception in the design
                   object. We understand that space is experienced
                   through many senses, thanks to which we also pay attention to
                   texture, noise and smell.
                </Typography>
              </Grid>
              <Grid data-aos="zoom-out" item xs={12} sm={12} sx={{ pb: 11 }}>
                <Box
                  sx={{
                    backgroundImage: `url("/images/brighton.png")`,
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
                 <Typography
                   variant="h6"
                   align="justify"
                   color="white"
                   paragraph
                 >
                   Our work was not only appreciated by our people
                   clients, but also by the architectural press.
                   <br />
                   We cooperate with designers from Poland, the USA and the UK.
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
            </Grid>
          </Container>
          <Helmet>
            <title>Choluj Design</title>
            <meta name="description" content="CHD pracownia architektoniczna" />
            <meta
              property="og:image"
              content="https://images.unsplash.com/photo-1617360547704-3da8b5363369?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            />
            <meta
              name="keywords"
              content="Choluj Design, Rynek Glowny w Krakowie, architektura, wnetrza, certyfikaty energetyczne, budynki, projekty, strony wwww, projekty koncepcyjne, projekty wykonawcze"
            />
            <meta name="author" content="Choluj Design" />
            <link rel="canonical" href="https://cholujdesign.com/CHD" />
          </Helmet>
        </div>
      </main>
    </ThemeProvider>
  );
}
