import "materialize-css";
import React, { Component, useEffect } from "react";
import { Button, Col, Divider, Row } from "react-materialize";
import Aos from "aos";
import "aos/dist/aos.css";
import commercial from "../components/svg/commercial.svg";
import noncommercial from "../components/svg/noncommercial.svg";
import other from "../components/svg/other.svg";
import architektura from "./svg/architektura.svg";
import wnetrza from "./svg/wnetrza.svg";
import strony from "./svg/strony.svg";
import modelowanie from "./svg/modelowanie.svg";
import animacje from "./svg/krynica3d.gif";
import wizualizacje from "./svg/wizualizacje.svg";
import { Link } from "react-router-dom";
import services1 from "./svg/services1.svg"
import services2 from "./svg/services2.svg"
import services3 from "./svg/services3.svg"
import services4 from "./svg/services4.svg"

const Portfolio = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  let lang = localStorage.getItem("lang");

  if (lang == "en") return (
  <Row>
    <Row/><Row/><Row/>
 
    <h3 className="left-align white-text">Our services <Divider/></h3>
    <Row>
              <Col s={12} m={10} push="m1">
                <Button node="a" href="architektura" className="clientCard">
                  <div data-aos="fade-left" data-aos-duration="2000">
                    <img src={architektura} width="100%" />
                    <h5>Architectural Design</h5>
                  </div>
                </Button>

                <Button node="a" href="wnetrza" className="clientCard">
                  <div data-aos="fade-down" data-aos-duration="2000">
                    <img src={wnetrza} width="100%" />
                    <h5>Interior Design</h5>
                  </div>
                </Button>

                <Button node="a" href="modelowanie" className="clientCard">
                  <div data-aos="fade-right" data-aos-duration="2000">
                    <img src={modelowanie} width="100%" />
                    <h5>3D Modeling</h5>
                  </div>
                </Button>

                <Row />

                <Button node="a" href="animacje" className="clientCard">
                  {" "}
                  <div data-aos="fade-left" data-aos-duration="2000">
                    <img src={animacje} width="100%" />
                    <h5>Animations</h5>
                  </div>
                </Button>

                <Button node="a" href="wizualizacje" className="clientCard">
                  <div data-aos="fade-up" data-aos-duration="2000">
                    <img src={wizualizacje} width="100%" />
                    <h5>CGI</h5>
                  </div>
                </Button>

                <Button node="a" href="strony" className="clientCard">
                  {" "}
                  <div data-aos="fade-right" data-aos-duration="2000">
                    <img src={strony} width="100%" />
                    <h5>Web design</h5>
                  </div>
                </Button>
              </Col>
              </Row>
              <Row/><Row/>
              <h3 className="white-text left-align">Our design process <Divider/></h3>
              <Row/><Row/>
              <Row>
      <Col s={6} m={2} push="m2">
        <h5 className="white-text">Stage I </h5>
        <div data-aos="fade-right" data-aos-duration="600" className="left-align ">
        <img className="" src={services1} width="100%"/></div>
      </Col>
      <Col s={6} m={2} push="m2">
      <h5 className="white-text">Stage II </h5><div data-aos="fade-right" data-aos-duration="1500" className="left-align ">
        <img className="" src={services2} width="100%"/></div>
      </Col>
      <Col s={6} m={2} push="m2">
      <h5 className="white-text">Stage III </h5><div data-aos="fade-right" data-aos-duration="2200" className="left-align ">
        <img className="" src={services3} width="100%"/></div>
      </Col>
      <Col s={6} m={2} push="m2">
      <h5 className="white-text">Stage IV </h5><div data-aos="fade-right" data-aos-duration="3000" className="left-align ">
        <img className="" src={services4} width="100%"/></div>
      </Col>
    </Row>
  </Row>);
  else
    return (
      <Row>
    <Row/><Row/><Row/><Row/><Row/>
   
    <h5 className="white-text left-align">Nasze usługi <Divider/></h5>
    <Row>
              <Col s={12} m={10} push="m1">
                <Button node="a" href="architektura" className="clientCard">
                  <div data-aos="fade-left" data-aos-duration="2000">
                    <img src={architektura} width="100%" />
                    <h5>Architektura</h5>
                  </div>
                </Button>

                <Button node="a" href="wnetrza" className="clientCard">
                  <div data-aos="fade-down" data-aos-duration="2000">
                    <img src={wnetrza} width="100%" />
                    <h5>Projekty wnętrz</h5>
                  </div>
                </Button>

                <Button node="a" href="modelowanie" className="clientCard">
                  <div data-aos="fade-right" data-aos-duration="2000">
                    <img src={modelowanie} width="100%" />
                    <h5>Modelowanie 3D</h5>
                  </div>
                </Button>

                <Row />

                <Button node="a" href="animacje" className="clientCard">
                  {" "}
                  <div data-aos="fade-left" data-aos-duration="2000">
                    <img src={animacje} width="100%" />
                    <h5>Animacje</h5>
                  </div>
                </Button>

                <Button node="a" href="wizualizacje" className="clientCard">
                  <div data-aos="fade-up" data-aos-duration="2000">
                    <img src={wizualizacje} width="100%" />
                    <h5>Wizualizacje</h5>
                  </div>
                </Button>

                <Button node="a" href="strony" className="clientCard">
                  {" "}
                  <div data-aos="fade-right" data-aos-duration="2000">
                    <img src={strony} width="100%" />
                    <h5>Strony www</h5>
                  </div>
                </Button>
              </Col>
              </Row>
              <Row>
      <Col s={6} m={2} push="m2">
        <h5 className="white-text">Etap I </h5><div data-aos="fade-right" data-aos-duration="500" className="left-align ">
        <img className="" src={services1} width="100%"/></div>
      </Col>
      <Col s={6} m={2} push="m2">
      <h5 className="white-text">Etap II </h5><div data-aos="fade-right" data-aos-duration="1000" className="left-align ">
        <img className="" src={services2} width="100%"/></div>
      </Col>
      <Col s={6} m={2} push="m2">
      <h5 className="white-text">Etap III </h5><div data-aos="fade-right" data-aos-duration="2000" className="left-align ">
        <img className="" src={services3} width="100%"/></div>
      </Col>
      <Col s={6} m={2} push="m2">
      <h5 className="white-text">Etap IV </h5><div data-aos="fade-right" data-aos-duration="3000" className="left-align ">
        <img className="" src={services4} width="100%"/></div>
      </Col>
    </Row>
       
  </Row>
    );
};

export default Portfolio;
