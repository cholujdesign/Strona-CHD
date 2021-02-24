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
} from "react-materialize";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  let lang = localStorage.getItem("lang");

  if (lang == "en") return <Row></Row>;
  else
    return (
      <Row className="z-depth-1">
        <Slider
          fullscreen={false}
          options={{
            duration: 500,
            height: 800,
            indicators: false,
            interval: 6000,
          }}
        >
          <Slide
            image={<img alt="" src="https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/kanonicza151.webp" />}
          >
            <Caption placement="right">
              <h3></h3>
              <h5 className="light grey-text text-lighten-3">
                Biuro architektoniczne w samym sercu Krakowa
              </h5>
            </Caption>
          </Slide>
          <Slide
            image={<img alt="" src="https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/rakowicka151.webp" />}
          >
            <Caption placement="left">
              {/* <h3>Left Aligned Caption</h3>
              <h5 className="light grey-text text-lighten-3">
                Here's our small slogan.
              </h5> */}
            </Caption>
          </Slide>
          <Slide
            image={<img alt="" src="https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/ingo1.webp" />}
          >
            <Caption placement="right">
              {/* <h3>Right Aligned Caption</h3>
              <h5 className="light grey-text text-lighten-3">
                Here's our small slogan.
              </h5> */}
            </Caption>
          </Slide>
          <Slide
            image={<img alt="" src="https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/apartament31.webp" />}
          >
            <Caption placement="center">
              {/* <h3>This is our big Tagline!</h3>
              <h5 className="light grey-text text-lighten-3">
                Here's our small slogan.
              </h5> */}
            </Caption>
          </Slide>
        </Slider>

        <Col m={10} push="m1">
          {" "} <Row /> <Row />
          <div data-aos="fade-down" data-aos-duration="2000" className="">
            <h3 className="center-align">
              Kilka słów o nas <Divider />
            </h3>
            <br />
            <Col m={6} className="left-align">
              Biuro Chołuj Design s.c. funkcjonuje w sercu Krakowa od ponad 25
              lat. Nasz zespół posiada doswiadczenie w projektowaniu
              przestrzennym oraz form przemysłowych. Ukoczylismy architekture na
              uczelniach polskich oraz zagranicznych, nasze dodatkowe
              zainteresowania oraz projekty w branżach restauracyjnej,
              artystycznej, IT owocują tworzeniem ciekawych i nowatorskich
              projektów.
            </Col>
            <Col m={6}>
<img src="https://images.unsplash.com/photo-1503387837-b154d5074bd2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80" width="100%"/>

            </Col>
          </div>
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <div data-aos="fade-down" data-aos-duration="2000" className="">
            <h3 className="center-align">
              Oferta
              <Divider />
            </h3>
            <br />
            <Col m={6}>
            <img src="https://images.unsplash.com/photo-1554224154-22dec7ec8818?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" width="100%"/>

            </Col>
            <Col m={6} className="left-align">
              <h5>
                <li>Projekty Architektoniczne</li>
                <br />
                <li>Materiały marketingowe dla inwestycji</li>
                <br />
                <li>Projekty Oswietlenia budynków</li>
                <br />
                <li>Projekty Wnętrz</li>
                <br />
                <li>Realizacje obiektów 'pod klucz' </li>
                <br />
                <li>Obsługa projektowo/designerska firm</li>
                <br />
                <li>Tworzenie bibliotek BIM/3D</li>
                <br />
                <li>Projekty i prototypy mebli oraz oświetlenia</li>
                <br />
                <li>Projekty Ogrodów</li>
                <br />
              </h5>
            </Col>
          </div>
          <Row /> <Row /> <Row /> <Row /> <Row /> <Row />
          <div data-aos="fade-down" data-aos-duration="2000" className="">
            <h3 className="center-align">
              Doświadczenie <Divider />
            </h3>
            <br />
            <Col m={6} className="left-align">
              Zajmujemy się architekturą oraz architekturą wnętrz od ponad 25
              lat. Nasz zespół ma doświadczenie w projektach od małych do
              średnich, nadzorze autorskim oraz kierowaniu budową. Od dekady
              zaczęliśmy łączyć projektowanie przestrzenne z projektowaniem form
              przemysłowych. W zależności od typu i rozmiaru projektu zapraszamy
              do współpracy naszych kolegów po fachu oraz innych zaufanych
              specjalistów.
            </Col>
            <Col m={6}>
            <img src="https://images.unsplash.com/photo-1591588582259-e675bd2e6088?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80" width="100%"/>


            </Col>
          </div>
          <Row /> <Row /> <Row /> <Row /> <Row /> <Row />
          <div data-aos="fade-down" data-aos-duration="2000" className="">
            <h3 className="center-align">
              Filozofia <Divider />
            </h3>
            <br /><Col m={6}>
            <img src="https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" width="100%"/>


            </Col>
            <Col m={6} className="left-align">
              Skupiamy się w pierwszej kolejności nad potrzebami oraz
              oczekiwaniami naszych klientów, każdy projekt jest analizowany
              indywidualnie. Motywem przewodnim w naszej pracy jest
              oddziaływanie światła naturalnego oraz sztucznego na kolorystykę,
              fakture bryly budynku, geometrię wnętrza oraz powiazanie projektu
              z naturá.Duzy nacisk kladziemy na percepcję użytkownika w
              projektowanym obiekcie.{" "}
            </Col>
            
          </div>
        </Col>
      </Row>
    );
};

export default Home;
