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
import Iframe from 'react-iframe'
const Modelowanie = () => {
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
            3D Modeling - <h5>We create digital models for Architects, Interior Archcitects, Designers and other professionals.</h5>
          <Divider />
        </h3>
        <Row />
        <Iframe url="https://sketchfab.com/models/a85b372a3f8d4a7985caea65ca94932b/embed"
     width="90%"
      // height="100%"
      id="videoIframe"
      className="imgCarousel"
      display="initial"
      position="relative"/>
      
      <Row />
        <h3 className="left-align">
            Architectural drawings, Archicad BIM - <h5>We can digitise your ideas</h5>
          <Divider />
        </h3>
        <Row />
        <Col s={12} m={6} push="m3">
      <img src="https://thumbs.gfycat.com/MerryShadowyAiredale-max-1mb.gif" width="100%"/>
     </Col>
      </div>
    );
  else
    return (
        <div className="white-text">
        <Row />
        <Row />
        <Row />
        <h3 className="left-align">
            3D Modeling - <h5>We create digital models for Architects, Interior Archcitects, Designers and other professionals.</h5>
          <Divider />
        </h3>
        <Row />
        <Iframe url="https://sketchfab.com/models/a85b372a3f8d4a7985caea65ca94932b/embed"
     width="90%"
      // height="100%"
      id="videoIframe"
      className="imgCarousel"
      display="initial"
      position="relative"/>
      
      <Row />
        <h3 className="left-align">
            Architectural drawings, Archicad BIM - <h5>We can digitise your ideas</h5>
          <Divider />
        </h3>
        <Row />
        <Col s={12} m={6} push="m3">
      <img src="https://thumbs.gfycat.com/MerryShadowyAiredale-max-1mb.gif" width="100%"/>
     </Col>
      </div>
    );
};

export default Modelowanie;