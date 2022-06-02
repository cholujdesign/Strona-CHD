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
import img1 from "./svg/kanonicza.webp";
import img2 from "./svg/Rakowicka15C.webp";
import img3 from "./svg/Rakowicka15A.webp";
import img4 from "./svg/HOUSE_QOF35AHouseQ.jpeg";
import img5 from "./svg/koscielne.webp";
import finger from "./svg/finger (1).svg";

const Wizualizacje = () => {
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
            Architectural Renders / CGI
          <Divider />
        </h3>
        <Row /><Row />
        <Row />
        <Col s={12} m={6} push="m3">
    <img src={img1} width="100%"/>
    <img src={img2} width="100%"/>
    <img src={img3} width="100%"/>
    <img src={img4} width="100%"/>
    <img src={img5} width="100%"/>
    </Col>
        <Row />
      </div>
    );
  else
    return (
      <div className="white-text">
      <Row />
      <Row />
 <Row />
      <h3 className="left-align">
         Wizualizacje
        <Divider />
      </h3>
      <Row /><Row />
      <Row />
      <Col s={12} m={6} push="m3">
  <img src={img1} width="100%"/>
  <img src={img2} width="100%"/>
  <img src={img3} width="100%"/>
  <img src={img4} width="100%"/>
  <img src={img5} width="100%"/>
  </Col>
      <Row />
    </div>
    );
};

export default Wizualizacje;
