import {
  Col,
  Slider,
  Slide,
  Caption,
  Card,
  Row,
  Divider,
} from "react-materialize";
import { NavLink } from "react-router-dom";
import "materialize-css";
import React, { useEffect } from "react";
import Iframe from "react-iframe";

import Aos from "aos";
import "aos/dist/aos.css";

function Other() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div>
      <Row>
        <div className="hide-on-small-only"></div>
      </Row>

      <Row>
        <div
          data-aos="fade-left"
          data-aos-duration="2000"
           
        >
          <Col m={12} s={12} push="m">
            <Card
              className=""
              actions={[
                <Row>
                 
                          <Col m={12} s={12} push="">
                            <Row>
                              <Iframe
                                url="https://sketchfab.com/models/a85b372a3f8d4a7985caea65ca94932b/embed"
                                width="100%"
                                height="600px"
                                id="myId"
                                className="myClassname"
                                display="initial"
                                position="relative"
                              />
                              <Col m={12} s={12} push="">
                                <h5>Nazwa</h5>
                                <Divider />
                              </Col>
                              <Col m={8} s={12} push="">
                                <h5>Opis:</h5>
                                <br />
                                <p className="left-align"></p>
                              </Col>

                              <Col m={4} s={12} push="">
                                <h5>Lokalizacja:</h5>
                                <br />
                                <p3></p3>
                              </Col>
                            </Row>
                          </Col>
                          </Row>
                      
              ]}
            >
              {" "}
            </Card>
          </Col>
          <Row />
        </div>
      </Row>
      <Row>
        <div
          data-aos="fade-left"
          data-aos-duration="2000"
           
        >
          <Col m={12} s={12} push="m">
            <Card
              className=""
              actions={[
                <Row>
                 
                          <Col m={12} s={12} push="">
                            <Row>
                              <Iframe
                                url="https://sketchfab.com/models/f800b4225ff74dc5827f3f9aa0f4b115/embed"
                                width="100%"
                                height="600px"
                                id="myId"
                                className="myClassname"
                                display="initial"
                                position="relative"
                              />
                              <Col m={12} s={12} push="">
                                <h5>Nazwa</h5>
                                <Divider />
                              </Col>
                              <Col m={8} s={12} push="">
                                <h5>Opis:</h5>
                                <br />
                                <p className="left-align"></p>
                              </Col>

                              <Col m={4} s={12} push="">
                                <h5>Lokalizacja:</h5>
                                <br />
                                <p3></p3>
                              </Col>
                            </Row>
                          </Col>
                          </Row>
                      
              ]}
            >
              {" "}
            </Card>
          </Col>
          <Row />
        </div>
      </Row>
      <Row>
        <div
          data-aos="fade-left"
          data-aos-duration="2000"
           
        >
          <Col m={12} s={12} push="m">
            <Card
              className=""
              actions={[
                <Row>
                 
                          <Col m={12} s={12} push="">
                            <Row>
                              <Iframe
                                url="https://sketchfab.com/models/f95c12beea364444ac50d4ad3ed45a7f/embed"
                                width="100%"
                                height="600px"
                                id="myId"
                                className="myClassname"
                                display="initial"
                                position="relative"
                              />
                              <Col m={12} s={12} push="">
                                <h5>Nazwa</h5>
                                <Divider />
                              </Col>
                              <Col m={8} s={12} push="">
                                <h5>Opis:</h5>
                                <br />
                                <p className="left-align"></p>
                              </Col>

                              <Col m={4} s={12} push="">
                                <h5>Lokalizacja:</h5>
                                <br />
                                <p3></p3>
                              </Col>
                            </Row>
                          </Col>
                          </Row>
                      
              ]}
            >
              {" "}
            </Card>
          </Col>
          <Row />
        </div>
      </Row>
    
    </div>
  );
}

export default Other;
