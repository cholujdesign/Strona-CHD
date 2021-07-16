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
} from "react-materialize";
import Aos from "aos";
import "aos/dist/aos.css";
import architekturaLogo from "./svg/architekturaLogo.svg";
import wnetrzaLogo from "./svg/wnetrzaLogo.svg";
import wizualizacjeLogo from "./svg/wizualizacjeLogo.svg";
import HomeWnetrza from "./HomeWnetrza";
import HomeArchitektura from "./HomeArchitektura";
import HomeWizualizacje from "./HomeWizualizacje";
import HomeSecond from "./HomeSecond";
import arrowDown from "./svg/down+gif.gif";
import img1 from "./svg/Rakowicka15A.webp";
import img2 from "./svg/Rakowicka15budowa.webp";
import img3 from "./svg/Cienie.webp";
import img4 from "./svg/wizualizacjeLogo.svg";
import img5 from "./svg/wizualizacjeLogo.svg";
import img6 from "./svg/wizualizacjeLogo.svg";
import img7 from "./svg/wizualizacjeLogo.svg";

const HomeFirst = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  let lang = localStorage.getItem("lang");

  if (lang == "en") return <Row></Row>;
  else
    return (
      <div>
        <div className="homeFirstimgDiv">
          <div className="homeFirstimg">
            <Slider
              className="cliderHome"
              fullscreen={true}
              options={{
                duration: 500,
                indicators: false,
                interval: 6000,
              }}
            >
              <Slide image={<img alt="" src={img1} />}>
                <Caption placement="right">
                  <div className="homeCaption hide-on-small-only">
                    <h3>
                      Projektowanie online
                      <Divider />
                    </h3>
                    <div className="light grey-text text-lighten-3 ">
                      <br /> Prześlij nam rzuty projektowanej przestrzeni
                      <br /> Porozmawiaj z nami
                      <br /> W 1-3 tygodnie przygotujemy koncpecję
                      <br /> Następnie wprowadzimy zmiany zasugerowane przez
                      klienta
                      <br /> Na koniec przygotujemy pełny projekt wraz
                      <br />z rysunkami technicznymi i zestawieniem wyposaenia
                    </div>{" "}
                  </div>
                </Caption>
              </Slide>
              <Slide image={<img alt="" src={img2} />}>
                <Caption placement="right">
                  <div className="homeCaption hide-on-small-only">
                    <h3>
                      Wieloletnie doświadczenie
                      <Divider />
                    </h3>
                    <div className="light grey-text text-lighten-3 ">
                      <br /> Zajmujemy się architekturą oraz architekturą wnętrz
                      od ponad 25 lat.
                      <br />
                      Nasz zespół ma doświadczenie w projektach od małych do
                      średnich, <br />
                      nadzorze autorskim oraz kierowaniu budową. Od dekady
                      zaczęliśmy łączyć <br />
                      projektowanie przestrzenne z projektowaniem form
                      przemysłowych. <br />
                      W zależności od typu i rozmiaru projektu zapraszamy do
                      współpracy <br />
                      naszych kolegów po fachu oraz innych zaufanych
                      specjalistów.
                    </div>{" "}
                  </div>
                </Caption>
              </Slide>
              <Slide image={<img alt="" src={img3} />}>
                <Caption placement="right">
                  <div className="homeCaption hide-on-small-only">
                    <h3>
                      Filozofia
                      <Divider />
                    </h3>
                    <div className="light grey-text text-lighten-3 ">
                      <br /> Skupiamy się w pierwszej kolejności nad potrzebami
                      <br /> i oczekiwaniami naszych klientów, każdy projekt
                      jest analizowany
                      <br /> indywidualnie. Motywem przewodnim w naszej pracy
                      jest oddziaływanie
                      <br /> światła naturalnego oraz sztucznego na kolorystykę,
                      fakture bryly
                      <br /> budynku, geometrię wnętrza oraz powiazanie projektu
                      z naturá.Duzy
                      <br /> nacisk kladziemy na percepcję użytkownika w
                      projektowanym obiekcie.
                    </div>
                  </div>
                </Caption>
              </Slide>
            </Slider>{" "}
          </div>
        </div>
        <Row className="">
          <Col s={12} m={6} l={4}>
            <Card className="homeFirstcard white-text">
              {" "}
              <Row />
              <h4>
                Pracownia projektowa CHD <Divider />
              </h4>
              <Row />
              <Row>
                <Col s={4}>
                  <img src={architekturaLogo} width="100%" />
                </Col>
                <Col s={8}>
                  <div data-aos="fade-up" data-aos-duration="1000">
                    <h5>
                      Architektura <Divider />
                    </h5>
                    Elastyczny zespół, który poradzi sobie z różnymi projekatmi.
                    <br />
                    <br />
                    {/* <a className="white-text" href="#arch" id="">
                      WIECEJ INFORMACJI
                    </a> */}
                  </div>
                </Col>
              </Row>
              <Row>
                <Col s={4}>
                  <img src={wnetrzaLogo} width="100%" />
                </Col>
                <Col s={8}>
                  <div data-aos="fade-up" data-aos-duration="2000">
                    <h5>
                      Wnętrza <Divider />
                    </h5>
                    Wnętrza prywatne, komercyjne w pełnym zakresie, wraz z
                    nadzorem.
                    <br />
                    <br />
                    {/* <a className="white-text" href="#int" id="">
                      WIECEJ INFORMACJI
                    </a> */}
                  </div>
                </Col>
              </Row>
              <Row>
                <Col s={4}>
                  <img src={wizualizacjeLogo} width="100%" />
                </Col>
                <Col s={8}>
                  <div data-aos="fade-up" data-aos-duration="3000">
                    <h5>
                      Wizualizacje <Divider />
                    </h5>
                    Wizualizacje, Animacje, Interaktywne modele 3D VR, obiekty
                    BIM
                    <br />
                    <br />
                    {/* <a className="white-text" href="#vis" id="">
                      WIECEJ INFORMACJI
                    </a> */}
                  </div>
                </Col>
              </Row>
              <Row>
                <img src={arrowDown} width="50%" />
              </Row>
            </Card>
          </Col>
        </Row>
        <div className="divHome1" />
        <div data-aos="fade-down" data-aos-duration="1000">
          <HomeSecond />
        </div>
        {/* <div
          className="divHome2"
          id="vis"
          onclick="window.location.hash='vis'; "
        /> */}
        <div data-aos="fade-left" data-aos-duration="2000">
          <HomeWizualizacje />
        </div>
        {/* <div
          className="divHome3 "
          id="int"
          onclick="window.location.hash='int'; "
        /> */}
        <div data-aos="fade-left" data-aos-duration="2000">
          <HomeWnetrza />
        </div>
        {/* <div
          className="divHome4"
          id="arch"
          onclick="window.location.hash='arch'; "
        /> */}
        <div data-aos="fade-left" data-aos-duration="2000">
          <HomeArchitektura />
        </div>
      </div>
    );
};

export default HomeFirst;
