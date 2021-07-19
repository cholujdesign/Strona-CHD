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
  Modal
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

  if (lang == "en") return (
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
              <h3 className="smallHead">Animations <Divider/></h3>
              <h5 className="left-align smallText">
              Photorealistic animations will help show the client additional aspects of the designed spaces that would be difficult to show through 2D visualizations.               <br/>
              We make animations, among others:
                <li className="textWizualizacje">Housing complexes</li>
                <li className="textWizualizacje">Various semi-detached buildings</li>
                <li className="textWizualizacje">Various detached buildings</li>
                <li className="textWizualizacje" >Elevations</li>
                <li className="textWizualizacje">Interriors</li>
                <br/>
                
                
                <Modal
actions={[
  <Button flat modal="close" node="button" waves="green">Close</Button>
]}
bottomSheet={false}
fixedFooter={false}
header="Examples, click to watch on youtube"
id="Modal-31"
open={false}
options={{
  dismissible: true,
  endingTop: '10%',
  inDuration: 250,
  onCloseEnd: null,
  onCloseStart: null,
  onOpenEnd: null,
  onOpenStart: null,
  opacity: 0.5,
  outDuration: 250,
  preventScrolling: true,
  startingTop: '4%'
}}
trigger={<Button node="button">Przyklady na Youtube</Button>}
>
<div className="center">
<Button target="blank" node="a" href="https://www.youtube.com/channel/UCKaE6NScDMLw16D_N6MQRuQ">HouseQ</Button>
<Button target="blank" node="a" href="https://www.youtube.com/channel/UCKaE6NScDMLw16D_N6MQRuQ">Domy Czernochowice</Button>
<Button target="blank" node="a" href="https://www.youtube.com/channel/UCKaE6NScDMLw16D_N6MQRuQ">Elevation Długosza</Button>
<Button target="blank" node="a" href="https://www.youtube.com/channel/UCKaE6NScDMLw16D_N6MQRuQ">Elevation GrandHotel</Button>
<Button target="blank" node="a" href="https://www.youtube.com/channel/UCKaE6NScDMLw16D_N6MQRuQ">Katowice</Button>
<Button target="blank" node="a" href="https://www.youtube.com/channel/UCKaE6NScDMLw16D_N6MQRuQ">obiekt</Button>
<Button target="blank" node="a" href="https://www.youtube.com/channel/UCKaE6NScDMLw16D_N6MQRuQ">obiekt</Button>
<Button target="blank" node="a" href="https://www.youtube.com/channel/UCKaE6NScDMLw16D_N6MQRuQ">obiekt</Button>
<Button target="blank" node="a" href="https://www.youtube.com/channel/UCKaE6NScDMLw16D_N6MQRuQ">obiekt</Button>
</div>
</Modal>
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
                    Commercial interriors
                    <Divider/>
    </h3>
                  </div>
              </Caption>
            </Slide>
            <Slide image={<img className="sliderWizualziacje" alt="" src={img2} />}>
            <Caption placement="right">
                <div className="" >
                  <h3>
                  Private interriors<Divider/>
    </h3>
                  </div>
              </Caption>
            </Slide>
            <Slide image={<img className="sliderWizualziacje" alt="" src={img3} />}>
            <Caption placement="right">
                <div className="" >
                  <h3>
                  Technical projects of bathrooms and similar rooms<Divider/>
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
              <h3 className="smallHead">3D Models <Divider/></h3>
              <h5 className="left-align smallText">
              <li className="textWizualizacje">Photorealistic models of buildings and interiors <Button href="https://youtu.be/KiVeP6muWbw" node="a" target="blank">Strona producenta</Button> </li>
              <li className="textWizualizacje">Models of buildings and interiors for contractors <Button href="https://youtu.be/36v4ZBXd6eY" node="a" targe="blank">Strona producenta</Button></li>
              <li className="textWizualizacje">Models of buildings and interiors to be posted on the website</li>
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
              <h3 className="smallHead">Websites, Marketing<Divider/></h3>
              <h5 className="left-align smallText">
              <li> Design of websites for the sale of apartments, houses and products </li>
                 <li> Preparation of marketing materials for the sale of apartments, houses and products </li>
              
                <br/>
                 
                <br/><br/>
                <Button node="a" targe="blank" href="https://houseq.pl">An example of a partner website, a manufacturer of prefabricated houses</Button>
                <br/><br/>
                <Button node="button" targe="blank" href="czernochowice">An example of a partner's website (under construction), a developer near Krakow</Button>
              </h5>
            </Col>
          </Row>
        </div>
 </Carousel>
    </div>
  );
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
                  
                  
                  <Modal
  actions={[
    <Button flat modal="close" node="button" waves="green">Close</Button>
  ]}
  bottomSheet={false}
  fixedFooter={false}
  header="Przykłady, naciśnij aby zobaczyć"
  id="Modal-30"
  open={false}
  options={{
    dismissible: true,
    endingTop: '10%',
    inDuration: 250,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    opacity: 0.5,
    outDuration: 250,
    preventScrolling: true,
    startingTop: '4%'
  }}
  trigger={<Button node="button">Przyklady na Youtube</Button>}
