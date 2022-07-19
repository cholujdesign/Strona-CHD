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
import Iframe from "react-iframe";

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
      <Col m={12} s={12} className="center">
      <div
        data-aos="fade-down"
        data-aos-duration="2000"
        className="hoverable z-depth-0 "
      >
        <Card
          className="black white-text"
          actions={[
            <Row>
              <Col m={8} s={12} push="">
                <h5>{data.plname}</h5>
                <Divider />
                <br />
                <p className="left-align">{data.pldescription}</p>
              </Col>

              <Col m={4} s={12} push="">
                {data.fb}
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
              image={<img alt="" src={data.img1} width="100%" />}
            ></Slide>
            <Slide
              image={<img alt="" src={data.img2} width="100%" />}
            ></Slide>
            <Slide
              image={<img alt="" src={data.img3} width="100%" />}
            ></Slide>
          </Slider>
        </Card>
      </div>
    </Col>
  );
});

return (
  <div>
    <div className="hide-on-small-only">
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
    </div>

    <Row>
      <div className="hide-on-small-only"></div>
    </Row>
    <Row>
      <Col s={12} l={8} push="l2">
        <div className="center">{items}</div>
      </Col>{" "}
    </Row>
  </div>
);
}
export default Commercial;
