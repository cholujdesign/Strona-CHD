import React, { Component } from "react";
import {
  NavItem,
  Navbar,
  Icon,
  Dropdown,
  Divider,
  Button,
  Modal,
} from "react-materialize";
import { Redirect } from "react-router-dom";
import "materialize-css";
import logo from "./svg/logo.svg";


const handleClickEn = () => {
  localStorage.setItem("lang", "en");
  window.location.href = "homeen";
};
const handleClickPl = () => {
  localStorage.setItem("lang", "pl");
  window.location.href = "/homepl";
};

class Nawigacja extends Component {
  
  constructor() {
    super();

    this.state = {
      lang: localStorage.getItem("lang"),
    };
  }



  render() {
    if (this.state.lang == "en")
    return (
      <Navbar
        className="navbar"
        alignLinks="right"
        brand={<img src={logo} alt="" height="100%" />}
        //<p1 className="brand-logo   ">En PL Madej-Pak</p1>}
        leftLogo
        menuIcon={
          <div className="   ">
            <h5>menu</h5>
            {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png" width="90%" alt=""/> */}
          </div>
        }
        options={{
          draggable: true,
          edge: "left",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true,
        }}
      >
        <div className="hide-on-med-and-up ">
          <img src={logo} alt="" width="100%" />
        </div>
        
        <NavItem className=" przycisk_nawigacja " href="home">
          <div className="  "><h5>Home</h5></div>
        </NavItem>{" "}
        <NavItem className=" przycisk_nawigacja " href="portfolio">
          <div className="  "><h5>Portfolio</h5></div>
        </NavItem>{" "}
        <NavItem className=" przycisk_nawigacja " href="contact">
          <div className=" "><h5>Contact</h5></div>
        </NavItem>
        
      <NavItem>
          <Button
            onClick={(e) => handleClickPl(e)}
            className="przycisk_nawigacja_pl z-depth-2"
          ></Button>
        </NavItem>
        <NavItem>
          <Button
            onClick={(e) => handleClickEn(e)}
            className="przycisk_nawigacja_en z-depth-2"
          ></Button>
        </NavItem>
      </Navbar>
    );
    else
      return (
        <Navbar
          className="navbar"
          alignLinks="right"
          brand={<img src={logo} alt="" height="100%" />}
          //<p1 className="brand-logo   ">En PL Madej-Pak</p1>}
          leftLogo
          menuIcon={
            <div className="   ">
              <h5>menu</h5>
              {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png" width="90%" alt=""/> */}
            </div>
          }
          options={{
            draggable: true,
            edge: "left",
            inDuration: 250,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 200,
            preventScrolling: true,
          }}
        >
          <div className="hide-on-med-and-up ">
            <img src={logo} alt="" width="100%" />
          </div>
          
          <NavItem className=" przycisk_nawigacja " href="home">
            <div className="  "><h5>Home</h5></div>
          </NavItem>{" "}
          <NavItem className=" przycisk_nawigacja " href="portfolio">
            <div className="  "><h5>Portfolio</h5></div>
          </NavItem>{" "}
          <NavItem className=" przycisk_nawigacja " href="contact">
            <div className=" "><h5>Kontakt</h5></div>
          </NavItem>
          
        <NavItem>
            <Button
              onClick={(e) => handleClickPl(e)}
              className="przycisk_nawigacja_pl z-depth-2"
            ></Button>
          </NavItem>
          <NavItem>
            <Button
              onClick={(e) => handleClickEn(e)}
              className="przycisk_nawigacja_en z-depth-2"
            ></Button>
          </NavItem>
        </Navbar>
      );
  }
}
export default Nawigacja;

// import "materialize-css";
// import React, { Component, useEffect } from "react";
// import { Button, Col, Divider, Row, Card } from "react-materialize";
// import Aos from "aos";
// import "aos/dist/aos.css";
// import { Link } from "react-router-dom";
// import logo from "./svg/logo.svg"

// const Nav = () => {
//   useEffect(() => {
//     Aos.init({ duration: 1000 });
//   }, []);

//   let lang = localStorage.getItem("lang");

//   if (lang == "en") return <Row></Row>;
//   else
//     return (
// <div><div className="hide-on-small-only">
//       <div className="navbar z-depth-3">

//         <Link to="home" className="navbaritem">
//             Home
//           </Link>
//           <Link to="portfolio" className="navbaritem">
//             Portoflio
//           </Link>
//           <Link to="home" className="navbaritem">
//             <img src={logo} width="10%"/>
//           </Link>
//           <Link to="offer" className="navbaritem">
//             Oferta
//           </Link>

//           <Link to="contact" className="navbaritem">
//             Kontakt
//           </Link>
//      </div>
//       </div>
//       <div className="hide-on-med-and-up">
//         <div className="navbarmobile z-depth-3">

//         <Link to="home" className="navbaritem">
//             Home
//           </Link>
//           <Link to="portfolio" className="navbaritem">
//             Portoflio
//           </Link>
//           <Link to="home" className="navbaritem">
//             <img src={logo} width="10%"/>
//           </Link>
//           <Link to="offer" className="navbaritem">
//             Oferta
//           </Link>

//           <Link to="contact" className="navbaritem">
//             Kontakt
//           </Link>

//       </div>
//       </div></div>
//     );
// };

// export default Nav;
