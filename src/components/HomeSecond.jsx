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
   super();
    this.state = {
      i: 0,
      lang: localStorage.getItem("lang"),
      
    };
    this.Wizualizacja = this.Wizualizacja.bind(this)
  };

  Wizualizacja = (event) => {
    this.setState({
      i: this.state.i+1,
    });
   
    switch(this.state.i) {
      case 1:
        return <div><h3>asdasdas</h3></div>;
        case 2:
          return <div><h3>asd2342342342342342asdas</h3></div>;
        case 3:
          return <div><h3>asdasasdasdas</h3></div>;
      default:
        return <div><h3>asdasd234324as</h3></div>;
    }
  };

  render() {
  if (this.state.lang == "en") return <Row></Row>;
  else
    return (
      <div>
    
        <div className="  grey z-depth-2"><Row/><Row/>
         <Row>
           <Col s={12} m={2} push="m1">
             
            </Col>
            <Col s={12} m={6} push="m1">
            <h3>Skontaktuj się z nami</h3>
             <h5> Get In TouchGet In TouchGet In TouchGet In TouchGet In TouchGet In TouchGet In Touch</h5>
            <br/>
            <h3>Your message <Divider/></h3>
            <Row/><Row/>
              <h3><Button large>asd ad a</Button> <Button large>lub zadzwoń</Button></h3>
            </Col>
            </Row>
            <Row/>  
        </div><Row/><Row/>
        <div className="clientCardbg z-depth-2">
       <h3 className="white-text">Co od nas dostaniesz </h3>
        </div>
        <Row>
          <Row>
            <Col s={12} m={8} push="m2">
              
              <Col s={12} m={4} push="">
                <img
                  className="clientCard z-depth-3 "
                  src={clientCard1}
                  width="101%"
                />
              </Col>
              <Col className="clientCard z-depth-3 " s={12} m={4} push="">
                <img src={clientCard2} width="100%" />
              </Col>
              <Col className="clientCard z-depth-3 " s={12} m={4} push="">
                <img src={clientCard3} width="100%" />
              </Col>
            </Col>
          </Row>
         
        </Row>
      </div>
    );
};
}
export default HomeSecond;
