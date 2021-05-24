import "leaflet/dist/leaflet.css";
import "materialize-css";
import React from "react";
import "react-leaflet";
import {
  CardPanel,
  Col, Row
} from "react-materialize";
import Button from "react-materialize/lib/Button";
import Divider from "react-materialize/lib/Divider";
import MapIn from "./MapIn";
import emailjs from 'emailjs-com';

function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm('service_a1wwmva', 'template_jnm4g0d', e.target, 'user_x9kPpW1JmhYVbwVWmxAVD')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
}


class Contact extends React.Component {
  constructor() {
    super();

    this.state = {
      lang: localStorage.getItem("lang"),
    };
  }
  
  render() {

    if (this.state.lang == "en")
      return (
        <div>
     <Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/>
          <Row>
            <Col m={4} s={12} offset="m1">
              <Button
                className="z-depth-2 orange "
                large
                target="blank"
                node="a"
                href="https://goo.gl/maps/xrJdtaQWoJFFU5ya7"
              >
                Google Maps
              </Button>
              <a className="btn-large orange " href="tel:+48518048983">
                Call us
              </a>
              <CardPanel className="white z-depth-2">
                <h5 className="center">Contact form</h5>
                <Row></Row>
                <Divider />
                <Row></Row>
                <div className="center ">
                  <form id="contact-form">
                    <Row>
                      <Col m={6} s={12}>
                        <div className="form-group">
                          <label htmlFor="name">Name</label>
                          <input type="text" className="form-control" />
                        </div>
                      </Col>
                      <Col m={6} s={12}>
                        <div className="form-group">
                          <label htmlFor="name">Company's Name</label>
                          <input type="text" className="form-control" />
                        </div>
                      </Col>
                    </Row>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea className="form-control" rows="5"></textarea>
                    </div>
                    <button type="submit" className="btn orange">
                      Wyślij
                    </button>
                  </form>
                </div>
              </CardPanel>
              <CardPanel className="white z-depth-2">
                If additional information is required, please contact us using
                the application form or with our office from Monday to Friday,
                from 8:00 am until 4 p.m. Our advisors will present a specially
                prepared offer and will answer all your questions.
                <Row></Row>
                <br />
                House_Q sp. z o. o.
                <br />
                Rynek Glowny 43
                <br />
                31-013 Krakow
                <br />T : +48 518048983
                <br />
                E: domyprefabrykowanemk@gmail.com
              </CardPanel>
            </Col>

            <Col m={1} s={0} />
            <Col m={5} s={12}>
              <Row></Row>
              <Row></Row>
              <Row></Row>
              <CardPanel className="white z-depth-2">
                <div id="map" style={{ height: 500 }}>
                  <MapIn />
                </div>
              </CardPanel>
            </Col>
          </Row>
        </div>
      );
    else
      return (
        <div>
      <Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/>
          <Row>
            <Col m={4} s={12} offset="m1">
              <Button
                className="z-depth-2  black"
                large
                target="blank"
                node="a"
                href="https://goo.gl/maps/xrJdtaQWoJFFU5ya7"
              >
                Google Maps
              </Button>
              <a className="btn-large black " href="tel:+48518048983">
                zadzwoń
              </a>
              <CardPanel className="white z-depth-2">
                <h5 className="center">Formularz Kontaktowy</h5>
                <Row></Row>
                <Divider />
                <Row></Row>
                <div className="center ">
                <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>   </div>
              </CardPanel>
              <CardPanel className="white z-depth-2">
                W razie zainteresowania lub w celu uzyskania dodatkowych
                informacji prosimy o kontakt za pomocą formularza zgłoszeniowego
                lub z naszym biurem od poniedziałku do piątku, w godzinach od
                8:00 do 16:00. Nasi doradcy przedstawią specjalnie przygotowaną
                ofertę oraz odpowiedzą na wszystkie Państwa pytania.
                <Row></Row>
                <br />
               Choluj Design s.c.
                <br />
                Rynek Glowny 43
                <br />
                31-013 Krakow
                <br />T : +48 518048983 / +48 509447006
                <br />
                E: cholujdesign@gmail.com
              </CardPanel>
            </Col>

            <Col m={1} s={0} />
            <Col m={5} s={12}>
              <Row></Row>
              <Row></Row>
              <Row></Row>
              <CardPanel className="white z-depth-2">
                <div id="map" style={{ height: 500 }}>
                  <MapIn />
                </div>
              </CardPanel>
            </Col>
          </Row>
        </div>
      );
  }
}
export default Contact;

