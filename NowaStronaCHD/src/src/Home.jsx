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
import AOS from 'aos';
import "aos/dist/aos.css";
// import Blog from './src/Blog'

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
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
    
      light: '#ff7961',
      main: '#f4503e',
      dark: '#ba000d',
      contrastText: '#fff',
    },
    secondary: {
      light: '#4b688b',
      main: '#1c3e5e',
      dark: '#001834',
      contrastText: '#fff',
    },
  },
});

export default function Album() {
  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
     
      <main> 
        
        {/* Hero unit */}
        <Box
        
          sx={{
            backgroundImage: `url(https://images.unsplash.com/photo-1580684518721-3d7c2af77e5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "95vh",
            alignItems: 'center',
            py:35
          }}
        >
          <Container data-aos="zoom-in" maxWidth="xs"
          
          >
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="white"
              gutterBottom
            >
              Kancelaria adwokacka
              <br/> x
            </Typography>
            <Typography variant="h5" align="center" color="white" paragraph>
              adw.jan kowalski
              <br />
              adw.jan kowalski
            </Typography>
            <Stack
              sx={{ pt: 5 }}
              direction="column"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">+48 123 123 123</Button>
              <Button variant="contained">email@email.com</Button>
            </Stack>
          </Container>
        </Box>
<Container/>

        <Container  sx={{ py: 8 }} maxWidth="md"
          data-aos="fade-left"
        >
          <Grid  container spacing={5}>
            <Grid item xs={12} sm={6} sx={{ pb: 10 }}></Grid>
            <Grid item xs={12} sm={6} sx={{ pb: 10 }}></Grid>
            <Grid item xs={12} sm={6} sx={{ pb: 20 }}>
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="white"
                gutterBottom
              >
                Kancelaria jm
              </Typography>
              <Typography variant="h5" align="left" color="white" paragraph>
              CHD architekci oferuje indywidualne podejście do każdego Klienta, oparte na
            wzajemnym zaufaniu, zaangażowaniu i staranności, będące fundamentem
            wypracowania wspólnego sukcesu. Profesjonalizm, doświadczenie oraz
            umiejętność adaptacji do zmieniającej się rzeczywistości zapewnia
            najwyższy poziom wykonywanych usług.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} sx={{ pb: 20 }}>
              <img
                src="https://freesvg.org/img/balance-scale.png"
                width="70%"
              />{" "}
            </Grid>
            <Grid item xs={12} sm={6} sx={{ pb: 20 }}>
              <img
                src="https://freesvg.org/img/balance-scale.png"
                width="70%"
              />
            </Grid>
            <Grid item xs={12} sm={6} sx={{ pb: 20 }}>
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="white"
                gutterBottom
              >
                Kancelaria jm
              </Typography>
              <Typography variant="h5" align="left" color="white" paragraph>
                Jesteśmy zespołem adwokatów, którzy zajmują się rozwiązywaniem
                problemów prawnych zarówno klientów indywidualnych jak i
                przedsiębiorców.
              </Typography>
            </Grid>
          </Grid>
        </Container>

      </main>
    </ThemeProvider>
  );
}
