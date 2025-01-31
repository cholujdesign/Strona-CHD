import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
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
import Alert from "@mui/material/Alert";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
// import ContactForm from "./ContactForm";
import { CardActionArea } from "@mui/material";
import Iframe from "react-iframe";
import emailjs from "@emailjs/browser";
import GlobalStyles from "@mui/material/GlobalStyles";
import Nav from "./navEn";
import { Helmet } from "react-helmet";


// const theme = createTheme({
//   palette: {
//     primary: {
//       main: grey[200],
//     },
//     secondary: {
//       main: teal[800],
//     },
//   },
// });
export default function Album() {
  const [wyslanoWiadomosc, setwyslanoWiadomosc] = React.useState(false);
  const [validated, setValidated] = React.useState(false);
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
          setwyslanoWiadomosc(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  const Wyslano = () => {
    return (
      <div>
        {wyslanoWiadomosc ? (
          <Alert
            sx
          // action={
          //   <Button onClick={refreshPage} color="inherit" size="small">
          //     X
          //   </Button>
          // }
          >
            Wiadomość wysłana!
          </Alert>
        ) : null}
      </div>
    );
  };
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
      {/* Hero unit */} <Nav />
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container   maxWidth="lg">
          <Typography
            component="h1"
            variant="h3"
            align="center"
            color="grey"
            gutterBottom
          >
            Apartments for sale
          </Typography>
          <Typography variant="h7" align="left" color="grey">
          Please explore our offer of apartments for sale.
            <br />
          </Typography>
          <br />
        </Container>
        <Container   maxWidth="lg">
          <hr />
          <Typography
            component="h2"
            variant="h4"
            align="center"
            color="grey"
            gutterBottom
          >
            The tenement building on St. Paul's Street in Katowice
          </Typography>
          <Typography variant="h7" align="left" color="grey">

            
We are pleased to announce that the sale of apartments has begun in a unique tenement building located on St. Paul's Street in Katowice. This historic building, full of charm and tradition, is undergoing a thorough renovation. This unique project includes a complete building renovation, the reconstruction of ceilings, and the implementation of modern energy-efficient installation solutions.
<br/><br/>
Key aspects of the investment:
<br/><br/>
<br/>- Apartments with areas ranging from 25m² to 58m², Prices starting at 12,500 PLN/m²
<br/>- Location: St. Paul's Street is located in the very heart of Katowice, making it an ideal place both for living and for running a business. It is directly adjacent to Warszawska Street and near Mariacka Street. Additionally, the area is surrounded by numerous shops, restaurants, offices, cultural and entertainment institutions, as well as the most beautiful building in Silesia – the Film Studies Building of the University of Silesia.
<br/>- Proximity to public transport: St. Paul's Street is excellently connected to other parts of Katowice, thanks to the nearby bus and tram stops.
<br/>- Comprehensive building renovation: The building will undergo a complete renovation, restoring its former glory while maintaining its original character.
<br/>- Ceilings: The ceilings of the tenement will be renovated, with concrete floors.
<br/>- Modern installations: The project will include the installation of modern, energy-efficient systems.
<br/>- Window replacement: The windows will be replaced with new, energy-efficient ones, contributing to lower operating costs.
<br/>- Renovation of the historical front façade: The building's façade will be restored to its original state.
<br/>- Energy-efficient solutions and renewable energy sources: The project will incorporate modern energy-efficient solutions utilizing renewable energy sources, thereby improving the building's energy efficiency to meet current standards.
<br/>- Apartment adaptation: The apartments can be adapted for various purposes, such as long-term or short-term rental, or personal residence.

<br/>
          </Typography>
          <br />
          <Container alignItems="center" maxWidth="lg">
            <Grid container spacing={5}>

              <Grid   item key={1} xs={12} lg={4}>
                <Card>

                  <CardMedia
                    component="img"
                    loading="lazy"
                    height="auto"
                    image="/images/leszek/katowice.webp"
                    alt=" loading"
                  />
                </Card>
              </Grid>

              <Grid   item key={2} xs={12} lg={4}>
                <Card>

                  <CardMedia
                    component="img"
                    loading="lazy"
                    height="auto"
                    image="/images/leszek/katowice1.webp"
                    alt=" loading"
                  />
                </Card>
              </Grid>
              <Grid   item key={3} xs={12} lg={4}>
                <Card>

                  <CardMedia
                    component="img"
                    loading="lazy"
                    height="auto"
                    image="/images/leszek/katowice2.webp"
                    alt=" loading"
                  />
                </Card>
              </Grid>
              <Grid   item key={4} xs={12} lg={4}>
                <Card>

                  <CardMedia
                    component="img"
                    loading="lazy"
                    height="auto"
                    image="/images/leszek/katowice3.webp"
                    alt=" loading"
                  />
                </Card>
              </Grid>
              <Grid   item key={5} xs={12} lg={4}>
                <Card>

                  <CardMedia
                    component="img"
                    loading="lazy"
                    height="auto"
                    image="/images/leszek/katowice4.webp"
                    alt=" loading"
                  />
                </Card>
              </Grid>
              <Grid   item key={6} xs={12} lg={4}>
                <Card>

                  <CardMedia
                    component="img"
                    loading="lazy"
                    height="auto"
                    image="/images/leszek/katowice5.webp"
                    alt=" loading"
                  />
                </Card>
              </Grid>
              <Grid   item key={6} xs={12} lg={3}>
                <Card>

                  <CardMedia
                    component="img"
                    loading="lazy"
                    height="auto"
                    image="/images/leszek/katowiceparter.webp"
                    alt=" loading"
                  />
                </Card>
              </Grid>
              <Grid   item key={6} xs={12} lg={3}>
                <Card>

                  <CardMedia
                    component="img"
                    loading="lazy"
                    height="auto"
                    image="/images/leszek/katowicep1.webp"
                    alt=" loading"
                  />
                </Card>
              </Grid>
              <Grid   item key={6} xs={12} lg={3}>
                <Card>

                  <CardMedia
                    component="img"
                    loading="lazy"
                    height="auto"
                    image="/images/leszek/katowicep2.webp"
                    alt=" loading"
                  />
                </Card>
              </Grid>
              <Grid   item key={6} xs={12} lg={3}>
                <Card>

                  <CardMedia
                    component="img"
                    loading="lazy"
                    height="auto"
                    image="/images/leszek/katowicep3.webp"
                    alt=" loading"
                  />
                </Card>
              </Grid>
            </Grid>
            <br />
            <Iframe

              url="https://docs.google.com/spreadsheets/d/e/2PACX-1vRaDz5LASjO5USUEUJsly_hgx0ADUwB8wszteypoBucB0g5eTlIx__Q_GTv5KF3QE2OPTbIN588Jcn5/pubhtml?gid=0&single=true"
              width="100%"
              height="600px"
              id="myId"
              className="myClassname"
              display="initial"
              position="relative"
            />{" "}
          </Container>





          {/* <Container align="center">
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
              biuro@cholujdesign.pl <br />
              <Button variant="contained" href="mailto:biuro@cholujdesign.pl">
                Wyślij Email
              </Button>
            </Container> */}
        </Container>
        <br /><br /><br /><br />
        <Container   maxWidth="lg">
          <hr />
          <Typography
            component="h2"
            variant="h4"
            align="center"
            color="grey"
            gutterBottom
          >
            Villa in Krynica-Zdrój
          </Typography>
          <Typography variant="h7" align="left" color="grey">

          We would like to present to you the Villa, an extraordinary historic building located in the picturesque Krynica-Zdrój. This charming property is the perfect place for relaxation, rest, and discovering the beauty of this stunning region.

<br/>Phase I – Renovation of the existing building has been completed, and Phase II, which involves expanding the building, is planned.
<br/>
<br/>Key aspects of the investment:
<br/>
<br/>History: This historic place dates back to the early modernist period of the 1920s. Villa Złocień has been carefully restored with attention to conservation details, preserving its original character and charm. It is a true architectural gem from that era, renovated to maintain its former splendor.
<br/>
<br/>Location: The villa is situated in the heart of Krynica-Zdrój, surrounded by beautiful mountains and nature. It is right next to Parkowa Mountain, offering endless opportunities for hiking along nearby tourist trails. This location is perfect for lovers of active recreation, walks, and bike rides.
<br/>
<br/>Krynica city center – 1.3 km
<br/>"Ciurkacz" spring – 50 m
<br/>Parkowa Mountain – 2 km
<br/>Grocery store – 100 m
<br/>Krynica-Zdrój: The town is located in the Beskid Sądecki mountain range, in the valley of the Kryniczanka stream and its tributaries. Krynica-Zdrój is surrounded by the hills of Parkowa, Krzyżowa, and Jasiennik mountains. The town lies within the Poprad Landscape Park, serving as a base for trips to the nearby mountains. Krynica-Zdrój is a spa town located in the eastern part of the Jaworzyna Krynicka range – one of the two ranges of the Beskid Sądecki.
<br/>
<br/>Garden and Surroundings: The surroundings of Villa Złocień are a true paradise for nature lovers. In addition to Parkowa Mountain, there are numerous hiking and biking trails nearby, allowing for active outdoor recreation. The garden around the villa is a perfect spot to relax, have tea, and enjoy the tranquility.
<br/>
<br/>Phase II (expansion) plans to include:
<br/>
<br/>Underground garage
<br/>Pool for residents
<br/>Balconies and terraces
<br/>Large windows
<br/>Heat pump
<br/>Elevator
<br/>Energy-efficient solutions and renewable energy sources: The project will incorporate modern energy-efficient solutions, improving the energy efficiency of the villa to meet current standards.
<br/>
<br/>Apartment adaptation: The apartments can be adapted for various purposes, such as long-term or short-term rentals, or personal residence.


          </Typography>
          <br />
          <Container alignItems="center" maxWidth="lg">
          <Container alignItems="center" maxWidth="lg">
            <Grid container spacing={5}>

              <Grid   item key={1} xs={12} lg={4}>
                <Card>

                  <CardMedia
                    component="img"
                    loading="lazy"
                    height="auto"
                    image="/images/leszek/krynica1.webp"
                    alt=" loading"
                  />
                </Card>
              </Grid>

              <Grid   item key={2} xs={12} lg={4}>
                <Card>

                  <CardMedia
                    component="img"
                    loading="lazy"
                    height="auto"
                    image="/images/leszek/krynica2.webp"
                    alt=" loading"
                  />
                </Card>
              </Grid>
              <Grid   item key={3} xs={12} lg={4}>
                <Card>

                  <CardMedia
                    component="img"
                    loading="lazy"
                    height="auto"
                    image="/images/leszek/krynica3.webp"
                    alt=" loading"
                  />
                </Card>
              </Grid>
              <Grid   item key={4} xs={12} lg={4}>
                <Card>

                  <CardMedia
                    component="img"
                    loading="lazy"
                    height="auto"
                    image="/images/leszek/krynica4.webp"
                    alt=" loading"
                  />
                </Card>
              </Grid>
              <Grid   item key={5} xs={12} lg={4}>
                <Card>

                  <CardMedia
                    component="img"
                    loading="lazy"
                    height="auto"
                    image="/images/leszek/krynica5.webp"
                    alt=" loading"
                  />
                </Card>
              </Grid>
              <Grid   item key={6} xs={12} lg={4}>
                <Card>

                  <CardMedia
                    component="img"
                    loading="lazy"
                    height="auto"
                    image="/images/leszek/krynica6.webp"
                    alt=" loading"
                  />
                </Card>
              </Grid>
            </Grid>
            </Container>
            <Container alignItems="center" maxWidth="lg">
            <Grid container spacing={5}>

              <Grid   item key={1} xs={12} lg={4}>
                <Card>

                  <CardMedia
                    component="img"
                    loading="lazy"
                    height="auto"
                    image="/images/leszek/rozbudowa0.svg"
                    alt=" loading"
                  />
                </Card>
              </Grid>

              <Grid   item key={2} xs={12} lg={4}>
                <Card>

                  <CardMedia
                    component="img"
                    loading="lazy"
                    height="auto"
                     image="/images/leszek/rozbudowa1.svg"
                    alt=" loading"
                  />
                </Card>
              </Grid>
              <Grid   item key={3} xs={12} lg={4}>
                <Card>

                  <CardMedia
                    component="img"
                    loading="lazy"
                    height="auto"
                     image="/images/leszek/rozbudowa2.svg"
                    alt=" loading"
                  />
                </Card>
              </Grid>
              <Grid   item key={4} xs={12} lg={4}>
                <Card>

                  <CardMedia
                    component="img"
                    loading="lazy"
                    height="auto"
                 image="/images/leszek/rozbudowa3.svg"
                    alt=" loading"
                  />
                </Card>
              </Grid>
              <Grid   item key={5} xs={12} lg={4}>
                <Card>

                  <CardMedia
                    component="img"
                    loading="lazy"
                    height="auto"
                    image="/images/leszek/rozbudowa4.svg"
                    alt=" loading"
                  />
                </Card>
              </Grid>
            
            </Grid>
            </Container>
            <br />
            <Iframe

              url="https://docs.google.com/spreadsheets/d/e/2PACX-1vTszopZgj9QIoARICA8wcquyWNWvP_AUVvA39KxzmmqjFxQv6Ks7kRk_EWo9FDo6XTDIhoPA2k1pcCY/pubhtml?gid=634774451&single=true"
              width="100%"
              height="600px"
              id="myId"
              className="myClassname"
              display="initial"
              position="relative"
            />{" "}
          </Container>





          {/* <Container align="center">
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
              biuro@cholujdesign.pl <br />
              <Button variant="contained" href="mailto:biuro@cholujdesign.pl">
                Wyślij Email
              </Button>
            </Container> */}
        </Container>
      </Box>
      <Container
        sx={{ py: 6, minHeight: "100vh", alignItems: "center" }}
        maxWidth="lg"
        data-aos="fade-down"
      >
        <Grid container spacing={5}>
          <Grid item xs={12} sm={12} sx={{ pb: 5 }}>
            <Container component="main" maxWidth="lg">

              <Box
                sx={{
                  // mt: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >

                <Typography color="white" component="h1" variant="h5">
                  Please contact us
                </Typography>
                <br /><br />
                <Box sx={{
                  backgroundColor: "white",
                  p: 4,
                  borderRadius: "7px"
                }}
                  component="form" onSubmit={sendEmail}
                  noValidate={validated} >
                  <TextField

                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Your Email"
                    name="user_email"
                    autoComplete="email"

                  />
                  <TextField
                    multiline
                    margin="normal"
                    required
                    fullWidth
                    name="message"
                    label="Your message"
                    type="text"
                    id="text"
                    rows="4"

                  />

                  <Button

                    type="submit"
                    fullWidth
                    variant=""
                    sx={{ mt: 3, mb: 2, }}
                  >
                    Send
                  </Button>
                  <Wyslano />
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
        <Helmet>
          <title>Lokale</title>
          <meta name="description" content="Lokale na sprzedaż" />
          <meta property="og:image" content="https://images.unsplash.com/photo-1617360547704-3da8b5363369?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />
          <link
            rel="canonical"
            href="https://cholujdesign.com/Lokale"
          />
        </Helmet>
      </Container>
    </React.Fragment>
  );
}
