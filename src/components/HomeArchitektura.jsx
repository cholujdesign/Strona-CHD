import "materialize-css";
import React, { useEffect } from "react";
import {
  Button,
  Col,
  Divider,
  Row,
  Carousel,
} from "react-materialize";
import Aos from "aos";
import "aos/dist/aos.css";
import img1 from "./svg/bonarka.webp";
import img2 from "./svg/wieckowice.png";
import img3 from "./svg/drewniane.jpg";
import finger from "./svg/finger (1).svg";

const HomeWnetrza = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  let lang = localStorage.getItem("lang");

  if (lang == "en")
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
              <img src={finger} width="100%" />
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
                  Residential, service, mixed-use buildings
                  <Divider />
                </h3>
                <h5 className="left-align smallText">
                  <li> Obtaining Development Conditions </li>
                  <br />
                  <li> Design of large cubature buildings </li>
                  <br />
                  <li> Quick Conclusion Preparation </li>
                  <br />
                  <li>
                    Preparation of a complete project (requires arrangements
                    regarding deadlines
                  </li>
                  <br />
                  <li> Seals, building complexes, housing estates </li>
                  <br />
                  <li>
                    Documentation needed by investors, investment funds, banks
                  </li>
                  <br />

                  <Button node="a" href="portfolio">
                    Examples
                  </Button>
                </h5>
              </Col>
            </Row>
          </div>
          <div className="cyan darken-3">
            <div className="kropki center white-text">
              <img src={finger} width="100%" />
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
                  Single-family houses <Divider />
                </h3>
                <h5 className="left-align smallText">
                  <li> Obtaining Development/Planning Conditions </li>
                  <br />
                  <li> Garden design </li>
                  <br />
                  <li> Quick Conceptual Design </li>
                  <br />
                  <li>
                    Preparation of a complete project (requires arrangements
                    regarding deadlines
                  </li>
                  <br />
                  <li> Preparation of the construction project </li>

                  <br />
                </h5>
              </Col>
            </Row>
          </div>
          <div className="grey darken-3">
            <div className="kropki center white-text">
              <img src={finger} width="100%" />
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
                  Frame houses <Divider />
                </h3>
                <h5 className="left-align smallText">
                  <li>
                    {" "}
                    We have experience in designing energy-saving houses made of
                    wood or wooden structures{" "}
                  </li>{" "}
                  <br />
                  <Button node="a" href="portfolio">
                    Examples
                  </Button>
                </h5>
              </Col>
            </Row>
          </div>
        </Carousel>
      </div>
    );
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
              <img src={finger} width="100%" />
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

                  <Button node="a" href="portfolio">
                    Przyklady
                  </Button>
                </h5>
              </Col>
            </Row>
          </div>
          <div className="cyan darken-3">
            <div className="kropki center white-text">
              <img src={finger} width="100%" />
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
              <img src={finger} width="100%" />
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
                  <li>
                    Posiadamy doświadczenie w projektowaniu energo-oszczędnych
                    domów wykonanych z drewna lub drewnianej konstrukcji
                  </li>
                  <br />

                  <Button node="a" href="portfolio">
                    Przyklad
                  </Button>
                </h5>
              </Col>
            </Row>
          </div>
        </Carousel>
      </div>
    );
};

export default HomeWnetrza;
