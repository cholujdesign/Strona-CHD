import "materialize-css";
import React, { Component, useEffect } from "react";
import { Button, Col, Divider, Row, Card } from "react-materialize";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import logo from "./svg/logo.svg"

const Nav = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  let lang = localStorage.getItem("lang");

  if (lang == "en") return <Row></Row>;
  else
    return (
<div><div className="hide-on-small-only">
      <div className="navbar z-depth-3">
     
        
        <Link to="home" className="navbaritem">
            Home
          </Link>
          <Link to="portfolio" className="navbaritem">
            Portoflio
          </Link>
          <Link to="home" className="navbaritem">
            <img src={logo} width="10%"/>
          </Link>
          <Link to="offer" className="navbaritem">
            Oferta
          </Link>
         
          <Link to="contact" className="navbaritem">
            Kontakt
          </Link>
     </div>
      </div>
      <div className="hide-on-med-and-up">
        <div className="navbarmobile z-depth-3">
     
        
        <Link to="home" className="navbaritem">
            Home
          </Link>
          <Link to="portfolio" className="navbaritem">
            Portoflio
          </Link>
          <Link to="home" className="navbaritem">
            <img src={logo} width="10%"/>
          </Link>
          <Link to="offer" className="navbaritem">
            Oferta
          </Link>
         
          <Link to="contact" className="navbaritem">
            Kontakt
          </Link>
     
      </div>
      </div></div>
    );
};

export default Nav;
