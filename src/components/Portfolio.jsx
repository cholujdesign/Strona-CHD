import "materialize-css";
import React, { Component, useEffect } from "react";
import { Button, Col, Divider, Row } from "react-materialize";
import Aos from "aos";
import "aos/dist/aos.css";
import commercial from "../components/svg/commercial.svg";
import noncommercial from "../components/svg/noncommercial.svg";
import other from "../components/svg/other.svg";

import { Link} from "react-router-dom";

const Portfolio = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  let lang = localStorage.getItem("lang");

  if (lang == "en")
    return (
      <Row>
       
      </Row>
    );
  else return   (
    <Row>
      <Row/><Row/><Row/><Row/><Row/>
    <Col m={4} push="0">
  <Link to="commercial" className="">
    <div
      data-aos="fade-down"
      data-aos-duration="2000"
      className="hoverable z-depth-2"
    >
    
      <img src={commercial} alt="" width="100%" />
    </div>
  </Link>
  </Col>
  <Col m={4}push="0">
  <Link to="noncommercial" className="">
    <div
      data-aos="fade-down"
      data-aos-duration="2000"
      className="hoverable z-depth-2"
    >
    
      <img src={noncommercial} alt="" width="100%" />
    </div>
  </Link>
  </Col>
  <Col m={4}push="0">
  <Link to="other" className="">
    <div
      data-aos="fade-down"
      data-aos-duration="2000"
      className="hoverable z-depth-2"
    >
    
      <img src={other} alt="" width="100%" />
    </div>
  </Link>
  </Col>
</Row>

);
};

export default Portfolio;
