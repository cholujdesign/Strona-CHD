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
import Nav from "./nav";
// import Blog from './src/Blog'
import { Helmet } from "react-helmet";
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
    fontFamily: ["Luxurious Roman"],
    textTransform: "none",
    button: {
      textTransform: "none",
    },
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
            Architekci
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
          <Button href="/Lokale" color="secondary" variant="contained">
            <Typography
              component="h5"
              variant="h5"
              align="center"
              color="white"
            >
              Lokale na sprzedaż
            </Typography>
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
                Architekci
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
                <Button
                  variant="contained"
                  href="/Lokale"
                  color="secondary"
                >
                  Lokale na sprzedaż
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
                    CHD Architekci

                  </Typography>
                
                  <Typography
                    variant="h6"
                    align="justify"
                    color="white"
                    paragraph
                  >
                    Prowadzimy pracownię architektoniczną i architektury wnętrz od ponad 25 lat. Nasz zespół ma doświadczenie w projektach od małych do średnich, nadzorze autorskim oraz kierowaniu budową. Od dekady zaczęliśmy łączyć projektowanie przestrzenne z projektowaniem form przemysłowych. W zależności od typu i rozmiaru projektu  współpracujemy z zespołem utalentowanych i doświadczonych projektantów oraz innych zaufanych specjalistów.
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
                </Box>
              </Grid>



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
                    Czym się zajmujemy?
                  </Typography>
                  
                  <Typography
                    variant="h6"
                    align="justify"
                    color="white"
                    paragraph
                  >
                    Oferujemy usługi w zakresie projektowania architektektonicznego,
                    architektury wnętrz, animacji, wizualizacji, modelowania 3D
                    oraz projektowania stron internetowych. Współpracujemy z
                    deweloperami i inwestorami w pełnym zakresie, pozwala to na
                    zaprezentowanie klientowi spoistego designu począwszy od projektu
                    proponowanego budynku, poprzez sposób jego zaprezentowania klientowi uzywając takich środków przekazu jak: animacje, VR, modele, wizualizacje;
                    kończąc na projekcie i obsłudze strony internetowej. <br/> Często wykonujemy modele 3D, wizualizacje i animacje na zlecenie.
                    <br/><br/>
                  </Typography>
                  <Grid container spacing={4}>
          <Grid item key="1" xs={12} sm={6} md={6}>
            <Button variant="contained"  href="/architektura">
          
                 
                  
          
              
                  <Typography component="h1" variant="h6" color="white">
                    Architektura
                  </Typography>
              
            
            </Button>{" "}
          </Grid>
          <Grid item key="1" xs={12} sm={6} md={6}>
            <Button variant="contained" href="/wnetrza">
            
                  
                       
                  <Typography component="h6" variant="h6" color="white">
                    Wnętrza
                  </Typography>
              
              
            </Button>{" "}
          </Grid>
          <Grid item key="1" xs={12} sm={6} md={6}>
            <Button  variant="contained"  href="Inne">
             
                
            <Typography component="h6" variant="h6" color="white">
                    Inne usługi
                  </Typography>
                 
              
            </Button>{" "}
          </Grid>
          <Grid item key="1" xs={12} sm={6} md={6}>
            <Button variant="contained"  href="/Certyfikaty">
            
               
            <Typography component="h6" variant="h6" color="white">
                    Certyfikaty 
                  </Typography>
               
            </Button>{" "}
          </Grid>
        </Grid>
        <br/><br/><br/>
                  <Box
                    sx={{
                      backgroundImage: `url("/images/Daniel5.webp")`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: "20px",
                      alignItems: "center",
                      py: 5,
                      minHeight: "50vh",
                    }}
                  />
                </Box>
              </Grid>
             
              <Grid data-aos="zoom-in" item xs={12} sm={12} sx={{ pb: 5 }}>
                <Typography
                  component="h4"
                  variant="h4"
                  align="center"
                  color="white"
                  gutterBottom
                >
                  Nasze Manifesto
                </Typography>
                <Typography
                  variant="h6"
                  align="justify"
                  color="white"
                  paragraph
                >
                  Skupiamy się w pierwszej kolejności nad potrzebami i
                  oczekiwaniami naszych klientów, każdy projekt jest analizowany
                  indywidualnie.
                  <br />
                  Motywem przewodnim w naszej pracy jest oddziaływanie światła
                  naturalnego oraz sztucznego na kolorystykę, fakturę bryly
                  budynku, geometrię wnętrza oraz powiazanie projektu z naturą.
                  <br />
                  Duży nacisk kładziemy na percepcję użytkownika w projektowanym
                  obiekcie. Rozumiemy, że przestrzeń dośwadczana jest się
                  poprzez wiele zmysłów dzięki czemu zrwacamy również uwagę na
                  teksuturę, hałas i zapach.
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
                  Publikacje, Współpraca
                </Typography>
                <Typography
                  variant="h6"
                  align="justify"
                  color="white"
                  paragraph
                >
                  Nasza praca została nie tylko doceniona przez naszych
                  klientów, ale również przez prasę architektoniczną.
                  <br />
                  Wspólpracujemy z projektantami z Polski, USA i UK.
                  <br />
                  W zależności od skali i specyfikacji projektu powiększamy nasz
                  zespół, pozwala to nam na oferowanie wysokiej jakości usług.
                  <br />
                  {/* <a href="https://www.homify.nl/ideabooks/9077119/ontdek-een-simpele-keukentransformatie">
                    <Typography
                      variant="h6"
                      align="center"
                      color="white"
                      paragraph
                    >
                      link
                    </Typography>
                  </a> */}
                </Typography>
              </Grid>
            </Grid>
            <h1>Choluj Design</h1>
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
            <link rel="canonical" href="https://cholujdesign.com" />
          </Helmet>
        </div>
      </main>
    </ThemeProvider>
  );
}
