import React, { useEffect } from "react";
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
// import Iframe from "react-iframe";

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

const cards = [
  {
    head: "Prawo budowlane",
    text: "pare slow o prawie budowlanym",
    pic: "https://images.unsplash.com/photo-1595844730298-b960ff98fee0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    head: "Prawo budowlane",
    text: "pare slow o prawie budowlanym",
    pic: "https://images.unsplash.com/photo-1595844730298-b960ff98fee0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    head: "Prawo budowlane",
    text: "pare slow o prawie budowlanym",
    pic: "https://images.unsplash.com/photo-1595844730298-b960ff98fee0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    head: "Prawo budowlane",
    text: "pare slow o prawie budowlanym",
    pic: "https://images.unsplash.com/photo-1595844730298-b960ff98fee0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    head: "Prawo budowlane",
    text: "pare slow o prawie budowlanym",
    pic: "https://images.unsplash.com/photo-1595844730298-b960ff98fee0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
];

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
      main: "#1c3e5e",
      dark: "#001834",
      contrastText: "#fff",
    },
  },
  
    typography: {
      fontFamily: [
        'Aboreto',
   
      ].join(','),
    },
});

export default function Album() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <main>
        {/* desktop */}

        <div className="player-wrapper">
       
              <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=PeBJaU_vzUw-U"
            width="100%"
            height="100%"
            muted={true}
            playsinline={true}
            playing={true}
            loop={true}
            controls={false}
          />
          </div>
            <div  className="destopText"
            data-aos="zoom-in" >
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
                Architekci
              </Typography>
             
          
                <Button href="tel:+48509446074" variant="contained">
                  +48 509 446 704
                </Button>
                <Button
                  href="mailto:cholujdesign@gmail.com"
                  variant="contained"
                >
                  cholujdesign@gmail.com
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
              backgroundImage: `url(https://drive.google.com/uc?export=view&id=10oapHpS9XICtTtT21Uehn90kbCga7-eL)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "95vh",
              alignItems: "center",
              py: 35,
              display: { md:"none", lg: "none", xl: "none" },
            }}
          >
            <Container data-aos="zoom-in" maxWidth="xs">
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
                <Button
                  href="mailto:cholujdesign@gmail.com"
                  variant="contained"
                >
                  cholujdesign@gmail.com
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
          <Container sx={{ py: 8 }} maxWidth="lg">
            <Grid container spacing={5}>
              <Grid item xs={12} sm={6} sx={{ pb: 10 }}></Grid>
              <Grid item xs={12} sm={6} sx={{ pb: 10 }}></Grid>

              <Grid data-aos="zoom-in" item xs={12} sm={12} sx={{ pb: 20 }}>
                <Typography
                  component="h4"
                  variant="h4"
                  align="left"
                  color="white"
                  gutterBottom
                >
                  Architektura, wnętrza, CGI
                </Typography>
                <Typography variant="h6" align="left" color="white" paragraph>
                  Oferujemy usługi w zakresie projektowania architektury,
                  architektury wnętrz, animacji, wizualizacji, modelowania 3D
                  oraz projektowania stron internetowych. Współpracujemy z
                  deweloperami w pełnym zakresie, pozwala to na zaprezentowanie
                  klientowi spoistego designu począwszy od proponowanego
                  budynku, poprzez sposób jego zaprezentowania kończąc na
                  projekcie strony.
                </Typography>
              </Grid>
              <Grid data-aos="zoom-out" item xs={12} sm={12} sx={{ pb: 20 }}>
                <Box
                  sx={{
                    backgroundImage: `url(https://images.unsplash.com/photo-1612886649464-4a888608eace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "20px",
                    alignItems: "center",
                    py: 15,
                  }}
                />
              </Grid>

              <Grid data-aos="zoom-in" item xs={12} sm={12} sx={{ pb: 20 }}>
                <Typography
                 component="h4"
                 variant="h4"
                  align="center"
                  color="white"
                  gutterBottom
                >
                  Nasze Manifesto
                </Typography>
                <Typography variant="h6" align="left" color="white" paragraph>
                  Skupiamy się w pierwszej kolejności nad potrzebami i
                  oczekiwaniami naszych klientów, każdy projekt jest analizowany
                  indywidualnie. 
                  <br/>
                  Motywem przewodnim w naszej pracy jest
                  oddziaływanie światła naturalnego oraz sztucznego na
                  kolorystykę, fakturę bryly budynku, geometrię wnętrza oraz
                  powiazanie projektu z naturą. 
                  <br/>
                  Duzy nacisk kładziemy na
                  percepcję użytkownika w projektowanym obiekcie. 
                  Projektowanie przestrzenne doświadcza się poprzez wicej niż tylko jeden zmysł. 
                </Typography>
              </Grid>
              <Grid data-aos="zoom-out" item xs={12} sm={12} sx={{ pb: 10 }}>
                <Box
                  sx={{
                    backgroundImage: `url(https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "20px",
                    alignItems: "center",
                    py: 15,
                  }}
                />
              </Grid>

              <Grid data-aos="zoom-in" item xs={12} sm={12} sx={{ pb: 10 }}>
                <Typography
                 component="h4"
                 variant="h4"
                  align="center"
                  color="white"
                  gutterBottom
                >
                  Publikacje, Współpraca
                </Typography>
                <Typography variant="h6" align="left" color="white" paragraph>
                  Nasza praca została nie tylko doceniona przez naszych
                  klientów, ale również przez prasę architektoniczną.
                  <br/> 
                  Wspólpracujemy z projektantami z Polski, Anglii, USA, Holandii.
                  <br/> 
                  W zależności od skali i specyfikacji projektu powiększamy nasz zespół, pozwala to nam na 
                  oferowanie wysokiej jakości usług.
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
              <Grid data-aos="zoom-out" item xs={12} sm={12} sx={{ pb: 10 }}>
                <Box
                  sx={{
                    backgroundImage: `url(data:image/png;base64,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)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "20px",
                    alignItems: "center",
                    py: 15,
                  }}
                />
              </Grid>
            </Grid>
          </Container>
        
      </main>
    </ThemeProvider>
  );
}
