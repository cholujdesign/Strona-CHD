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
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
// import ContactForm from "./ContactForm";
import { CardActionArea } from "@mui/material";
import Iframe from "react-iframe";
import emailjs from "@emailjs/browser";



const theme = createTheme({
  palette: {
    primary: {
      main: grey[200],
    },
    secondary: {
      main: teal[800],
    },
  },
});
function sendEmail(e) {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_a1wwmva",
      "template_jnm4g0d",
      e.target,
      "user_x9kPpW1JmhYVbwVWmxAVD"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
}

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
              lub z naszym biurem od poniedziałku do piątku, w godzinach od 9:00
              do 16:00.
              <br />
            </Typography>
            <br />

            <Container align="center">
              {" "}
              Rynek Główny 43, Kraków 31013 <br />
              <Button
                variant="contained"
                href="https://goo.gl/maps/CfisLfUTRzM1tD6fA"
              >
                Google maps
              </Button>
            </Container>
            <br />
            <Container align="center">
              {" "}
              +48509446704 <br />
              <Button variant="contained" href="tel:+48509446704">
                Zadzwoń
              </Button>
            </Container>
            <br />
            <Container align="center">
              {" "}
              cholujdesign@gmail.com <br />
              <Button variant="contained" href="mailto:cholujdesign@gmail.com">
                Wyślij Email
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
            <Container component="main" maxWidth="xm">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          
          <Typography color="white" component="h1" variant="h5">
            Formularz kontaktowy
          </Typography>
          <br/>
          <Box sx={{
              backgroundColor: "white",
              mt: 1,
              borderRadius:"7px"
            }}
           component="form" onSubmit={sendEmail} noValidate >
            <TextField
           
              margin="normal"
              required
              fullWidth
              id="email"
              label="Twój Email"
              name="user_email"
              autoComplete="email"
              
            />
            <TextField
            multiline
              margin="normal"
              required
              fullWidth
              name="message"
              label="Wiadomość"
              type="text"
              id="text"
              
            />
            
            <Button
            
              type="submit"
              fullWidth
              variant=""
              sx={{ mt: 3, mb: 2, }}
            >
              Wyślij
            </Button>
          
          </Box>
        </Box>

      </Container>

            </Grid>

            <Grid item xs={12} sm={12} sx={{ pb: 5 }}>
              {/* <ContactForm /> */}
            </Grid>
            <Grid item xs={12} sm={12} sx={{ pb: 5 }}>
              <Iframe
              
                url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d269.2208349337302!2d19.938172454009088!3d50.062417692695604!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b0e1dd33297%3A0xa8c90fce36f5f86b!2sCho%C5%82uj%20Design%20s.c.%20Cho%C5%82uj%20I.%2C%20Cho%C5%82uj%20R.!5e0!3m2!1spl!2sus!4v1669903688989!5m2!1spl!2sus"
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
