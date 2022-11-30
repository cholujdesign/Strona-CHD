import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
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
import { sizing, minHeight } from "@mui/system";
import AOS from "aos";
import "aos/dist/aos.css";
// import ContactForm from "./ContactForm";
import { CardActionArea } from "@mui/material";
import Iframe from "react-iframe";

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
      main: grey[500],
    },
    secondary: {
      main: teal[800],
    },
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
        {/* Hero unit */}
     <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
            
          }}
        >
          <Container data-aos="zoom-in" maxWidth="sm">
              <Typography
                component="h1"
                variant="h4"
                align="center"
                color="grey"
                gutterBottom
              >
                Zapraszamy do kontaktu
              </Typography>
              <Typography variant="h7" align="left" color="grey">
                W razie zainteresowania lub w celu uzyskania dodatkowych
                informacji prosimy o kontakt za pomocą formularza zgłoszeniowego
                lub z naszym biurem od poniedziałku do piątku, w godzinach od
                8:00 do 16:00.
                <br />
              </Typography>
              <br />

              <Container align="center">
                {" "}
                Adres, Adres Adres <br />
                <Button
                  variant="outlined"
                  href="https://goo.gl/maps/te1YqVZKmfbe3EdM6"
                >
                  Google maps
                </Button>
              </Container>
              </Container>
              </Box>
        <Container
          sx={{ py: 6, minHeight: "100vh", alignItems: "center" }}
          maxWidth="md"
          data-aos="fade-down"
        >
          <Grid container spacing={5}>
            <Grid item xs={12} sm={12} sx={{ pb: 5 }}>
       
            </Grid>
            <Grid item xs={12} sm={6} sx={{ pb: 5, alignItems: "center" }}>
              <Card sx={{}}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="240"
                  image="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Mec jan kowalski
                  </Typography>
                  {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
                </CardContent>
                <CardActions>
                  <Button size="small">Telefon</Button>
                  <Button size="small">Email</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} sx={{ pb: 10, alignItems: "center" }}>
              <Card sx={{}}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="240"
                  image="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Mec jan kowalski
                  </Typography>
                  {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
                </CardContent>
                <CardActions>
                  <Button size="small">Telefon</Button>
                  <Button size="small">Email</Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={12} sm={12} sx={{ pb: 5 }}>
              {/* <ContactForm /> */}
            </Grid>
            <Grid item xs={12} sm={12} sx={{ pb: 5 }}>
              <Iframe
                url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.0508984842268!2d19.950128215396784!3d50.066608422829205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b19a3f7dbaf%3A0xc54683c71aef0750!2sRakowicka%2015%2C%2031-511%20Krak%C3%B3w!5e0!3m2!1spl!2spl!4v1654247482292!5m2!1spl!2sp"
                width="100%"
                height="600px"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"
              />{" "}
            </Grid>
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
