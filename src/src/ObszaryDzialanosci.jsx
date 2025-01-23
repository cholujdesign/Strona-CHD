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
import AOS from "aos";
import "aos/dist/aos.css";
import GlobalStyles from "@mui/material/GlobalStyles";
import Nav from "./nav";
import { Helmet } from "react-helmet";


const theme = createTheme();

export default function Album() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <Nav />

      <Box
        sx={{
          bgcolor: "background.paper",
          // pt: 8,
          // pb: 6,
        }}
      >
        <Container maxWidth="sm">
          {/* <Typography
            component="h3"
            variant="h3"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Obszary działalności
          </Typography>
          <Typography
            variant="p"
            align="center"
            color="text.secondary"
            paragraph
          >
            Zajmujemy się projektami architektonicznymi, wnętrz i stron
            internetowych. Wykonujemy równiez modele 3d, wizualizacje i
            animacje.
          </Typography> */}
          {/* <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack> */}
        </Container>
      </Box>
      <Container sx={{ py: 8 }} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          <Grid item key="1" xs={12} sm={6} md={6}>
            <Button href="/architektura">
              <Card
                data-aos="fade-down"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    height: "250px",
                    width: "300px",
                  }}
                  image="/images/rudera.jpg"
                  alt="random"
                />
                <CardContent>
                  <Typography component="h1" variant="h6" color="text.primary">
                    Architektura
                  </Typography>
                </CardContent>
              </Card>
            </Button>{" "}
          </Grid>
          <Grid item key="1" xs={12} sm={6} md={6}>
            <Button href="/wnetrza">
              <Card
                data-aos="fade-down"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    height: "250px",
                    width: "300px",
                  
                  }}
                  image="/images/Daniel6.webp"
                  alt="random"
                />
                <CardContent>
                  <Typography component="h6" variant="h6" color="text.primary">
                    Wnętrza
                  </Typography>
                </CardContent>
              </Card>
            </Button>{" "}
          </Grid>
          <Grid item key="1" xs={12} sm={6} md={6}>
            <Button href="inne">
              <Card
                data-aos="fade-down"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    height: "250px",
                    width: "300px",
                  }}
                  image="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="random"
                />
                <CardContent>
                  <Typography component="h6" variant="h6" color="text.primary">
                    Inne
                  </Typography>
                </CardContent>
              </Card>
            </Button>{" "}
          </Grid>
          <Grid item key="1" xs={12} sm={6} md={6}>
            <Button href="/Certyfikaty">
              <Card
                data-aos="fade-down"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    height: "250px",
                    width: "300px",
                  }}
                  image="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="random"
                />
                <CardContent>
                  <Typography component="h6" variant="h6" color="text.primary">
                    Certyfikaty energetyczne
                  </Typography>
                </CardContent>
              </Card>
            </Button>{" "}
          </Grid>
        </Grid>
        <Helmet>
          <title>Obszary działalności</title>
          <meta name="description" content="Jakie usługi oferujemy" />
          <meta property="og:image" content="https://images.unsplash.com/photo-1617360547704-3da8b5363369?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />
          <link
            rel="canonical"
            href="https://cholujdesign.com/Portfolio"
          />
        </Helmet>
      </Container>
    </React.Fragment>
  );
}
