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

const Portfolio = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  let lang = localStorage.getItem("lang");

  if (lang == "en") return <Row>
      <Row>
          <Col s={12} m={10} push="m1">
           
           
              <Button className="clientCard"> 
              <img src={architektura} width="100%" />
              <h5>Architectural Design</h5>
              </Button>
           
              <Button className="clientCard"> 
              <img src={wnetrza} width="100%" />
              <h5>Interior Design</h5>
              </Button>
          
              <Button className="clientCard"> 
              <img src={modelowanie} width="100%" />
              <h5>3D Modeling</h5>
              </Button>
        
            <Row/>
           
              <Button className="clientCard"> 
              <img src={animacje} width="100%" />
              <h5>Animations</h5>
              </Button>
           
              <Button className="clientCard"> 
              <img src={wizualizacje} width="100%" />
              <h5>CGI</h5>
              </Button>
              
              <Button className="clientCard"> 
              <img src={strony} width="100%" />
              <h5>Web design</h5>
              </Button>
          </Col>
        </Row>
       
  </Row>;
  else
    return (
      <Row>
       <div className="hide-on-small-only"><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/></div>
        <Col  m={2} push="m3">
          <Link  to="commercial">
            <div
              data-aos="fade-down"
              data-aos-duration="2000"
              className="hoverable z-depth-2"
            >
              <img className="portfolio" src={commercial} alt="" width="100%" />
            </div>
          </Link>
        </Col>
        <Col m={2} push="m3">
          <Link to="noncommercial" className="">
            <div
              data-aos="fade-down"
              data-aos-duration="2000"
              className="hoverable z-depth-2"
            >
              <img className="portfolioo" src={noncommercial} alt="" width="100%" />
            </div>
          </Link>
        </Col>
        <Col m={2} push="m3">
          <Link to="other" className="">
            <div
              data-aos="fade-down"
              data-aos-duration="2000"
              className="hoverable z-depth-2"
            >
              <img className="portfoliooo" src={other} alt="" width="100%" />
            </div>
          </Link>
        </Col>
      </Row>
    );
};

export default Portfolio;
