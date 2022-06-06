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
import img1 from "./renders/0.png";
import img2 from "./renders/1.png";
import img3 from "./renders/2.png";
import img4 from "./renders/3.png";
import img5 from "./renders/4.jpg";
import img6 from "./renders/5.png";
import img7 from "./renders/6.png";
import img8 from "./renders/7.png";
import img9 from "./renders/8.png";
import img10 from "./renders/9.png";
import img11 from "./renders/10.png";
import img12 from "./renders/11.png";

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
    <img src={img6} width="100%"/>
    <img src={img7} width="100%"/>
    <img src={img8} width="100%"/>
    <img src={img9} width="100%"/>
    <img src={img10} width="100%"/>
    <img src={img11} width="100%"/>
    <img src={img12} width="100%"/>
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
    <img src={img6} width="100%"/>
    <img src={img7} width="100%"/>
    <img src={img8} width="100%"/>
    <img src={img9} width="100%"/>
    <img src={img10} width="100%"/>
    <img src={img11} width="100%"/>
    <img src={img12} width="100%"/>
  </Col>
      <Row />
    </div>
    );
};

export default Wizualizacje;
