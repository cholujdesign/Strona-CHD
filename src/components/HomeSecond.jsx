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
  Toast,
} from "react-materialize";
import Aos from "aos";
import "aos/dist/aos.css";
import architekturaLogo from "./svg/logo.svg";
import wnetrzaLogo from "./svg/logo.svg";
import wizualizacjeLogo from "./svg/logo.svg";
import clientCard1 from "./svg/clientCard1.svg";
import clientCard2 from "./svg/clientCard2.svg";
import clientCard3 from "./svg/clientCard3.svg";
import architektura from "./svg/architektura.svg";
import wnetrza from "./svg/wnetrza.svg";
import strony from "./svg/strony.svg";
import modelowanie from "./svg/modelowanie.svg";
import animacje from "./svg/krynica3d.gif";
import wizualizacje from "./svg/wizualizacje.svg";
import emailjs from "emailjs-com";

function sendEmail(e) {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_a1wwmva",
      "template_jnm4g0d",
      e.target,
      "user_x9kPpW1JmhYVbwVWmxAVD"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
}

class HomeSecond extends Component {
  constructor() {
    super();
    this.state = {
      i: 0,
      lang: localStorage.getItem("lang"),
    };
    this.Wizualizacja = this.Wizualizacja.bind(this);
  }

  Wizualizacja = (event) => {
    this.setState({
      i: this.state.i + 1,
    });

    switch (this.state.i) {
      case 1:
        return (
          <div>
            <h3>asdasdas</h3>
          </div>
        );
      case 2:
        return (
          <div>
            <h3>asd2342342342342342asdas</h3>
          </div>
        );
      case 3:
        return (
          <div>
            <h3>asdasasdasdas</h3>
          </div>
        );
      default:
        return (
          <div>
            <h3>asdasd234324as</h3>
          </div>
        );
    }
  };

  render() {
    if (this.state.lang == "en") return(    <div>
      <div className="   darken-1 z-depth-2">
        <Row />
        <Row />
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
        <Row/><Row/><Row/>
        <Row>
          <Col s={12} m={2} push="m1"></Col>
          <Col s={12} m={6} push="m1">
            <h3 className="white-text">Talk to us!</h3>
            <form onSubmit={sendEmail}>
              <input className="white-text" type="email" name="user_email" />
              <Divider />
              <label className="">
                <h5 className="white-text">Email</h5>
              </label>
              <textarea className="white-text" name="message" /> <Divider />
              <label className="">
                <h5 className="white-text">Message</h5>
              </label>
              <Toast
              
options={{
classes: "center",
html: 'Message sent, thank you!'
}}
>
<input
                className="btn"
                type="submit"
                value="Wyślij wiadomość"
              />
</Toast>
              
            </form>
            <a className="btn black " href="tel:+48518048983">
              or call us
            </a>
          </Col>
        </Row>
        <Row />
      </div>
      <Row />
      <Row />
      <div className="clientCardbg z-depth-2">
        {/* <h3 className="teal-text">Nasze biuro to </h3> */}
      </div>
      <Row>
     </Row>
    </div>
);
    else
      return (
        <div>
        <div className="  grey darken-1 z-depth-2">
          <Row />
          <Row />
          <Row>
            <Col s={12} m={2} push="m1"></Col>
            <Col s={12} m={6} push="m1">
              <h3 className="white-text">Skontaktuj się z nami</h3>
              <form onSubmit={sendEmail}>
                <input className="white-text" type="email" name="user_email" />
                <Divider />
                <label className="">
                  <h5 className="white-text">Email</h5>
                </label>
                <textarea className="white-text" name="message" /> <Divider />
                <label className="">
                  <h5 className="white-text">Wiadomość</h5>
                </label>
                <Toast
                
options={{
  classes: "center",
  html: 'Wiadomość wysłana, dziękujemy !'
}}
>
<input
                  className="btn"
                  type="submit"
                  value="Wyślij wiadomość"
                />
</Toast>
                
              </form>
              <a className="btn black " href="tel:+48518048983">
                lub zadzwoń
              </a>
            </Col>
          </Row>
          <Row />
        </div>
        <Row />
        <Row />
        <div className="clientCardbg z-depth-2">
          {/* <h3 className="teal-text">Nasze biuro to </h3> */}
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
  }
}
export default HomeSecond;
