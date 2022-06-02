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
} from "react-materialize";
import Aos from "aos";
import "aos/dist/aos.css";
import architekturaLogo from "./svg/logo.svg";
import wnetrzaLogo from "./svg/logo.svg";
import wizualizacjeLogo from "./svg/logo.svg";
import clientCard1 from "./svg/clientCard1.svg";
import clientCard2 from "./svg/clientCard2.svg";
import clientCard3 from "./svg/clientCard3.svg";
import Animacje from "./svg/wnetrzaLogo.svg";
import img1 from "./svg/Rakowicka15C.webp";
import img2 from "./svg/wieckowice.png";
import img3 from "./svg/drewniane.jpg";
import img4 from "./svg/HOUSE_QOF35AHouseQ.jpeg";
import img5 from "./svg/koscielne.webp";
import finger from "./svg/finger (1).svg";
import Commercial from "./Commercial";

const HomeWnetrza = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  let lang = localStorage.getItem("lang");

  if (lang == "en")
    return (
      <div className="white-text">
        <Row />
        <Row />
        <Row />
        <h3 className="left-align">
          Architecture
          <Divider />
        </h3>
        <Row />
        <Row>
          <Col s={12} m={2} push="m1">
            <Card className="blue darken-3">
              <Row>
                <img
                  className=""
                  src="https://ak-d.tripcdn.com/images/220e180000014r6sg5C32_R_800_525.jpg"
                  width="100%"
                />

                <h5 className="">
                  Residential, service, mixed-use buildings
                  <Divider />
                </h5>
                <div data-aos="fade-right" data-aos-duration="2000" className="left-align ">
                  <li>All RIBA Stages</li>
                  <li>Flexible, interdisciplinary team</li>
                  <li>Large experience in working with developers</li>
                  <li>Small, medium and medium-large buildings</li>
                </div>
              </Row>
            </Card>
          </Col>
          <Col s={12} m={2} push="m1">
            <Card className="cyan darken-3">
              <Row>
                <img className="" src={img2} width="100%" />

                <h5 className="">
                  Single-family houses <Divider />
                </h5>
                <div data-aos="fade-down" data-aos-duration="2000" className="left-align ">
                <li>All RIBA Stages</li>
                <li> Personal design, fit for the client </li>
                  <li> Garden design </li>

                  <li> Quick Conceptual Design </li>

                  <li>
                    Preparation of a complete project 
                  </li>
                  
                </div>
              </Row>
            </Card>
          </Col>
          <Col s={12} m={2} push="m1">
            <Card className="grey darken-3">
              <Row>
                <img className="" src={img3} width="100%" />

                <h5 className="">
                  Timber Frame houses <Divider />
                </h5>
                <div data-aos="fade-down" data-aos-duration="2000" className="left-align ">
                  <li>
                    {" "}
                    We have experience in designing energy-saving houses made of
                    wood or wooden structures{" "}
                  </li>{" "}
                </div>
              </Row>
            </Card>
          </Col>
          <Col s={12} m={2} push="m1">
            <Card className="green darken-3">
              <Row>
                <img className="" src={img4} width="100%" />

                <h5 className="">
                  Prefabricated buildings <Divider />
                </h5>
                <div data-aos="fade-up" data-aos-duration="2000" className="left-align ">
                  <li>
                    {" "}
                    We have experience in designing energy-saving houses made of
                    wood or wooden structures{" "}
                  </li>{" "}
                </div>
              </Row>
            </Card>
          </Col>
          <Col s={12} m={2} push="m1">
            <Card className="orange darken-3">
              <Row>
                <img className="" src={img5} width="100%" />

                <h5 className="">
                  Places of worship <Divider />
                </h5>
                <div data-aos="fade-right" data-aos-duration="2000" className="left-align ">
                  <li>
                    {" "}
                    We have experience in designing energy-saving houses made of
                    wood or wooden structures{" "}
                  </li>{" "}
                </div>
              </Row>
            </Card>
          </Col>
        </Row>

        <h3 className="left-align">
          Examples:
          <Divider />
        </h3>
        <Commercial/>
      </div>
    );
  else
    return (
        <div className="white-text">
        <Row />
        <Row />
        <Row />
        <h3 className="left-align">
          Architecture
          <Divider />
        </h3>
        <Row />
        <Row>
          <Col s={12} m={2} push="m1">
            <Card className="blue darken-3">
              <Row>
                <img
                  className=""
                  src="https://ak-d.tripcdn.com/images/220e180000014r6sg5C32_R_800_525.jpg"
                  width="100%"
                />

                <h5 className="">
                  Residential, service, mixed-use buildings
                  <Divider />
                </h5>
                <div data-aos="fade-right" data-aos-duration="2000" className="left-align ">
                  <li>All RIBA Stages</li>
                  <li>Flexible, interdisciplinary team</li>
                  <li>Large experience in working with developers</li>
                  <li>Small, medium and medium-large buildings</li>
                </div>
              </Row>
            </Card>
          </Col>
          <Col s={12} m={2} push="m1">
            <Card className="cyan darken-3">
              <Row>
                <img className="" src={img2} width="100%" />

                <h5 className="">
                  Single-family houses <Divider />
                </h5>
                <div data-aos="fade-down" data-aos-duration="2000" className="left-align ">
                <li>All RIBA Stages</li>
                <li> Personal design, fit for the client </li>
                  <li> Garden design </li>

                  <li> Quick Conceptual Design </li>

                  <li>
                    Preparation of a complete project 
                  </li>
                  
                </div>
              </Row>
            </Card>
          </Col>
          <Col s={12} m={2} push="m1">
            <Card className="grey darken-3">
              <Row>
                <img className="" src={img3} width="100%" />

                <h5 className="">
                  Timber Frame houses <Divider />
                </h5>
                <div data-aos="fade-down" data-aos-duration="2000" className="left-align ">
                  <li>
                    {" "}
                    We have experience in designing energy-saving houses made of
                    wood or wooden structures{" "}
                  </li>{" "}
                </div>
              </Row>
            </Card>
          </Col>
          <Col s={12} m={2} push="m1">
            <Card className="green darken-3">
              <Row>
                <img className="" src={img4} width="100%" />

                <h5 className="">
                  Prefabricated buildings <Divider />
                </h5>
                <div data-aos="fade-up" data-aos-duration="2000" className="left-align ">
                  <li>
                    {" "}
                    We have experience in designing energy-saving houses made of
                    wood or wooden structures{" "}
                  </li>{" "}
                </div>
              </Row>
            </Card>
          </Col>
          <Col s={12} m={2} push="m1">
            <Card className="orange darken-3">
              <Row>
                <img className="" src={img5} width="100%" />

                <h5 className="">
                  Places of worship <Divider />
                </h5>
                <div data-aos="fade-right" data-aos-duration="2000" className="left-align ">
                  <li>
                    {" "}
                    We have experience in designing energy-saving houses made of
                    wood or wooden structures{" "}
                  </li>{" "}
                </div>
              </Row>
            </Card>
          </Col>
        </Row>

        <h3 className="left-align">
          Examples:
          <Divider />
        </h3>
        <Commercial/>
      </div>
    );
};

export default HomeWnetrza;
