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
        <div className="white-text">
          {" "}
          <CssBaseline />
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
              <h5 className="white-text">Adres: Rynek Główny 43, Kraków</h5>
              <h5 className="white-text">Taxi: +48507894989</h5>
              <h5 className="white-text">Telefon: +48516947657</h5>
              <h5 className="white-text">Email: cholujdesign@gmail</h5>
              <h5>Wifi: Rynek43_Apartment / Hasło: rg433420</h5>
              <Button href="tel:+48516947657" variant="contained">
                +48516947657
              </Button>
              <br />
              <br />
              <Button href="mailto:cholujdesign@gmail.com" variant="contained">
                email
              </Button>
              <br />
              <br />
              <Button
                variant="contained"
                node="a"
                href="https://goo.gl/maps/xrJdtaQWoJFFU5ya7"
              >
                Mapa
              </Button>
              <br />
              <br />
              <Button variant="contained" node="a" href="tel:+48507894989">
                Taxi
              </Button>
              <br />
              <br />
              <h3>Odbiór kluczy</h3>
              <h5>
                Prosimy otworzyć skrzyneczkę na klucze znajdującą sie przy
                wejściu do kamienicy i zabrać z niej klucz oraz kartę dostępu.
                <h3> Kod dostępu: 2102</h3>
              </h5>
              <img src={p1} width="100%" />
              <img src={p2} width="100%" />
              <h3>Wejście</h3>
              <h3>
                {" "}
                Użyj karty dostępu jeżeli krata jest opuszczona (czytnik po
                lewej stronie)
                <br />
                *krata sama sie opuści po 60 sekundach, wielokrotne i częste
                przykładanie karty może zawiesić system ! NIGDY NIE UŻYWAJ SIŁY,
                ABY OTWORZYC KRATĘ - KARA 500 PLn W RAZIE USZKODZENIA !
              </h3>
              <img src={p3} width="100%" />
              <h3>
                {" "}
                Użyj karty dostępu jeżeli drzwi są zamknięte (czytnik po lewej
                stronie)
              </h3>
              <img src={p4} width="100%" />
              <h3> Wejdz po schodach (schowek na bagaże jes pod schodami)</h3>
              <img src={p5} width="100%" />
              <h3> Użyj karty dostępu do drzwi (czytnik po lewej stronie) </h3>
              <img src={p6} width="100%" />
              <h3>
                {" "}
                Po prawej znajdować się będą drzwi do lokalu, użyj kluczy do
                drzwi{" "}
              </h3>
              <img src={p7} width="100%" />
              <h3>Wyjście</h3> <img src={p8} width="100%" />
              <h5>
                {" "}
                Przekręć klucz do mieszkania tylko raz, inaczej osoby w środku
                nie otworzą drzwi{" "}
              </h5>
              <img src={p9} width="100%" />
              <h3> Naciśnij klamkę jeżeli drzwi są zamknięte </h3>
              <img src={p10} width="100%" />
              <h3> Naciśnij klamkę jeżeli drzwi są zamknięte </h3>
              <img src={p11} width="100%" />
              <h3>
                {" "}
                Naciśnij przycisk po prawej stronie jeżeli krata jest opuszczona
                <br />
                *krata sama sie opuści po 60 sekundach, wielokrotne i szybkie
                przykładanie karty spowoduje zablkowanie systemu kara za
                uszkodzenie kary 500 PLN
              </h3>
              <h3>Wymeldowanie</h3>{" "}
              <h5>
                {" "}
                Prosimy zamknąć okna i zostawić klucze wraz z kartą na stole
                oraz zatrzasnąć drzwi.{" "}
              </h5>
              <h3>Regulamin</h3>{" "}
              <h5>
                <br />
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
                7. 100 pln kary za zgubienie klucza lub karty.
                <br />
                8. Monitoring w budynku, goście są odpowiedzialni finansowo za
                zniszczenia budynku przez nich spowodowane.
              </h5>
            </Typography>
          </Container>
        </div>
      );
    else
      return (
        <div className="white-text">
          {" "}
          <CssBaseline />
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
              <h5 className="white-text">Adress: Rynek Główny 43, Kraków</h5>
              <h5 className="white-text">Taxi: +48507894989</h5>
              <h5 className="white-text">Phone: +48516947657</h5>
              <h5 className="white-text">Email: cholujdesign@gmail</h5>
              <h5>Wifi: Rynek43_Apartment / Password: rg433420</h5>
              <Button href="tel:+48516947657" variant="contained">
                +48516947657
              </Button>
              <br />
              <br />
              <Button href="mailto:cholujdesign@gmail.com" variant="contained">
                email
              </Button>
              <br />
              <br />
              <Button
                variant="contained"
                node="a"
                href="https://goo.gl/maps/xrJdtaQWoJFFU5ya7"
              >
                Map
              </Button>
              <br />
              <br />
              <Button variant="contained" node="a" href="tel:+48507894989">
                Taxi
              </Button>
              <br />
              <br />
              <h3>Keys</h3>
              <h5>
                Please open the key box and take a key and a card.
                <h3> Code: 2102</h3>
              </h5>
              <img src={p1} width="100%" />
              <img src={p2} width="100%" />
              <h3>Entrance</h3>
              <h3>
                {" "}
                Use the access card if the gate is closed (card reader on the
                left)
                <br />
                *the gate closes automatically after 60 seconds, do not touch
                the card reader with the card many times! ! NEVER USE FORCE TO
                OPEN THE GATE - 200 euro FEE APPLIES !
              </h3>
              <img src={p3} width="100%" />
              <h3> Use the card to open the door (reader on the left)</h3>
              <img src={p4} width="100%" />
              <h3> Go upstairs (lagguage storage under the staircase)</h3>
              <img src={p5} width="100%" />
              <h3> Use the card to open the door (card reader on the left) </h3>
              <img src={p6} width="100%" />
              <h3>
                {" "}
                The apartment's door will be on the right (use the key to open){" "}
              </h3>
              <img src={p7} width="100%" />
              <h3>Exit</h3> <img src={p8} width="100%" />
              <h3>
                {" "}
                Remeber to close the apartment's white door and to turn the key
                only once(otherwise people inside can not exit){" "}
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
                the card reader with the card many times! ! NEVER USE FORCE TO
                OPEN THE GATE - FEE APPLIES !
              </h3>
              <h3>Check out</h3>{" "}
              <h5>
                {" "}
                Please close the windows, turn the lights off and leave the keys
                and the card on the table.
              </h5>
              <h3>House Rules</h3>{" "}
              <h5>
                <br /> 1. No smoking allowed.
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
                7. 50 euro fine in case the guest loses the card or the key
                <br />
                8. CCTV in operation, guests are finacially responsible for any
                damages caused by them to the buidling
              </h5>
            </Typography>
          </Container>
        </div>
      );
  }
}
export default Contact;