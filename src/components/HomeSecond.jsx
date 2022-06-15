import "materialize-css";
import React, { Component } from "react";
import {
  Button,
  Col,
  Divider,
  Row,
  Toast,
} from "react-materialize";
import architektura from "./svg/architektura.svg";
import wnetrza from "./svg/wnetrza.svg";
import strony from "./svg/strony.svg";
import modelowanie from "./svg/modelowanie.svg";
import animacje from "./svg/krynica3d.gif";
import wizualizacje from "./svg/wizualizacje.svg";
import emailjs from "emailjs-com";
import drawingprocess from "./svg/drawingprocess.svg";


class HomeSecond extends Component {
  constructor() {
    super();
    this.state = {
      i: 0,
      msg:"",
      lang: localStorage.getItem("lang"),
    };
    this.sendEmail = this.sendEmail.bind(this);
  }
 sendEmail(e) {
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
      },
      this.setState({msg: 'Sent/Wysłano'})
    );
    // window.location.reload(false) 
    
}
  
  render() {
    if (this.state.lang == "en")
      return (
        <div>
          <div className="   darken-1 z-depth-2">
          <Row>
              <Col s={12} m={10} push="m1">
                <Row className="white-text">
                  <Col s={12} m={3}>
                    <div className="">
                    <Row/><Row/><Row/>   <Row/><Row/><Row/>   <Row/><Row/><Row/>  <Row/><Row/><Row/>  
                    </div>
                    <h5 className="left-align"> Wide range of offered services
                     <Divider/></h5>
                    <div className="left-align">
                    We offer services in the field of architectural design, interior design, animation, visualization, 3D modeling and website design.
                    We work with developers to the full extent, this allows us to present a coherent design to the client, starting from the proposed building,
                    through the way it is presented, ending with the web design.</div>
                  </Col>
                  <Col s={12} m={6} push="m1"><Row/><Row/><Row/>  
                    <img src={drawingprocess} width="80%"/>
                  </Col>
                </Row>
                </Col>
                </Row>
            <Row />
            <Row />
            <Row>
              <Col s={12} m={10} push="m1">
                <Button node="a" href="architektura" className="clientCard">
                  <div data-aos="fade-left" data-aos-duration="2000">
                    <img src={architektura} width="80%" />
                    <h5>Architectural Design</h5>
                  </div>
                </Button>

                <Button node="a" href="wnetrza" className="clientCard">
                  <div data-aos="fade-down" data-aos-duration="2000">
                    <img src={wnetrza} width="80%" />
                    <h5>Interior Design</h5>
                  </div>
                </Button>

                <Button node="a" href="modelowanie" className="clientCard">
                  <div data-aos="fade-right" data-aos-duration="2000">
                    <img src={modelowanie} width="80%" />
                    <h5>3D Modeling</h5>
                  </div>
                </Button>

                <Row />

                <Button node="a" href="animacje" className="clientCard">
                  {" "}
                  <div data-aos="fade-left" data-aos-duration="2000">
                    <img src={animacje} width="80%" />
                    <h5>Animations</h5>
                  </div>
                </Button>

                <Button node="a" href="wizualizacje" className="clientCard">
                  <div data-aos="fade-up" data-aos-duration="2000">
                    <img src={wizualizacje} width="80%" />
                    <h5>CGI</h5>
                  </div>
                </Button>

                <Button node="a" href="strony" className="clientCard">
                  {" "}
                  <div data-aos="fade-right" data-aos-duration="2000">
                    <img src={strony} width="80%" />
                    <h5>Web design</h5>
                  </div>
                </Button>
              </Col>
            </Row>
            <Row />
            <Row />
            <Row />
            <Row>
              <Col s={12} m={2} push="m1"></Col>
              <Col s={12} m={6} push="m1">
                <h3 className="white-text">Talk to us!</h3>
                <form onSubmit={this.sendEmail}>
                  <input
                    className="white-text center"
                    type="email"
                    name="user_email"
                    placeholder="Your Email"
                  />
                  
                  <textarea 
                  placeholder="Your Message"
                  className="white-text center validate" name="message" />
                
                  <Toast
                    options={{
                      classes: "center red",
                      html: "Message sent, thank you!",
                    }}
                  >
                    <input
                      className="btn"
                      type="submit"
                      value="Send message"
                    />
                  </Toast>
                </form>
                <a className="btn black " href="tel:+48518048983">
                  or call us
                </a>
              </Col>
            </Row>
            <Row className="center red-text">
              <h5 className="red-text">{this.state.msg}
                </h5>
            </Row>
            <Row />
          </div>
          <Row />
          <Row />
          <div className="clientCardbg z-depth-2">
            {/* <h3 className="teal-text">Nasze biuro to </h3> */}
          </div>
          <Row></Row>
        </div>
      );
    else
      return (
        <div>
          <Row /><Row/><Row/><Row/>   
          <Row />
          <Row />
          <div className="">
            <Row>
              <Col s={12} m={10} push="m1">
                <Row className="white-text">
                  <Col s={12} m={4}>
                  <div className="">
                       <Row/><Row/><Row/>  <Row/><Row/><Row/>  
                    </div>
                    <h5 className="left-align">
                      {" "}
                      Szeroki wachlarz umiejętności,
                      <br /> pełna obsługa projektowa
                      <Divider />
                    </h5>
                    <div className="left-align">
                      Oferujemy usługi w zakresie projektowania architektury,
                      architektury wnętrz, animacji, wizualizacji, modelowania
                      3D oraz projektowania stron internetowych. Współpracujemy
                      z deweloperami w pełnym zakresie, pozwala to na
                      zaprezentowanie klientowi spoistego designu począwszy od
                      proponowanego budynku, poprzez spośob jego zaprezentowania
                      kończąc na projekcie strony.
                    </div>
                  </Col>
                  <Col s={12} m={6} push="m1"><Row/><Row/><Row/>
                    <img src={drawingprocess} width="80%" />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row />
            <Row>
              <Col s={12} m={10} push="m1">
                <Button node="a" href="architektura" className="clientCard">
                  <div data-aos="fade-left" data-aos-duration="2000">
                    <img src={architektura} width="80%" />
                    <h5>Architektura</h5>
                  </div>
                </Button>

                <Button node="a" href="wnetrza" className="clientCard">
                  <div data-aos="fade-down" data-aos-duration="2000">
                    <img src={wnetrza} width="80%" />
                    <h5>Projekty wnętrz</h5>
                  </div>
                </Button>

                <Button node="a" href="modelowanie" className="clientCard">
                  <div data-aos="fade-right" data-aos-duration="2000">
                    <img src={modelowanie} width="80%" />
                    <h5>Modelowanie 3D</h5>
                  </div>
                </Button>

                <Row />

                <Button node="a" href="animacje" className="clientCard">
                  {" "}
                  <div data-aos="fade-left" data-aos-duration="2000">
                    <img src={animacje} width="80%" />
                    <h5>Animacje</h5>
                  </div>
                </Button>

                <Button node="a" href="wizualizacje" className="clientCard">
                  <div data-aos="fade-up" data-aos-duration="2000">
                    <img src={wizualizacje} width="80%" />
                    <h5>Wizualizacje</h5>
                  </div>
                </Button>

                <Button node="a" href="strony" className="clientCard">
                  {" "}
                  <div data-aos="fade-right" data-aos-duration="2000">
                    <img src={strony} width="80%" />
                    <h5>Strony www</h5>
                  </div>
                </Button>
              </Col>
            </Row>
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row>
              <Col s={12} m={2} push="m1"></Col>
              <Col s={12} m={6} push="m1">
                <h3 className="white-text">Skontaktuj się z nami</h3>
                <form onSubmit={this.sendEmail}>
                  <input
                    className="white-text center"
                    type="email"
                    name="user_email"
                    placeholder="Twój e-mail"
                  />
                  
                  
                  <textarea className="white-text center" name="message" placeholder="Twoja wiadomość"/> 
                  
                  <Toast
                    options={{
                      classes: "center red",
                      html: "Wiadomość wysłana, dziękujemy !",
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
            <Row className="center red-text">
              <h5 className="red-text">{this.state.msg}
                </h5>
            </Row>
            <Row />
          </div>
          <Row />
          <Row />
          <div className="clientCardbg z-depth-2">
            {/* <h3 className="teal-text">Nasze biuro to </h3> */}
          </div>
        </div>
      );
  }
}
export default HomeSecond;
