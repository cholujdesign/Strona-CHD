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
import Iframe from 'react-iframe'

import gif from "./svg/gifstrona.gif"
import img1 from "./svg/kanonicza.webp"
import img2 from "./svg/Rakowicka15A.webp"
import img3 from "./svg/Rakowicka15C.webp"
import img4 from "./svg/wizualizacjeLogo.svg"
import img5 from "./svg/wizualizacjeLogo.svg"
import img6 from "./svg/wizualizacjeLogo.svg"
import img7 from "./svg/wizualizacjeLogo.svg"

import finger from "./svg/finger (1).svg"

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
          className="white-text center "
          options={{
            fullWidth: true,  
          }}
        >
          <div className="teal">
            
          <div className="kropki center white-text">
                  <img src={finger} width="100%"/>
                  </div>
            <Row className="hide-on-med-and-down"/>
            <Row className="hide-on-med-and-down"/>
            <Row className="hide-on-med-and-down"/>
            <Row className="hide-on-med-and-down"/>
            <Row>
              <Col s={12} l={6}>
              <Iframe url="https://www.youtube.com/embed/w7sNBxkFw8w"
        width="90%"
        // height="100%"
        id="videoIframe"
        className="imgCarousel"
        display="initial"
        position="relative"/>
              </Col>
              <Col s={12} l={6}>
                <h3 className="smallHead">Animacje <Divider/></h3>
                <h5 className="left-align smallText">
                  Fotorealistyczne animacje pomogą pokazać klientowi dodatkowe aspekty projektowanych przestrzeni, które trudno pokazać poprzez wizualizacje 2D.
                 <br/>
                 Wykonujemy animacje mniędzyinnymi:
                  <li className="textWizualizacje">Budynków wielorodzinnych</li>
                  <li className="textWizualizacje">Budynków jednorodzinnych</li>
                  <li className="textWizualizacje">Budynków wolnostojacych</li>
                  <li className="textWizualizacje" >Elewacji</li>
                  <li className="textWizualizacje">Wnętrz</li>
                  <br/>
                 
                  <Button large>Przyklady na Youtube</Button>
                </h5>
              </Col>
            </Row>
          </div>
          <div className="teal darken-3">
          <div className="kropki center white-text">
                  <img src={finger} width="100%"/>
                  </div>
            <Row>
              <Col s={12} l={12}>
                <Row/>
              <Slider
              fullscreen={true}
              className=""
              options={{
                duration: 500,
                indicators: false,
                interval: 3000,
                
              }}
            >
              <Slide image={<img className="sliderWizualziacje" alt="" src={img1} />}>
              <Caption placement="right">
                  <div className="" >
                    <h3>
                      Wnętrza komercyjne
                      <Divider/>
      </h3>
                    </div>
                </Caption>
              </Slide>
              <Slide image={<img className="sliderWizualziacje" alt="" src={img2} />}>
              <Caption placement="right">
                  <div className="" >
                    <h3>
                    Wnętrza mieszkalne<Divider/>
      </h3>
                    </div>
                </Caption>
              </Slide>
              <Slide image={<img className="sliderWizualziacje" alt="" src={img3} />}>
              <Caption placement="right">
                  <div className="" >
                    <h3>
                      Techniczne projekty łazienek<Divider/>
      </h3>
                    </div>
                </Caption>
              </Slide>
              </Slider>
              </Col>
              
            </Row>
          </div>
          <div className="grey darken-3">
          <div className="kropki center white-text">
                  <img src={finger} width="100%"/>
                  </div>
                  <Row className="hide-on-med-and-down"/>
            <Row className="hide-on-med-and-down"/>
            <Row className="hide-on-med-and-down"/>
            <Row className="hide-on-med-and-down"/>
            <Row>
              <Col s={12} l={6}>
              <Iframe url="https://sketchfab.com/models/a85b372a3f8d4a7985caea65ca94932b/embed"
       width="90%"
        // height="100%"
        id="videoIframe"
        className="imgCarousel"
        display="initial"
        position="relative"/>
        
              </Col>
              <Col s={12} l={6}>
                <h3 className="smallHead">Modele 3D <Divider/></h3>
                <h5 className="left-align smallText">
                <li className="textWizualizacje">Fotorealistyczne modele budynków i wnętrz <Button>Przyklad</Button> </li>
                <li className="textWizualizacje">Modele budynków i wnętrz dla wykonaców <Button>Przyklad</Button></li>
                <li className="textWizualizacje">Modele budynków i wnętrz do zamieszczenia na stronie</li>
                </h5>
              </Col>
            </Row>
          </div>
          <div className="teal lighten-2">
          <div className="kropki center white-text">
                  <img src={finger} width="100%"/>
                  </div>
                  <Row className="hide-on-med-and-down"/>
            <Row className="hide-on-med-and-down"/>
            <Row className="hide-on-med-and-down"/>
            <Row className="hide-on-med-and-down"/>
            <Row>
              <Col s={12} l={6}>
                <img className="imgCarousel" src={gif} width="90%" />
              </Col>
              <Col s={12} l={6}>
                <h3 className="smallHead">Strony internetowe, marketing <Divider/></h3>
                <h5 className="center smallText">
                  <li>Przygotowanie stron internetowych w celu sprzedazy mieszkań i domów</li>
                  <li>Przygotowanie materiałów marketingowych w celu sprzedazy mieszkań i domów </li>
                
                  <br/>
                   
                  <br/><br/><br/>
                  <Button>Przykład strony</Button>
                </h5>
              </Col>
            </Row>
          </div>
   </Carousel>
      </div>
    );
};

export default HomeWnetrza;
