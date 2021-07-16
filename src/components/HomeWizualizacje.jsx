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
  Carousel
} from "react-materialize";
import Aos from "aos";
import "aos/dist/aos.css";
import architekturaLogo from "./svg/logo.svg";
import wnetrzaLogo from "./svg/logo.svg";
import wizualizacjeLogo from "./svg/logo.svg";
import clientCard1 from "./svg/clientCard1.svg";
import clientCard2 from "./svg/clientCard2.svg";
import clientCard3 from "./svg/clientCard3.svg";
import Animacje from "./svg/wnetrzaLogo.svg"

const HomeWnetrza = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  let lang = localStorage.getItem("lang");

  if (lang == "en") return <Row></Row>;
  else
    return (
      <div>
        <Carousel
          carouselId="Carousel-1"
          className="white-text center"
          options={{
            duration: 20,         
            indicators: true,
            dist: 21,
            shift: 12,
            padding: 1,
            numVisible: 2,
            fullWidth: true,
            noWrap: true,
          }}
        >
          <div className="teal">
          <div className="kropki center white-text">
                  Kliknij kropke 
                  </div>
            <Row>
              <Col s={12} l={6}>
                <img className="" src="https://img1.picmix.com/output/stamp/thumb/7/1/2/1/1601217_6c081.gif" width="100%" />
              </Col>
              <Col s={12} l={6}>
                <h3>Animacje <Divider/></h3>
                <h5 className="left-align">
                  Fotorealistyczne animacje pomogą pokazać klientowi dodatkowe aspekty projektowanych przestrzeni, które trudno pokazać poprzez wizualizacje 2D.
                 <br/>
                 Wykonujemy animacje mniędzyinnymi:
                  <li>Budynków wielorodzinnych</li>
                  <li>Budynków jednorodzinnych</li>
                  <li>Budynków wolnostojacych</li>
                  <li>Elewacji</li>
                  <li>Wnętrz</li>
                  
                  <br/>
                   
                  <br/><br/><br/>
                  <Button>Przyklady na Youtube</Button>
                </h5>
              </Col>
            </Row>
          </div>
          <div className="teal darken-3">
          <div className="kropki center white-text">
                  Kliknij kropke 
                  </div>
            <Row>
              <Col s={12} l={6}>
                <img className="" src="https://img1.picmix.com/output/stamp/thumb/7/1/2/1/1601217_6c081.gif" width="100%" />
              </Col>
              <Col s={12} l={6}>
                <h3>Wizualizacje <Divider/></h3>
                <h5 className="center">
                Skupiamy się na tym, aby nasze wizualizacje pokazywały najwazniejsze aspekty projektu.
             
                  <br/>
                   
                  <br/><br/><br/>
                  <Button>przyklady na youtube</Button>
                </h5>
              </Col>
            </Row>
          </div>
          <div className="grey darken-3">
          <div className="kropki center white-text">
                  Kliknij kropke 
                  </div>
            <Row>
              <Col s={12} l={6}>
                <img className="" src="https://img1.picmix.com/output/stamp/thumb/7/1/2/1/1601217_6c081.gif" width="100%" />
              </Col>
              <Col s={12} l={6}>
                <h3>Modele 3D <Divider/></h3>
                <h5 className="center">
                <li>Fotorealistyczne modele budynków i wnętrz</li>
                <li>Modele budynków i wnętrz dla wykonaców</li>
                <li>Modele budynków i wnętrz do zamieszczenia na stronie</li>
                 
                  <br/>
                   
                  <br/><br/><br/>
                  <Button>przyklady na youtube</Button>
                </h5>
              </Col>
            </Row>
          </div>
          <div className="teal lighten-2">
          <div className="kropki center white-text">
                  Kliknij kropke 
                  </div>
            <Row>
              <Col s={12} l={6}>
                <img className="" src="https://img1.picmix.com/output/stamp/thumb/7/1/2/1/1601217_6c081.gif" width="100%" />
              </Col>
              <Col s={12} l={6}>
                <h3>Strony internetowe, marketing <Divider/></h3>
                <h5 className="center">
                  <li>Przygotowanie stron internetowych w celu sprzedazy mieszkań i domów</li>
                  <li>Przygotowanie materiałów marketingowych w celu sprzedazy mieszkań i domów </li>
                
                  <br/>
                   
                  <br/><br/><br/>
                  <Button>przyklady na youtube</Button>
                </h5>
              </Col>
            </Row>
          </div>
   </Carousel>
      </div>
    );
};

export default HomeWnetrza;
