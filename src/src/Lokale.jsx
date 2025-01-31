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
import Nav from "./nav";
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
            Sprzedaż mieszkań
          </Typography>
          <Typography variant="h7" align="left" color="grey">
            Zapraszamy Państwa do zapoznania się z ofertą mieszkań na sprzedaż.
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
            Kamienica przy ul. Św. Pawła w Katowicach
          </Typography>
          <Typography variant="h7" align="left" color="grey">

            Z przyjemnością informujemy, że rozpoczęła się sprzedaż mieszkań w wyjątkowej kamienicy znajdującej się przy ulicy św. Pawła w Katowicach. Ta historyczna kamienica, pełna uroku i tradycji, przechodzi gruntowny remont. To unikalne przedsięwzięcie obejmuje kompleksową renowację budynku, rekonstrukcję stropów oraz nowoczesne energooszczędne rozwiązania instalacyjne.
            <br />
            <br />
            Kluczowe aspekty inwestycji:
            <br />
            <br />
            <li>
              Mieszkania o powierzchni od 25m2 do 58m2, Ceny od 12 500 pln/m2
            </li>
            <li>
              Lokalizacja: Ulica św. Pawła zlokalizowana jest w samym sercu Katowic, co czyni ją idealnym miejscem zarówno do zamieszkania, jak i prowadzenia działalności gospodarczej. Znajduje się ona bezpośrednio przy ulicy Warszawskiej i w pobliżu ulicy Mariackiej. Ponadto, w jej sąsiedztwie znajdują się liczne sklepy, restauracje, biura oraz instytucje kulturalne i rozrywkowe oraz najpiękniejszy budynek na Śląsku - Budynek Filmoznawstwa UŚ.
            </li>
            <li>
              Bliskość komunikacji miejskiej: Ulica św. Pawła doskonale skomunikowana jest z innymi częściami Katowic, dzięki bliskości przystanków autobusowych i tramwajowych.
            </li>
            <li>
              Gruntowny remont budynku: budynek zostanie poddany kompleksowej renowacji, przywracając mu dawny blask i zachowując jego oryginalny charakter
            </li>
            <li>
              Stropy: stropy kamienicy zostaną wyremontowane, podłogi betonowe.
            </li>
            <li>
              Nowoczesne instalacje: w ramach projektu zostaną zainstalowane nowoczesne energooszczędne  instalacje.
            </li>
            <li>
              Wymiana okien: okna zostaną wymienione na nowe, energooszczędne, co przyczyni się do obniżenia kosztów eksploatacji.
            </li>
            <li>
              Remont historycznej fasady frontowej: fasada kamienicy zostanie odrestaurowana i przywrócona do pierwotnego stanu.
            </li>
            <li>
              Rozwiązania energooszczędne i odnawialne źródła energii: w ramach projektu zostaną wprowadzone nowoczesne rozwiązania energooszczędne, które wykorzystają odnawialne źródła energii, podnosząc tym samym efektywność energetyczną kamienicy do aktualnych standardów.
            </li>
            <li>
              Adaptacja apartamentów.

              Apartamenty mogą być przystosowane do różnych celów, takich jak wynajem długoterminowy, krótkoterminowy lub własne zamieszkanie.            </li>


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
            Willa w Krynicy-Zdrój
          </Typography>
          <Typography variant="h7" align="left" color="grey">

            Chcielibyśmy zaprezentować Państwu Willę, niezwykły zabytkowy budynek zlokalizowany w malowniczej Krynicy-Zdrój. Ta urocza posiadłość to idealne miejsce na relaks, odpoczynek i odkrywanie uroków tego pięknego regionu.         <br />
            <br />
            Zakończono Etap I - remont istnijejącego budynku, planuje się dokonać rozbudowy budynku w etapie II.
            <br /><br />
            Kluczowe aspekty inwestycji:
            <br />
            <br />
            <li>
              Historia:  To historyczne miejsce ma swoje korzenie sięgające okresu wczesnego modernizmu z początku lat dwudziestych XX wieku. Willa Złocień została odrestaurowana z dbałością o detale konserwatorskie, zachowując przy tym oryginalny charakter i urok. Jest to prawdziwy klejnot architektury z tamtych czasów, który został odnowiony, aby zachować swój dawny blask.
            </li>
            <li>
              Lokalizacja: Willa znajduje się w sercu Krynicy-Zdrój, otoczona przez piękne góry i przyrodę. Znajduje się tuż obok Góry Parkowej, co daje nieograniczone możliwości wędrówek po okolicznych szlakach turystycznych. Ta lokalizacja jest idealna dla miłośników aktywnego wypoczynku, spacerów i przejażdżek rowerowych.
              Centrum Krynicy - 1,3 km,
              Zródełko "Ciurkacz" -50 m,

              Góra Parkowa - 2 km,

              Sklep Spożywczy - 100 m
            </li>
            <li>
              Krynica-Zdrój:
              Miasto położone jest w Beskidzie Sądeckim, w dolinie potoku Kryniczanka i jego dopływów. Krynica-Zdrój otaczają wzgórza Góry Parkowej, Krzyżowej, Jasiennika. Miasto leży na terenie Popradzkiego Parku Krajobrazowego, stanowi bazę wypadową w okoliczne góry. Uzdrowisko Krynica-Zdrój znajduje się we wschodniej części Pasma Jaworzyny Krynickiej – jednego z dwóch pasm Beskidu Sądeckiego.
            </li>
            <li>
              Ogród i Otoczenie:
              Otoczenie Willi Złocień to prawdziwy raj dla miłośników przyrody. Oprócz Góry Parkowej w okolicy znajdują się liczne ścieżki piesze i rowerowe, które pozwalają na aktywny wypoczynek na świeżym powietrzu. Ogród wokół willi to miejsce, gdzie można odpocząć, napić się herbaty i cieszyć się spokojem.
            </li>
            <li>
              W etapie II (rozbudowie) planuje się zapewnić: Garaż podziemny, Basen dla mieszkańców, Balkony i tarasy, Duże przeszklenia, Pompę ciepła, Windę
            </li>
            <li>
              Rozwiązania energooszczędne i odnawialne źródła energii: w ramach projektu zostaną wprowadzone nowoczesne rozwiązania energooszczędne, podnosząc tym samym efektywność energetyczną kamienicy do aktualnych standardów.
            </li>
            <li>
              Adaptacja apartamentów.

              Apartamenty mogą być przystosowane do różnych celów, takich jak wynajem długoterminowy, krótkoterminowy lub własne zamieszkanie.            </li>


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
                  Formularz kontaktowy
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
                    rows="4"

                  />

                  <Button

                    type="submit"
                    fullWidth
                    variant=""
                    sx={{ mt: 3, mb: 2, }}
                  >
                    Wyślij
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
