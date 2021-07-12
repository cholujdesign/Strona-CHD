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
import architekturaLogo from "./svg/logo.svg";
import wnetrzaLogo from "./svg/logo.svg";
import wizualizacjeLogo from "./svg/logo.svg";
import clientCard1 from "./svg/clientCard1.svg";
import clientCard2 from "./svg/clientCard2.svg";
import clientCard3 from "./svg/clientCard3.svg";




class HomeSecond extends Component {
  constructor() {
  // super();
    this.state = {
      i: 0,
      lang: localStorage.getItem("lang"),
      
    };
    this.Wizualizacja = this.Wizualizacja.bind(this)
  };

  Wizualizacja = (event) => {
    let i=i+1
    switch(i) {
      case 1:
        return 'bar';
        case 2:
        return 'ba312312r';
        case 3:
        return '22321';
      default:
        return 'f3123oo';
    }
  };

  render() {
  if (this.state.lang == "en") return <Row></Row>;
  else
    return (
      <div>
     <Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/>
        <div className="  grey z-depth-2"><Row/><Row/><Row/><Row/>
         <Row>
           <Col s={12} m={2} push="m1">
             
            </Col>
            <Col s={12} m={6} push="m1">
            <h3>Skontaktuj się z nami</h3>
             <h5> Get In TouchGet In TouchGet In TouchGet In TouchGet In TouchGet In TouchGet In Touch</h5>
            <br/>
            <h3>Your message <Divider/></h3>
            <Row/><Row/>
              <h3><Button large>asd ad a</Button></h3>
            </Col>
            </Row>
            <Row/><Row/><Row/><Row/>
        </div>
        <div className="clientCardbg z-depth-2">
       <h3 className="white-text">W czym mozemy pomoc </h3>
        </div>
        <Row>
          <Row>
            <Col s={12} m={8} push="m2">
              
              <Col s={12} m={4} push="">
                <img
                  className="clientCard z-depth-3 hoverable"
                  src={clientCard1}
                  width="100%"
                />
              </Col>
              <Col className="clientCard z-depth-3 hoverable" s={12} m={4} push="">
                <img src={clientCard2} width="100%" />
              </Col>
              <Col className="clientCard z-depth-3 hoverable" s={12} m={4} push="">
                <img src={clientCard3} width="100%" />
              </Col>
            </Col>
          </Row>
          <Row className="clientCard">
            
            <h3> nazwa nazwa</h3>
            <Col s={12} m={6}>
            {this.Wizualizacja}
            </Col>
            <Col s={12} m={6}>
            <Button onClick={this.Wizualizacja}></Button>
            </Col>
          </Row>
        </Row>
      </div>
    );
};
}
export default HomeSecond;
