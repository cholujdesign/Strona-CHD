import "materialize-css";
import React, { Component, useEffect } from "react";
import { Button, Col, Divider, Row, Card, CardTitle } from "react-materialize";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import arch from "../components/svg/arch.svg";
import obsluga from "../components/svg/obsluga.svg";
import other2 from "../components/svg/other2.svg";
import marketing from "../components/svg/marketing.svg";
import interrior from "../components/svg/interrior.svg";
import bim from "../components/svg/bim.svg";

const Offer = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  let lang = localStorage.getItem("lang");

  if (lang == "en") return <Row></Row>;
  else
    return (
      <Row className="">
        <Col m="10" push="m1">
          <div className="hide-on-small-only">
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            className="hoverable z-depth-2"
          >
            <Col m={10} s={12} push="m1">
              <Card
                actions={[
                  <a className="black-text" key="1" href="contact">
                    Wyślij zapytanie ofertowe
                  </a>,
                ]}
                header={<CardTitle image={arch} />}
                horizontal
              >
                <h5>
                  Projekt Architektoniczny <Divider />
                </h5>
                <div className="left-align">
                  Oferujemy przygotowanie projektu wnętrz prywatnych oraz
                  komercyjnych w pełnym zakresie, wraz z nadzorem. Zajmujemy się
                  koordynacją branżystów oraz mnijeszymi formami
                  architektonicznymi takimi jak np. elewacje budynków
                  historycznych(renowacja, oświetlenie, przebudowa).
                </div>{" "}
              </Card>
            </Col>
          </div>
          <Row />
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            className="hoverable z-depth-2"
          >
            <Col m={10} s={12} push="m1">
              <Card
                actions={[
                  <a className="black-text" key="1" href="contact">
                    Wyślij zapytanie ofertowe
                  </a>,
                ]}
                header={<CardTitle image={interrior} />}
                horizontal
              >
                <h5>
                  Projekt Wnętrz <Divider />
                </h5>
                <div className="left-align">
                  Oferujemy przygotowanie projektu wnętrz prywatnych oraz
                  komercyjnych w pełnym zakresie, wraz z nadzorem.
                </div>{" "}
              </Card>
            </Col>
          </div>
          <Row />
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            className="hoverable z-depth-2"
          >
            <Col m={10} s={12} push="m1">
              <Card
                actions={[
                  <a className="black-text" key="1" href="contact">
                    Wyślij zapytanie ofertowe
                  </a>,
                ]}
                header={<CardTitle image={bim} />}
                horizontal
              >
                <h5>
                  Model 3D Biblioteka BIM <Divider />
                </h5>
                <div className="left-align">
                  Współpracujemy z producentami mebli, oświetlenia oraz linii
                  technologicznych w zakresie tworzenia modeli 3d , prezentacji
                  wirtualnych oraz bibliotek BIM produktów.
                </div>{" "}
              </Card>
            </Col>
          </div>{" "}
          <Row />
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            className="hoverable z-depth-2"
          >
            <Col m={10} s={12} push="m1">
              <Card
                actions={[
                  <a className="black-text" key="1" href="contact">
                    Wyślij zapytanie ofertowe
                  </a>,
                ]}
                header={<CardTitle image={obsluga} />}
                horizontal
              >
                <h5>
                  Obsługa Firm <Divider />
                </h5>
                <div className="left-align">
                  Świadczymy usługi w zakresie doradztwa
                  architektoniczno-projektowego. W skład pakietów oferowanych
                  przez nas wchodzą:
                  <br />- konsultacje
                  <br />- szkice projektowe
                  <br /> - rysunki 2D
                  <br /> - projekt przygotowany w technologii BIM
                  <br /> - przedstawicielstwo inwestora w kontakcie z oraz
                  nadzorze: branżystów, producentów mebli, oświetlenia,
                  konserwatorem itp.
                </div>{" "}
              </Card>
            </Col>
          </div>
          <Row />
          <Row />
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            className="hoverable z-depth-2"
          >
            <Col m={10} s={12} push="m1">
              <Card
                actions={[
                  <a className="black-text" key="1" href="contact">
                    Wyślij zapytanie ofertowe
                  </a>,
                ]}
                header={<CardTitle image={marketing} />}
                horizontal
              >
                <h5>
                  Materiały Marketingowe <Divider />
                </h5>
                <div className="left-align">
                  Przygotowujemy pełny zestaw materiałów marketingów potrzebnych
                  przy sprzedaży nieruchomości:
                  <li>Interaktywny model 3d</li>
                  <li>Wizualizacje</li>
                  <li>Animacje</li>
                  <li>Strony internetowe (React)</li>
                  <li>Materiały do druku</li>
                </div>{" "}
              </Card>
            </Col>
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            className="hoverable z-depth-2"
          >
            <Col m={10} s={12} push="m1">
              <Card
                actions={[
                  <a className="black-text" key="1" href="contact">
                    Wyślij zapytanie ofertowe
                  </a>,
                ]}
                header={<CardTitle image={other2} />}
                horizontal
              >
                <h5>
                  Inne <Divider />
                </h5>
                <div className="left-align">
                  Zajmujemy się również:
                  <br />
                  -wykonywaniem inwestycji 'pod klucz'
                  <br />
                  -projektami oświetlenia
                  <br />
                  -projektami znaków graficznych
                </div>{" "}
              </Card>
            </Col>
          </div>
        </Col>
      </Row>
    );
};

export default Offer;
