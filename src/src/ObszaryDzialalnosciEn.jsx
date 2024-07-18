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
import Nav from "./navEn";
import Certyfikaty from "./Certyfikaty"

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
      <Nav/>
    
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
              What CHD can do for you?
            </Typography>
            <Typography
              variant="p"
              align="center"
              color="text.secondary"
              paragraph
            >
              We provide architectural, interior and website designs.
               We also make 3d models, visualizations and animations.
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
            
              <Grid  item key="1" xs={12} sm={6} md={4}>
                <Button href="/Architecture">
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
                      // 16:9
                      // pt: "56.25%",
                    }}
                    image="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    alt="random"
                  />
                  <CardContent>
                  <Typography component="h6" variant="h6" color="text.primary">
                      Architecture
                    </Typography>
                  </CardContent>
                </Card>
             </Button> </Grid>
             <Grid  item key="1" xs={12} sm={6} md={4}>
                <Button href="/Interiors">
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
                      // 16:9
                      // pt: "56.25%",
                    }}
                    image="https://images.unsplash.com/photo-1601628828688-632f38a5a7d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1009&q=80"
                    alt="random"
                  />
                  <CardContent>
                  <Typography component="h6" variant="h6" color="text.primary">
                      Interiors
                    </Typography>
                  </CardContent>
                </Card>
             </Button> </Grid>
             <Grid  item key="1" xs={12} sm={6} md={4}>
                <Button href="Others">
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
                      // 16:9
                      // pt: "56.25%",
                    }}
                    image="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt="random"
                  />
                  <CardContent>
                  <Typography component="h6" variant="h6" color="text.primary">
                      Other
                    </Typography>
                  </CardContent>
                </Card>
             </Button> </Grid>
            
          </Grid>
        </Container>
      
        </React.Fragment>
  );
}
