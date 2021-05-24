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
import ListaNoncommercial from "./ListaNoncommercial";
import Aos from "aos";
import "aos/dist/aos.css";

function Noncommercial() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);


  const items = ListaNoncommercial.filter((data) => {
    data.rodzaj.toLowerCase().includes("niekomercyjne".toLowerCase());
    {
      return data;
    }
  }).map((data) => {
    return (
      <div
      data-aos="fade-down"
      data-aos-duration="2000"
      className="hoverable z-depth-0"
    >
        <Col m={10} s={12} push="m1">
          <Card
            className=""
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
                height: 600,
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
      <div className="hide-on-small-only"><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/></div>
      
      <Col s={12} m={10} push="m1">
      <Row>
        <div className="hide-on-small-only"></div>
      </Row>

      <Row>{items}</Row></Col>
    </div>
  );
}

export default Noncommercial;
