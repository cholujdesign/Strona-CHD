import * as React from "react";
import "./App.css";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { grey, teal } from "@mui/material/colors";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./src/nav";
import Contact from "./src/Contact";
import Home from "./src/Home";
import Onas from "./src/Onas";
import Blog from "./src/ObszaryDzialanosci";
import Architecture from "./src/ArchitectureEn";
import Interiors from "./src/Interiors";
import Other from "./src/Other";
import Generalne from "./src/Generalne";
import DocumentMeta from "react-document-meta";
import Instructions from "./src/Instructions";
import ContactEn from "./src/ContactEn";
import HomeEn from "./src/HomeEn";
import OnasEn from "./src/OnasEn";
import BlogEn from "./src/ObszaryDzialalnosciEn.jsx";
import ArchitectureEn from "./src/ArchitectureEn";
import InteriorsEn from "./src/InteriorsEn";
import OtherEn from "./src/OtherEn";
import GeneralneEn from "./src/GeneralneEn";
import Cookies from "./src/cookies";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Certyfikaty from "./src/Certyfikaty"

import { Helmet } from "react-helmet";
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://cholujdesign.com/">
        CholujDesignS.C.
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
    fontFamily: ["Cardo"].join(","),
    textTransform: 'none',
    button: {
      textTransform: 'none'
    },
    h5:{
        textTransform: 'none'
    },
    h6:{
      textTransform: 'none'
  }
  },
});
const meta = {
  title: "CHD",
  description: "Architektura, wnetrza, wizualizacje, strony www, choluj design",
  canonical: "https://cholujdesign.com",
  meta: {
    charset: "utf-8",
    name: {
      keywords:
        "Projekty wnetrz, projekty wnętrz, interrior design, animacje, animations, wizualizacje, kraków, krakow, architektura, architecture, architekt, architect, dom, mieszkanie",
    },
  },
};
export default function App() {
  return (
    <DocumentMeta {...meta}>
      <ThemeProvider theme={theme}><CssBaseline />
        <div className="App"
        sx={{textTransform:'none'}}
        >
          

          <main>
            <BrowserRouter>
              <Routes>
                <Route path="/CHD" element={<Home />} />
                <Route path="/Kontakt" element={<Contact />} />
                <Route path="/architektura" element={<Architecture />} />
                <Route path="/wnetrza" element={<Interiors />} />
                <Route path="/inne" element={<Other />} />
                <Route path="/ONas" element={<Onas />} />
                <Route path="/Portfolio" element={<Blog />} />
                <Route path="/instructions" element={<Instructions />} />
                <Route path="/Generalne_Wykonawstwo" element={<Generalne />} />
                <Route path="/home" element={<HomeEn />} />
                <Route path="/Contact" element={<ContactEn />} />
                <Route path="/Architecture" element={<ArchitectureEn />} />
                <Route path="/Interiors" element={<InteriorsEn />} />
                <Route path="/Others" element={<OtherEn />} />
                <Route path="/About" element={<OnasEn />} />
                <Route path="/Offer" element={<BlogEn />} />
                <Route path="/Design&Build" element={<GeneralneEn />} />
                <Route path="/Certyfikaty" element={<Certyfikaty />} />
                <Route path="/:any" element={<Home />} />
                <Route path="/" element={<Home />} />
              </Routes>
            </BrowserRouter>
          </main>
          {/* Footer */}
          <Box sx={{ bgcolor: "secondary.main", p: 6 }} component="footer">
            <Typography variant="h6" align="center" gutterBottom color="white">
              CHD Architekci
            </Typography>
            {/* <Typography
          variant="subtitle1"
          align="center"
          color="white"
          component="p"
        >
          Zawartosc stopki
        </Typography> */}
            <Grid container spacing={4}>
              <Grid
                item
                key="34"
                xs={12}
                sm={6}
                md={3}
                data-aos="fade-left"
                sx={{
                  height: "100%",
                  display: "flex-end",
                  flexDirection: "row",
                }}
              >
                <Typography
                  color="white"
                  gutterBottom
                  variant="h7"
                  component="h4"
                >
                  Szybkie menu
                  <br />
                  <Stack
                    sx={{ pt: 4 }}
                    direction="column"
                    spacing={2}
                    justifyContent="center"
                  >
                    <Button href="/Home" variant="contained">
                      Home
                    </Button>
                    <Button href="/ONas" variant="contained">
                      ONas
                    </Button>
                    <Button href="/Portfolio" variant="contained">
                      Portfolio
                    </Button>
                    <Button href="/Generalne_Wykonastwo" variant="contained">
                      Generalne_Wykonastwo
                    </Button>
                    <Button href="/Kontakt" variant="contained">
                      Kontakt
                    </Button>
                  </Stack>
                </Typography>
              </Grid>
              <Grid
                item
                key="24"
                xs={12}
                sm={6}
                md={6}
                data-aos="fade-left"
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  color="white"
                  gutterBottom
                  variant="h7"
                  component="h4"
                >
                  SKONTAKTUJ SIĘ Z NAMI
                  <br />
                  <br />
                  Rynek Główny 43, 31-013 Kraków <br />
                  <br />
                  telefon: <br />
                  <br />
                  +48509446704 <br />
                  <br />
                  e-mail:
                  <br />
                  <br />
                  biuro@cholujdesign.pl
                  <br />
                </Typography>
              </Grid>
            </Grid>{" "}
            <Copyright />
            <Accordion>
              <AccordionSummary aria-controls={1} id="1"  align="center" >
                {" "}
                <Typography
                  component="h6"
                  variant="h6"
                  align="center"
                  color="black"
                >
                  Polityka Prywatności - naciśnij, aby przeczytać szczegóły.
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Cookies />
              </AccordionDetails>
            </Accordion>
          </Box>
          {/* End footer */}
        </div>
      </ThemeProvider>
    </DocumentMeta>
  );
}