>
 <div className="center">
<Button target="blank" node="a" href="https://www.youtube.com/channel/UCKaE6NScDMLw16D_N6MQRuQ">HouseQ</Button>
<Button target="blank" node="a" href="https://www.youtube.com/channel/UCKaE6NScDMLw16D_N6MQRuQ">Domy Czernochowice</Button>
<Button target="blank" node="a" href="https://www.youtube.com/channel/UCKaE6NScDMLw16D_N6MQRuQ">Elewacja Długosza</Button>
<Button target="blank" node="a" href="https://www.youtube.com/channel/UCKaE6NScDMLw16D_N6MQRuQ">Elewacja GrandHotel</Button>
<Button target="blank" node="a" href="https://www.youtube.com/channel/UCKaE6NScDMLw16D_N6MQRuQ">Katowice</Button>
<Button target="blank" node="a" href="https://www.youtube.com/channel/UCKaE6NScDMLw16D_N6MQRuQ">obiekt</Button>
<Button target="blank" node="a" href="https://www.youtube.com/channel/UCKaE6NScDMLw16D_N6MQRuQ">obiekt</Button>
<Button target="blank" node="a" href="https://www.youtube.com/channel/UCKaE6NScDMLw16D_N6MQRuQ">obiekt</Button>
<Button target="blank" node="a" href="https://www.youtube.com/channel/UCKaE6NScDMLw16D_N6MQRuQ">obiekt</Button>
 </div>
</Modal>
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
                <li className="textWizualizacje">Fotorealistyczne modele budynków i wnętrz <Button href="https://youtu.be/KiVeP6muWbw" node="a" target="blank">Strona producenta</Button> </li>
                <li className="textWizualizacje">Modele budynków i wnętrz dla wykonaców <Button href="https://youtu.be/36v4ZBXd6eY" node="a" targe="blank">Strona producenta</Button></li>
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
                <h5 className="left-align smallText">
                  <li>Przygotowanie stron internetowych w celu sprzedazy mieszkań, domów i produktów</li>
                  <li>Przygotowanie materiałów marketingowych w celu sprzedazy mieszkań, domów  i produktów</li>
                
                  <br/>
                   
                  <br/><br/>
                  <Button node="a" targe="blank" href="https://houseq.pl">Przykład strony partnera, producenta domów prefabrykowanych</Button>
                  <br/><br/>
                  <Button node="button" targe="blank" href="czernochowice">Przykład strony partnera(w budowie), dewelopera pod Krakowem</Button>
                </h5>
              </Col>
            </Row>
          </div>
   </Carousel>
      </div>
    );
};

export default HomeWnetrza;
