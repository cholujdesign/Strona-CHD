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
import Iframe from "react-iframe";
const Modelowanie = () => {
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
          Architectural Animations
          <Divider />
        </h3>
        <Row />
        <Iframe
          url="https://www.youtube.com/embed/w7sNBxkFw8w"
          width="80%"
          // height="100%"
          id="videoIframe"
          className="imgCarousel"
          display="initial"
          position="relative"
        />
        <Iframe
          url="https://www.youtube.com/embed/-UTHw_szLfA"
          width="80%"
          // height="100%"
          id="videoIframe"
          className="imgCarousel"
          display="initial"
          position="relative"
        />
        <Iframe
          url="https://www.youtube.com/embed/WHjZrLKVbdc"
          width="80%"
          // height="100%"
          id="videoIframe"
          className="imgCarousel"
          display="initial"
          position="relative"
        />
        <Iframe
          url="https://www.youtube.com/embed/JUuRMNtIT7o"
          width="80%"
          // height="100%"
          id="videoIframe"
          className="imgCarousel"
          display="initial"
          position="relative"
        />
        <Iframe
          url="https://www.youtube.com/embed/eFC9ykCBFYA"
          width="80%"
          // height="100%"
          id="videoIframe"
          className="imgCarousel"
          display="initial"
          position="relative"
        />
        <Iframe
          url="https://www.youtube.com/embed/ndNZSfyNUcY"
          width="80%"
          // height="100%"
          id="videoIframe"
          className="imgCarousel"
          display="initial"
          position="relative"
        />

        <Iframe
          url="https://www.youtube.com/embed/LmivUFElKqA"
          width="80%"
          // height="100%"
          id="videoIframe"
          className="imgCarousel"
          display="initial"
          position="relative"
        />
        <Iframe
          url="https://www.youtube.com/embed/hK5KNA8GiBQ"
          width="80%"
          // height="100%"
          id="videoIframe"
          className="imgCarousel"
          display="initial"
          position="relative"
        />

        <Row />
      </div>
    );
  else
    return (
      <div className="white-text">
        <Row />
        <Row />
        <Row />
        <h3 className="left-align">
          Animacje
          <Divider />
        </h3>
        <Row />
        <Iframe
          url="https://www.youtube.com/embed/w7sNBxkFw8w"
          width="80%"
          // height="100%"
          id="videoIframe"
          className="imgCarousel"
          display="initial"
          position="relative"
        />
        <Iframe
          url="https://www.youtube.com/embed/-UTHw_szLfA"
          width="80%"
          // height="100%"
          id="videoIframe"
          className="imgCarousel"
          display="initial"
          position="relative"
        />
        <Iframe
          url="https://www.youtube.com/embed/WHjZrLKVbdc"
          width="80%"
          // height="100%"
          id="videoIframe"
          className="imgCarousel"
          display="initial"
          position="relative"
        />
        <Iframe
          url="https://www.youtube.com/embed/JUuRMNtIT7o"
          width="80%"
          // height="100%"
          id="videoIframe"
          className="imgCarousel"
          display="initial"
          position="relative"
        />
        <Iframe
          url="https://www.youtube.com/embed/eFC9ykCBFYA"
          width="80%"
          // height="100%"
          id="videoIframe"
          className="imgCarousel"
          display="initial"
          position="relative"
        />
        <Iframe
          url="https://www.youtube.com/embed/ndNZSfyNUcY"
          width="80%"
          // height="100%"
          id="videoIframe"
          className="imgCarousel"
          display="initial"
          position="relative"
        />

        <Iframe
          url="https://www.youtube.com/embed/LmivUFElKqA"
          width="80%"
          // height="100%"
          id="videoIframe"
          className="imgCarousel"
          display="initial"
          position="relative"
        />
        <Iframe
          url="https://www.youtube.com/embed/hK5KNA8GiBQ"
          width="80%"
          // height="100%"
          id="videoIframe"
          className="imgCarousel"
          display="initial"
          position="relative"
        />

        <Row />
      </div>
    );
};

export default Modelowanie;
