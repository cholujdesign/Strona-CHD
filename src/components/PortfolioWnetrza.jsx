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
import Animacje from "./svg/wnetrzaLogo.svg";
import img1 from "./svg/kanonicza.webp";
import img2 from "./svg/Rakowicka15C.webp";
import img3 from "./svg/Rakowicka15A.webp";
import img4 from "./svg/HOUSE_QOF35AHouseQ.jpeg";
import img5 from "./svg/koscielne.webp";
import finger from "./svg/finger (1).svg";
import Noncommercial from "./Noncommercial";

const HomeWnetrza = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  let lang = localStorage.getItem("lang");

  if (lang == "en")
    return (
      <div className="white-text">
        <Row />
        <Row />
        <Row />
        <h3 className="left-align">
          Interior Architecture
          <Divider />
        </h3>
        <Row />
        <Row>
          <Col s={12} m={2} push="m1">
            <Card className="cyan darken-3">
              <Row>
                <img className="" src={img2} width="100%" />

                <h5 className="">
                  Private houses/apartments <Divider />
                </h5>
                <div
                  data-aos="fade-down"
                  data-aos-duration="2000"
                  className="left-align "
                >
                  <li>All RIBA Stages</li>
                  <li> Personal design, fit for the client </li>
                  <li> Garden design </li>

                  <li> Quick Conceptual Design </li>

                  <li>Preparation of a complete project</li>
                </div>
              </Row>
            </Card>
          </Col>
          <Col s={12} m={2} push="m1">
            <Card className="grey darken-3">
              <Row>
                <img className="" src={img3} width="100%" />

                <h5 className="">
                  Commercial houses/apartments <Divider />
                </h5>
                <div
                  data-aos="fade-down"
                  data-aos-duration="2000"
                  className="left-align "
                >
                  <li>All RIBA Stages</li>
                  <li> Personal design, fit for the client </li>
                  <li> Garden design </li>
                  <li>Business analysis</li>
                  <li> Quick Conceptual Design </li>
                  <li>Preparation of a complete project</li>
                </div>
              </Row>
            </Card>
          </Col>
          <Col s={12} m={2} push="m1">
            <Card className="brown darken-3">
              <Row>
                <img className="" src={img1} width="100%" />

                <h5 className="">
                  Restaurants and cafes
                  <Divider />
                </h5>
                <div
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  className="left-align "
                >
                  <li>All RIBA Stages</li>
                  <li>From concept to handover</li>
                  <li>Flexible, interdisciplinary team</li>
                  <li>Large experience in working with the industry</li>
                </div>
              </Row>
            </Card>
          </Col>
          <Col s={12} m={2} push="m1">
            <Card className="green darken-3">
              <Row>
                <img
                  className=""
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnc1Rgg7JCE1L-OOnEUEMCNZ8eK4TTXGJevpXFBA4O_Uri7f4rPn48uWGkkb7dahVikBM&usqp=CAU"
                  width="100%"
                />

                <h5 className="">
                  Commercial buildings <Divider />
                </h5>
                <div
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  className="left-align "
                >
                  <li>Business analysis</li>
                  <li>Conceptual design</li>
                  <li>Technical design</li>
                </div>
              </Row>
            </Card>
          </Col>
          <Col s={12} m={2} push="m1">
            <Card className="orange darken-3">
              <Row>
                <img className="" src={img5} width="100%" />

                <h5 className="">
                  Other
                  <Divider />
                </h5>
                <div
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  className="left-align "
                >
                  <li>lamps</li>
                  <li> furniture</li>
                  <li> places of worship</li>
                </div>
              </Row>
            </Card>
          </Col>
        </Row>

        <h3 className="left-align">
          Examples:
          <Divider />
        </h3>
        <Noncommercial />
      </div>
    );
  else
    return (
      <div className="white-text">
        <Row />
        <Row />
        <Row />
        <h3 className="left-align">
          Architektura wnętrz
          <Divider />
        </h3>
        <Row />
        <Row>
          <Col s={12} m={2} push="m1">
            <Card className="cyan darken-3">
              <Row>
                <img className="" src={img2} width="100%" />

                <h5 className="">
                  Prywatne domy i apartamenty <Divider />
                </h5>
                <div
                  data-aos="fade-down"
                  data-aos-duration="2000"
                  className="left-align "
                >
                  <li> Personalizacja każdego projektu </li>
                  <li> Projekt ogrodu </li>
                  <li> Projekt Koncepcyjny </li>
                  <li>Projekt techniczny</li>
                </div>
              </Row>
            </Card>
          </Col>
          <Col s={12} m={2} push="m1">
            <Card className="grey darken-3">
              <Row>
                <img className="" src={img3} width="100%" />

                <h5 className="">
                  Ddomy i apartamenty na wynajem <Divider />
                </h5>
                <div
                  data-aos="fade-down"
                  data-aos-duration="2000"
                  className="left-align "
                >
                  <li> Personalizacja każdego projektu </li>
                  <li> Projekt ogrodu </li>
                  <li> Projekt Koncepcyjny </li>
                  <li>Projekt techniczny</li>
                </div>
              </Row>
            </Card>
          </Col>
          <Col s={12} m={2} push="m1">
            <Card className="brown darken-3">
              <Row>
                <img className="" src={img1} width="100%" />

                <h5 className="">
                  Restauracje i kawiarnie
                  <Divider />
                </h5>
                <div
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  className="left-align "
                >
                  <li>Od koncepcji do budowy</li>
                  <li>Eleastyczny, interdyscyplinarny zespół</li>
                  <li>Duże doświadczenie w branży</li>
                </div>
              </Row>
            </Card>
          </Col>
          <Col s={12} m={2} push="m1">
            <Card className="green darken-3">
              <Row>
                <img
                  className=""
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnc1Rgg7JCE1L-OOnEUEMCNZ8eK4TTXGJevpXFBA4O_Uri7f4rPn48uWGkkb7dahVikBM&usqp=CAU"
                  width="100%"
                />

                <h5 className="">
                  Budynki komercyjne <Divider />
                </h5>
                <div
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  className="left-align "
                >
                  <li> Analiza biznesowa każdego projektu </li>
                  <li> Projekt Koncepcyjny </li>
                  <li>Projekt techniczny</li>
                </div>
              </Row>
            </Card>
          </Col>
          <Col s={12} m={2} push="m1">
            <Card className="orange darken-3">
              <Row>
                <img className="" src={img5} width="100%" />

                <h5 className="">
                  Inne
                  <Divider />
                </h5>
                <div
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  className="left-align "
                >
                  <li> Projekty i prototypy mebli </li>
                  <li> Projekty i prototypy oświetlenia </li>
                  <li>Wnętrza sakralne</li>
                </div>
              </Row>
            </Card>
          </Col>
        </Row>

        <h3 className="left-align">
          Examples:
          <Divider />
        </h3>
        <Noncommercial />
      </div>
    );
};

export default HomeWnetrza;
