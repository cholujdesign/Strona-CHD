import {
  Col,
  Slider,
  Slide,
  Caption,
  Card,
  Row,
  Divider,
} from "react-materialize";
import "materialize-css";
import React, { useEffect } from "react";
import Lista from "./Lista";
import Aos from "aos";
import "aos/dist/aos.css";

function Commercial() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);


  const items = Lista.filter((data) => {
    data.rodzaj.toLowerCase().includes("komercyjne".toLowerCase());
    {
      return data;
    }
  }).map((data) => {
    return (
      <div
      data-aos="fade-down"
      data-aos-duration="2000"
      className="white-text hoverable z-depth-0"
    >
        <Col m={10} s={12} push="m1">
          <Card
            className="black"
            actions={[
              <Row>
                <Col>
                  <div>
                    <Row>
                      <Col>
                        <Col m={12} s={12} push="">
                          <Row>
                          
                            <Col m={12} s={12} push="">
                              <h5>{data.plname}</h5>
                              <Divider />
                            </Col>
                            <Col m={8} s={12} push="">
                           
                              <br />
                              <p className="left-align">{data.pldescription}</p>
                            </Col>

                            <Col m={4} s={12} push="">
                              <h5>Lokalizacja:</h5>
                              <br />
                              <p3>{data.lokalizacja}</p3>
                            </Col>
                          </Row>
                        </Col>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>,
            ]}
          >
            <Slider
              fullscreen={false}
              options={{
                duration: 500,
                height: 800,
                width: 800,
                indicators: false,
                interval: 4000,
              }}
            >
              <Slide
                image={
                    <img alt="" src={data.img1} width="100%" />
                }
              >
            
              </Slide>
              <Slide
                image={
                    <img alt="" src={data.img2} width="100%" />
                }
              >
          
              </Slide>
              <Slide
                image={
                    <img alt="" src={data.img3} width="100%" />
                }
              >
           
              </Slide>
           
            </Slider>
          </Card>
        </Col>
        <Row/>
      </div>
    );
  });

  return (
    <div>
      <Row>
        <div className="hide-on-small-only"></div>
      </Row>
      <Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/>
      <Row>
      <Col m={10} s={12} push="m1">
        {items}
        </Col>
        </Row>
    </div>
  );
}

export default Commercial;
