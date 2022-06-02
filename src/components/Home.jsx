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
import HomeFirst from "./HomeFirst.";
import HomeSecond from "./HomeSecond";
const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  let lang = localStorage.getItem("lang");

  // if (lang == "en") return <Row></Row>;
  // else
    return (
<Row>
  <HomeFirst/>
</Row>

     
  
  );
};

export default Home;
