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
import img1 from "./svg/bonarka.webp";
import img2 from "./svg/wieckowice.png";
import img3 from "./svg/drewniane.jpg";
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
          carouselId="Carousel-3"
          className="white-text center"
          options={{
            indicators: false,
            fullWidth: true,
           
          }}
        >
          <div className="grey darken-1">
            <div className="kropki center white-text">
                  <img src={finger} width="100%"/>
                  </div>
            <Row className="hide-on-med-and-down" />
            <Row className="hide-on-med-and-down" />
            <Row className="hide-on-med-and-down" />
            <Row className="hide-on-med-and-down" />
            <Row>
              <Col s={12} l={6}>
                <img className="imgCarousel" src={img1} width="100%" />
              </Col>
              <Col s={12} l={6}>
                <h3 className="smallHead">
                  Budynki mieszkalne, usługowe, mieszkalno-usługowe <Divider />
                </h3>
                <h5 className="left-align smallText">
                  <li>Uzyskianie Warunków Zabudowy</li>
                  <br />
                  <li>Projektowanie dużych kubatorowo budynków</li>
                  <br />
                  <li>Szybkie przygotowanie koncpecji</li>
                  <br />
                  <li>
                    Przygotowanie pełnego projektu (wymaga ustaleń dotyczących
                    terminów realizacji
                  </li>
                  <br />
                  <li>Plomby, kompleksy budynków, osiedla</li>
                  <br />
                  <li>
                    Dokumentacja potrzebna inwestorom, funduszom inwestycyjnym,
                    bankom
                  </li>
                  <br />

                  <Button node="a" href="portfolio">Przyklady</Button>
                </h5>
              </Col>
            </Row>
          </div>
          <div className="cyan darken-3">
            <div className="kropki center white-text">
                  <img src={finger} width="100%"/>
                  </div>
            <Row className="hide-on-med-and-down" />
            <Row className="hide-on-med-and-down" />
            <Row className="hide-on-med-and-down" />
            <Row className="hide-on-med-and-down" />
            <Row>
              <Col s={12} l={6}>
                <img className="imgCarousel" src={img2} width="100%" />
              </Col>
              <Col s={12} l={6}>
                <h3 className="smallHead">
                  Domy jednorzodzinne <Divider />
                </h3>
                <h5 className="left-align smallText">
                  <li>Uzyskianie Warunków Zabudowy</li>
                  <br />
                  <li>Projektowanie ogrodów</li>
                  <br />
                  <li>Szybkie przygotowanie koncpecji</li>
                  <br />
                  <li>
                    Przygotowanie pełnego projektu (wymaga ustaleń dotyczących
                    terminów realizacji
                  </li>
                  <br />
                  <li>Przygotowanie projektu budowlanego</li>

                  <br />

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
                <img className="imgCarousel" src={img3} width="100%" />
              </Col>
              <Col s={12} l={6}>
                <h3 className="smallHead">
                  Domy szkieletowe <Divider />
                </h3>
                <h5 className="left-align smallText">
                  <li>Posiadamy doświadczenie w projektowaniu energo-oszczędnych domów wykonanych z drewna lub drewnianej konstrukcji</li>
                  <br />
                 

                  <Button node="a" href="portfolio">Przyklad</Button>
                </h5>
              </Col>
            </Row>
          </div>
        </Carousel>
      </div>
    );
};

export default HomeWnetrza;
