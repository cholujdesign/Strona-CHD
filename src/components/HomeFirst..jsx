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
          <img className="homeFirstimg z-depth-2" src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
        </div>
        <Row className="">
         
          <Col s={12} m={6} l={4}>
            <Card className="homeFirstcard white-text"> <Row/> <Row/>
              <h4>Pracownia projektowa CHD <Divider/></h4>
              <br/><br/><br/>
              <Row>
                <Col s={4} >
                   <img src={architekturaLogo} width="100%"/>
                </Col>
                <Col s={8} >
                   <h5>Architektura <Divider/></h5>
                  
                   lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                   <br/><br/>
                   <a className="white-text">WIECEJ INFORMACJI</a>
                </Col>
              </Row>
              <Row>
                <Col s={4} >
                   <img src={wnetrzaLogo} width="100%"/>
                </Col>
                <Col s={8} >
                   <h5>Wnętrza <Divider/></h5>
                  
                   lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                   <br/><br/>
                   <a className="white-text">WIECEJ INFORMACJI</a>
                </Col>
              </Row>
              <Row>
                <Col s={4} >
                   <img src={wizualizacjeLogo} width="100%"/>
                </Col>
                <Col s={8} >
                   <h5>Wizualizacje <Divider/></h5>
                  
                   lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                   <br/><br/>
                   <a className="white-text">WIECEJ INFORMACJI</a>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    );
};

export default HomeFirst;
