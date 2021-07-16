import "materialize-css";
import React, { Component, useEffect } from "react";
import {
  Button,
  Col,
  Divider,
  Row,
  Slider,
  Slide,
  Caption,
  Card,
  Carousel,
} from "react-materialize";
import Aos from "aos";
import "aos/dist/aos.css";
import architekturaLogo from "./svg/logo.svg";
import wnetrzaLogo from "./svg/logo.svg";
import wizualizacjeLogo from "./svg/logo.svg";
import clientCard1 from "./svg/clientCard1.svg";
import clientCard2 from "./svg/clientCard2.svg";
import clientCard3 from "./svg/clientCard3.svg";
import Animacje from "./svg/wnetrzaLogo.svg";
import img1 from "./svg/wizualizacjeLogo.svg";
import img2 from "./svg/wizualizacjeLogo.svg";
import img3 from "./svg/wizualizacjeLogo.svg";
import img4 from "./svg/wizualizacjeLogo.svg";
import img5 from "./svg/wizualizacjeLogo.svg";
import img6 from "./svg/wizualizacjeLogo.svg";
import img7 from "./svg/wizualizacjeLogo.svg";

import finger from "./svg/finger (1).svg"


const HomeWnetrza = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  let lang = localStorage.getItem("lang");

  if (lang == "en") return <Row></Row>;
  else
    return (
      
      <div>
  
        <Carousel
          carouselId="Carousel-2"
          className="white-text center"
          options={{
            indicators: false,
            fullWidth: true,
            
          }}
        >
          <div className="cyan darken-4">
            <div className="kropki center white-text">
                  <img src={finger} width="100%"/>
                  </div>
            <Row>
              <Row className="hide-on-med-and-down" />
              <Row className="hide-on-med-and-down" />
              <Row className="hide-on-med-and-down" />
              <Row className="hide-on-med-and-down" />
              <Col s={12} l={6}>
                <img
                  className="imgCarousel"
                  src="https://images.unsplash.com/photo-1618385455730-2571c38966b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  width="100%"
                />
              </Col>
              <Col s={12} l={6}>
                <h3 className="smallHead">
                  Projekty Wnętrz <Divider />
                </h3>
                <div className="left-align smallText">
                  Oferujemy przygotowanie projektu wnętrz prywatnych oraz
                  komercyjnych w pełnym zakresie, wraz z nadzorem.
                  <br />
                  <h5 className="smallHead">INDYWIDUALNE PODEJŚCIE</h5>
                  Nie projektujemy szablonowo. Każdy nasz projekt jest dokładnie
                  przemyślany i zaplanowany! Przywiązując wagę do detali
                  projektujemy z pasją i zaangażowaniem.
                  <h5 className="smallHead">PROJEKTUJEMY NA KAŻDĄ KIESZEŃ</h5>
                  Wszystkie projekty dostosowujemy do Państwa możliwości
                  finansowych.
                  <h5 className="smallHead">SPRAWDZONE ROZWIĄZANIA</h5>
                  Współpracujemy tylko ze sprawdzonymi wykonawcami, właśnie
                  dlatego mamy pewność, że wszystkie założenia projektowe
                  zostaną zrealizowane.
                  <h5 className="smallHead">TERMINOWOŚĆ</h5>
                  Przyjmujemy tylko tyle zleceń, aby żaden z naszych klientów
                  nie musiał czekać zbyt długo na projekt.
                  <br />
                  <br />
                  <Button node="a" href="contact">Zadzwoń/Napisz</Button>
                </div>
              </Col>
            </Row>
          </div>
          <div className=" cyan darken-3">
            <div className="kropki center white-text">
                  <img src={finger} width="100%"/>
                  </div>
            <Row className="hide-on-med-and-down" />
            <Row className="hide-on-med-and-down" />
            <Row className="hide-on-med-and-down" />
            <Row className="hide-on-med-and-down" />
            <Row>
              <Col s={12} l={6}>
                <img
                  className="imgCarousel"
                  src="https://images.unsplash.com/photo-1525193612562-0ec53b0e5d7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
                  width="100%"
                />
              </Col>
              <Col s={12} l={6}>
                <h3 className="smallHead">
                  Specjalizacja w: <Divider />
                </h3>
                <div className="left-align smallText">
                  O ile nasz zespół jest w stanie poradzić sobie z kadym
                  zadaniem, mozemy się poszczycić szczególnym doświadczeniem w
                  projektowaniu i realizacji następującym obiektów:
                </div>
                <h5 className="left-align">
                  ✓ Restauracjach i kawiarniach
                  <br />
                  <br />✓ Mieszkaniach
                  <br /> <br />✓ Historycznych obiektach
                  <br /> <br />✓ Mieszkaniach pod wynajem
                  <br /> <br />✓ "Deweloperkach"
                  <br /> <br />✓ Projektach mebli
                  <br />
              <Button node="a" href="portfolio">Przykłady</Button>
                </h5>
              </Col>
            </Row>
          </div>
          <div className="grey darken-3">
            <div className="kropki center white-text">
                  <img src={finger} width="100%"/>
                  </div>
            <Row className="hide-on-med-and-down" />
            <Row className="hide-on-med-and-down" />
            <Row className="hide-on-med-and-down" />
            <Row className="hide-on-med-and-down" />
            <Row>
              <Col s={12} l={6}>
                <img
                  className="imgCarousel"
                  src="https://images.unsplash.com/photo-1542621334-a254cf47733d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  width="100%"
                />
              </Col>
              <Col s={12} l={6}>
                <h3 className="smallHead">
                  Pełna dokumentacja <Divider />
                </h3>
                <div className="left-align smallText ">
                  <li>Rysunki ułożenia podłóg</li>
                  <li>
                    {" "}
                    Rysunki sufitów podwieszanych oraz zabudowy g-k oraz zmian
                    kładu ścian działowych
                  </li>
                  <li> Rysunki z rozmieszczeniem punktów elektrycznych</li>
                  <li>
                    {" "}
                    Rysunki z rozmieszczeniem punktów wodno-kanalizacyjnych
                  </li>
                  <li>
                    {" "}
                    Rysunki z oświetlenie w tym profile ledowe i transformatory
                  </li>
                  <li>
                    {" "}
                    Kłady łazienki – czyli rzuty od przodu, na których widać
                    rozmieszczenie płytek i sprzętów;
                  </li>
                  <li>
                    {" "}
                    Rysunki mebli na zamówienie np. kuchni, szaf wnękowych,
                    szafek, komód, stołów
                  </li>
                  <li>
                    {" "}
                    Rysunki z zaznaczeniem kolorów ścian i sufitów,  zaznaczone
                    miejsca, gdzie mają się znajdować tapety, masy dekoracyjne,
                    lustra; rysunki
                  </li>
                  <li>
                    {" "}
                    Spis produktów do kupienia wraz z opisem materiałów, z
                    jakich są wykonane
                  </li>
                  <li>
                    {" "}
                    Kosztorys remontowy z uwzględnieniem wszystkich wycen
                  </li>
                  <li> Projekt nietypowych grafik i dekoracji</li>
                  <br />
                  <Button node="a" href="contact">Zadzwoń/Napisz</Button>

                  
                </div>
              </Col>
            </Row>
          </div>
          <div className="blue-grey darken-2">
            <div className="kropki center white-text">
                  <img src={finger} width="100%"/>
                  </div>
            <Row className="hide-on-med-and-down" />
            <Row className="hide-on-med-and-down" />
            <Row>
              <Col s={12} l={6}>
                <img
                  className="imgCarousel"
                  src="https://media4.giphy.com/media/26FfbM5bbhCdLANW0/giphy.gif"
                  width="100%"
                />
              </Col>
              <Col s={12} l={6}>
                <h3 className="smallHead">
                  Nadzór i doradztwo <Divider />
                </h3>
                <h5 className="left-align smallText">
                  Posiadamy unikalne połączenie doświadczenia w prowadzeniu
                  robót budowlanych oraz firm nie związanych z braną budowlaną,
                  rozmowa z nami przed rozpoczęciem inwestycji pomze oszcować
                  dochodowść takiego przedsięwzięcia.
                </h5>
                <br />
                  <Button node="a" href="contact">Zadzwoń/Napisz</Button>
              </Col>
            </Row>
          </div>
        </Carousel>
      
      </div>
    );
};

export default HomeWnetrza;
