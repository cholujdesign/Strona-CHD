import React from "react";
import p1 from "./renders/1.jpeg";
import p2 from "./renders/2.jpeg";
import p3 from "./renders/3.jpeg";
import p4 from "./renders/4.jpeg";
import p5 from "./renders/5.jpeg";
import p6 from "./renders/6.jpeg";
import p7 from "./renders/7.jpeg";
import p8 from "./renders/8.jpeg";
import p9 from "./renders/9.jpeg";
import p10 from "./renders/10.jpeg";
import p11 from "./renders/11.jpeg";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
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
    fontFamily: ["Proximity key fobo"].join(","),
    textTransform: 'none',
    button: {
      textTransform: 'none'
    },
    h5: {
      textTransform: 'none'
    },
    h6: {
      textTransform: 'none'
    },
  },
});

class Contact extends React.Component {
  constructor() {
    super();

    this.state = {
      lang: "polski",
    };
    this.polski = this.polski.bind(this);
    this.english = this.english.bind(this);
  }
  polski(e) {
    e.stopPropagation();
    this.setState({
      lang: "polski",
    });
  }

  english() {
    this.setState({
      lang: "english",
    });
  }
  render() {
    if (this.state.lang == "polski")
      return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="white-text">
            {" "}
            <Container maxWidth="sm">
              <br />
              <br />
              <Button variant="outlined" onClick={this.polski}>
                Polski
              </Button>
              <Button variant="contained" onClick={this.english}>
                English
              </Button>
              <Typography
                component="h6"
                variant="h6"
                align="center"
                color="white"
                gutterBottom
              >
                <h3 className="white-text">
                  Rynek Główny - Apartament - Instrukcje
                </h3>
                Adres: Rynek Główny 43, Kraków <br />
                {/* Taxi: +48507894989 <br /> */}
                Telefon: +48516947657 <br />
                Email: cholujdesign@gmail <br />
                
                {/* Wifi: Rynek43_Apartment / Hasło: rg433420<br/> */}
                Wifi: Rynek43Apartamenty2 5G / Hasło: Rg4334#$$#<br/>
                <Button href="tel:+48516947657" variant="contained">
                  +48516947657
                </Button>
                
                <Button href="mailto:biuro@cholujdesign.pl" variant="contained">
                  email
                </Button>
              
                <Button
                  variant="contained"
                  node="a"
                  href="https://goo.gl/maps/xrJdtaQWoJFFU5ya7"
                >
                  Mapa
                </Button>
               
                <Button variant="contained" node="a" href="tel:+48507894989">
                  Taxi
                </Button>
                <br />
                <br />
                <h3>Odbiór kluczy</h3>
                Prosimy otworzyć skrzyneczkę na klucze znajdującą sie przy
                wejściu do kamienicy i zabrać z niej klucz oraz brelok zbliżeniowy.
                <h3> Kod dostępu: 2102</h3>
                <br />
                <img src={p1} width="100%" />
                <img src={p2} width="100%" />
                <h3>Wejście</h3>
                <h3>
                  {" "}
                  Użyj breloka zbliżeniowego jeżeli krata jest opuszczona (czytnik po
                  lewej stronie)
                  <br />
                  *krata sama sie opuści po 60 sekundach, wielokrotne i częste
                  przykładanie breloka zbliżeniowego może zawiesić system ! NIGDY NIE UŻYWAJ
                  SIŁY, ABY OTWORZYC KRATĘ - KARA 500 PLn W RAZIE USZKODZENIA !
                </h3>
                <img src={p3} width="100%" />
                <h3>
                  {" "}
                  Użyj breloka zbliżeniowego jeżeli drzwi są zamknięte (czytnik po lewej
                  stronie)
                </h3>
                <img src={p4} width="100%" />
                <h3> Wejdz po schodach (schowek na bagaże jest pod schodami)</h3>
                <img src={p5} width="100%" />
                <h3>
                  {" "}
                  Użyj breloka zbliżeniowego do drzwi (czytnik po lewej stronie){" "}
                </h3>
                <img src={p6} width="100%" />
                <h3>
                  {" "}
                  Po prawej znajdować się będą drzwi do lokalu, użyj kluczy do
                  drzwi{" "}
                </h3>
                <img src={p7} width="100%" />
                <h3>Wyjście</h3> <img src={p8} width="100%" /> Przekręć klucz do
                mieszkania tylko raz, inaczej osoby w środku nie otworzą drzwi{" "}
                <br />
                <img src={p9} width="100%" />
                <h3> Naciśnij klamkę jeżeli drzwi są zamknięte </h3>
                <img src={p10} width="100%" />
                <h3> Naciśnij klamkę jeżeli drzwi są zamknięte </h3>
                <img src={p11} width="100%" />
                <h3>
                  {" "}
                  Naciśnij przycisk po prawej stronie jeżeli krata jest
                  opuszczona
                  <br />
                  *krata sama sie opuści po 60 sekundach, wielokrotne i szybkie
                  przykładanie breloka zbliżeniowego spowoduje zablkowanie systemu kara za
                  uszkodzenie kary 500 PLN
                </h3>
                <h3>Wymeldowanie</h3> Prosimy zamknąć okna i zostawić klucze
                wraz z brelokiem na stole oraz zatrzasnąć drzwi. <br />
                <h3>Regulamin</h3> <br />
                1. Zakaz Palenia.
                <br />
                2. Zero hałasu po godzinie 22:00.
                <br />
                3. Prosimy wyłączać swiatło po wyjściu z lokalu.
                <br />
                4. Zwierzęta są zakazane.
                <br />
                5. Tylko zarejestrowani goście.
                <br />
                6. Zero imprez i wydarzeń.
                <br />
                7. 100 pln kary za zgubienie klucza lub breloka zbliżeniowego.
                <br />
                8. Monitoring w budynku, goście są odpowiedzialni finansowo za
                zniszczenia budynku przez nich spowodowane.
                <br />
              </Typography>
            </Container>
          </div>
        </ThemeProvider>
      );
    else
      return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="white-text">
            {" "}
            <Container maxWidth="sm">
              <br />
              <br />
              <Button variant="contained" onClick={this.polski}>
                Polski
              </Button>
              <Button variant="outlined" onClick={this.english}>
                English
              </Button>
              <Typography
                component="h6"
                variant="h6"
                align="center"
                color="white"
                gutterBottom
              >
                <h3 className="white-text">
                  Rynek Główny - Apartment - Instructions
                </h3>
                Adress: Rynek Główny 43, Kraków <br />
                {/* Taxi: +48507894989 <br /> */}
                Phone: +48516947657 <br />
             Email: cholujdesign@gmail.com<br/>
                {/* Wifi: Rynek43_Apartment / Password: rg433420<br/> */}
                Wifi: Rynek43Apartamenty2 5G / Password: Rg4334#$$#<br/>
                <Button href="tel:+48516947657" variant="contained">
                  +48516947657
                </Button>
           
