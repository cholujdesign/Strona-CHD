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
import Profil from "./src/Architecture";
import Home from "./src/Home";
import Onas from "./src/Onas";
import Blog from "./src/ObszaryDzialanosci";
import Architecture from "./src/Architecture";
import Interiors from "./src/Interiors";
import Other from "./src/Other";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
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
      light: '#ff7500',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    secondary: {
      light: '#4b688b',
      main: '#123042',
      dark: '#001834',
      contrastText: '#fff',
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
      <CssBaseline />
      <Nav />
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/Kontakt" element={<Contact />} />
            <Route path="/architektura" element={<Architecture />} />
            <Route path="/wnetrza" element={<Interiors />} />
            <Route path="/inne" element={<Other />} />
            <Route path="/ONas" element={<Onas />} />
            <Route path="/Oferta" element={<Blog />} />
            <Route path="/:any" element={<Home />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "secondary.main", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom color="white">
          Kancelaria xyz
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
            <Typography color="white" gutterBottom variant="h7" component="h4">
              Szybkie menu
              <br />
              <Stack
              sx={{ pt: 4 }}
              direction="column"
              spacing={2}
              justifyContent="center"
            >
              <Button  variant="contained">O Nas</Button>
              <Button  variant="contained">Profil Kancelarii</Button>
              <Button  variant="contained">Blog</Button>
              <Button  variant="contained">Kontakt</Button>
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
            <Typography color="white" gutterBottom variant="h7" component="h4">
              SKONTAKTUJ SIĘ Z NAMI
              <br />
              <br/>pl. Szczepański 5/108 31-011 Kraków 
              <br/>tel/fax: 12 422 80 96 
              <br/>e-mail:
              <br/>kancelaria@kpla.com.pl 
              <br/>Anna Kasolik  
              <br/>501 861 853
              <br/>a.kasolik@kpla.com.pl 
              <br/>Gabriela Pawlus-Łapa 
              <br/>600 886 020
              <br/>g.pawlus@kpla.com.pl
            </Typography>

            
          </Grid>
        </Grid>

        <Copyright />
      </Box>
      {/* End footer */}
      </div>
    </ThemeProvider>
  );
}