                <Button href="mailto:biuro@cholujdesign.pl" variant="contained">
                  email
                </Button>
                
                <Button
                  variant="contained"
                  node="a"
                  href="https://goo.gl/maps/xrJdtaQWoJFFU5ya7"
                >
                  Map
                </Button>
                
                <Button variant="contained" node="a" href="tel:+48507894989">
                  Taxi
                </Button>
                <br />
                <br />
                <h3>Keys</h3>
                Please open the key box and take a key and a Proximity key fob.
                <h3> Code: 2102</h3>
                <br />
                <img src={p1} width="100%" />
                <img src={p2} width="100%" />
                <h3>Entrance</h3>
                <h3>
                  {" "}
                  Use the access Proximity key fob if the gate is closed (Proximity key fob reader on the
                  left)
                  <br />
                  *the gate closes automatically after 60 seconds, do not touch
                  the Proximity key fob reader with the Proximity key fob many times! ! NEVER USE FORCE TO
                  OPEN THE GATE - 200 euro FEE APPLIES !
                </h3>
                <img src={p3} width="100%" />
                <h3> Use the Proximity key fob to open the door (reader on the left)</h3>
                <img src={p4} width="100%" />
                <h3> Go upstairs (lagguage storage under the staircase)</h3>
                <img src={p5} width="100%" />
                <h3>
                  {" "}
                  Use the Proximity key fob to open the door (Proximity key fob reader on the left){" "}
                </h3>
                <img src={p6} width="100%" />
                <h3>
                  {" "}
                  The apartment's door will be on the right (use the key to
                  open){" "}
                </h3>
                <img src={p7} width="100%" />
                <h3>Exit</h3> <img src={p8} width="100%" />
                <h3>
                  {" "}
                  Remeber to close the apartment's white door and to turn the
                  key only once(otherwise people inside can not exit){" "}
                </h3>
                <img src={p9} width="100%" />
                <h3> Press the door handle if they are closed </h3>
                <img src={p10} width="100%" />
                <h3> Press the door handle if they are closed </h3>
                <img src={p11} width="100%" />
                <h3>
                  {" "}
                  PRESS THE BUTTON ON THE RIGHT
                  <br />
                  *the gate closes automatically after 60 seconds, do not touch
                  the Proximity key fob reader with the Proximity key fob many times! ! NEVER USE FORCE TO
                  OPEN THE GATE - FEE APPLIES !
                </h3>
                <h3>Check out</h3> Please close the windows, turn the lights off
                and leave the keys and the Proximity key fob on the table.
                <br />
                <h3>House Rules</h3> <br /> 1. No smoking allowed.
                <br /> 2. No noise after 10PM.
                <br />
                3. Turn of lights and AC/Heating when out of the property.
                <br />
                4. No Pets.
                <br />
                5. Only registered Guests.
                <br />
                6. No Parties or Events.
                <br />
                7. 50 euro fine in case the guest loses the Proximity key fob or the key
                <br />
                8. CCTV in operation, guests are finacially responsible for any
                damages caused by them to the buidling
                <br />
              </Typography>
            </Container>
          </div>
        </ThemeProvider>
      );
  }
}
export default Contact;
