import "materialize-css";
import React, {  useEffect } from "react";
import {
  
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
import architekturaLogo from "./svg/architekturaLogo.svg";
import wnetrzaLogo from "./svg/wnetrzaLogo.svg";
import wizualizacjeLogo from "./svg/wizualizacjeLogo.svg";
import HomeSecond from "./HomeSecond";
import img1 from "./svg/Rakowicka15A.webp";
import img2 from "./svg/Rakowicka15budowa.webp";
import img3 from "./svg/Cienie.webp";
import web from "./svg/strony.svg";

const HomeFirst = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  let lang = localStorage.getItem("lang");

  if (lang == "en")
    return (
      <div>
        <div className="homeFirstimgDiv">
          <div className="homeFirstimg">
            <Slider
              className="cliderHome"
              fullscreen={true}
              options={{
                duration: 500,
                indicators: false,
                interval: 6000,
              }}
            >
              <Slide image={<img alt="" src={img1} />}>
                <Caption placement="right">
                  <div className="homeCaption hide-on-small-only">
                    <h3>
                      Online services
                      <Divider />
                    </h3>
                    <div className="light grey-text text-lighten-3 ">
                      <br /> Send us drawings of your property
                      <br /> Talk to us
                      <br /> Give as 1-3 weeks to prepare a concept
                      <br /> Discuss with us the project and tell us what needs changing
                      <br /> Enjoy a complete project!
                    </div>{" "}
                  </div>
                </Caption>
              </Slide>
              <Slide image={<img alt="" src={img2} />}>
                <Caption placement="right">
                  <div className="homeCaption hide-on-small-only">
                    <h3>
                      Years of experience
                      <Divider />
                    </h3>
                    <div className="light grey-text text-lighten-3 ">
                      <br /> Our work experience exceeds 25 years.
                      <br />
                      Our team has experience in projects from small to
                      medium-large, <br />
                      icluding author's supervision and construction management.
                      For a decade we aimed to connect <br />
                      spatial design with the design of industrial forms and new
                      tech.
                      <br />
                      Depending on the type and size of the project, we invite
                      to
                      <br />
                      our colleagues and other trusted people, specialists to
                      cooperate with us.
                    </div>{" "}
                  </div>
                </Caption>
              </Slide>
              <Slide image={<img alt="" src={img3} />}>
                <Caption placement="right">
                  <div className="homeCaption hide-on-small-only">
                    <h3>
                      Philosophy
                      <Divider />
                    </h3>
                    <div className="light grey-text text-lighten-3 ">
                      <br /> We focus first on the needs
                      <br /> and the expectations of our customers, each project
                      is analysed
                      <br /> individually. The leitmotif of our work is
                      interaction of
                      <br /> natural and artificial lighting, colors, textures
                      <br /> inside the building, interior's geometry and design
                      relationship with the nature.
                      <br />
                    </div>
                  </div>
                </Caption>
              </Slide>
            </Slider>{" "}
          </div>
        </div>
        <Row className="">
          <Col s={12} m={6} l={4}>
            <Card className="homeFirstcard white-text ">
              {" "}
              <Row />
              <h4>
                Architectural Practise CHD <Divider />
              </h4>
              <br/><br/>
              <Row className="">
                <Col s={4}>
                  <img src={architekturaLogo} width="80%" />
                </Col>
                <Col s={8}>
                  <div data-aos="fade-up" data-aos-duration="1000">
                    <a className="p2">
                      Architecture <Divider />
                    </a>
                    Flexible team, capable of working with various project.
                  </div>
                </Col>
              </Row>
              <Row>
                <Col s={4}>
                  <img src={wnetrzaLogo} width="80%" />
                </Col>
                <Col s={8}>
                  <div data-aos="fade-up" data-aos-duration="2000">
                  <a className="p2">
                      Interriors <Divider />
                      </a>
                    Private and commercial interiors to the full extent,
                    including work on site.
                  </div>
                </Col>
              </Row>
              <Row>
                <Col s={4}>
                  <img src={wizualizacjeLogo} width="70%" />
                </Col>
                <Col s={8}>
                  <div data-aos="fade-up" data-aos-duration="3000">
                  <a className="p2">
                      Visualisation <Divider />
                      </a>
                    Visualizations, Animations, Interactive 3D VR models, BIM
                    objects
                  </div>
                </Col>
              </Row>
              <Row>
                <Col s={4}>
                  <img src={web} width="50%" />
                </Col>
                <Col s={8}>
                  <div data-aos="fade-up" data-aos-duration="3000">
                  <a className="p2">
                      Web design <Divider />
                      </a>
                    Design, frontend, backend 
                  </div>
                </Col>
              </Row>
              
            </Card>
          </Col>
        </Row>
        <div className="divHome1" />
        <div data-aos="fade-down" data-aos-duration="1000">
          <HomeSecond />
        </div>
        {/* <div
      className="divHome2"
      id="vis"
      onclick="window.location.hash='vis'; "
    /> */}
        {/* <div data-aos="fade-left" data-aos-duration="2000">
          <HomeWizualizacje />
        </div> */}
        {/* <div
      className="divHome3 "
      id="int"
      onclick="window.location.hash='int'; "
    /> */}
        {/* <div data-aos="fade-left" data-aos-duration="2000">
          <HomeWnetrza />
        </div> */}
        {/* <div
      className="divHome4"
      id="arch"
      onclick="window.location.hash='arch'; "
    /> */}
        {/* <div data-aos="fade-left" data-aos-duration="2000">
          <HomeArchitektura />
        </div> */}
      </div>
    );
  else
    return (
      <div>
        <div className="homeFirstimgDiv">
          <div className="homeFirstimg">
            <Slider
              className="cliderHome"
              fullscreen={true}
              options={{
                duration: 500,
                indicators: false,
                interval: 6000,
              }}
            >
              <Slide image={<img alt="" src={img1} />}>
                <Caption placement="right">
                  <div className="homeCaption hide-on-small-only">
                    <h3>
                      Projektowanie online
                      <Divider />
                    </h3>
                    <div className="light grey-text text-lighten-3 ">
                      <br /> Prześlij nam rzuty projektowanej przestrzeni
                      <br /> Porozmawiaj z nami
                      <br /> W 1-3 tygodnie przygotujemy koncpecję
                      <br /> Następnie wprowadzimy zmiany zasugerowane przez
                      klienta
                      <br /> Na koniec przygotujemy pełny projekt wraz
                      <br />z rysunkami technicznymi i zestawieniem wyposaenia
                    </div>{" "}
                  </div>
                </Caption>
              </Slide>
              <Slide image={<img alt="" src={img2} />}>
                <Caption placement="right">
                  <div className="homeCaption hide-on-small-only">
                    <h3>
                      Wieloletnie doświadczenie
                      <Divider />
                    </h3>
                    <div className="light grey-text text-lighten-3 ">
                      <br /> Zajmujemy się architekturą oraz architekturą wnętrz
                      od ponad 25 lat.
                      <br />
                      Nasz zespół ma doświadczenie w projektach od małych do
                      średnich, <br />
                      nadzorze autorskim oraz kierowaniu budową. Od dekady
                      zaczęliśmy łączyć <br />
                      projektowanie przestrzenne z projektowaniem form
                      przemysłowych. <br />
                      W zależności od typu i rozmiaru projektu zapraszamy do
                      współpracy <br />
                      naszych kolegów po fachu oraz innych zaufanych
                      specjalistów.
                    </div>{" "}
                  </div>
                </Caption>
              </Slide>
              <Slide image={<img alt="" src={img3} />}>
                <Caption placement="right">
                  <div className="homeCaption hide-on-small-only">
                    <h3>
                      Filozofia
                      <Divider />
                    </h3>
                    <div className="light grey-text text-lighten-3 ">
                      <br /> Skupiamy się w pierwszej kolejności nad potrzebami
                      <br /> i oczekiwaniami naszych klientów, każdy projekt
                      jest analizowany
                      <br /> indywidualnie. Motywem przewodnim w naszej pracy
                      jest oddziaływanie
                      <br /> światła naturalnego oraz sztucznego na kolorystykę,
                      fakture bryly
                      <br /> budynku, geometrię wnętrza oraz powiazanie projektu
                      z naturá.Duzy
                      <br /> nacisk kladziemy na percepcję użytkownika w
                      projektowanym obiekcie.
                    </div>
                  </div>
                </Caption>
              </Slide>
            </Slider>{" "}
          </div>
        </div>
        <Row className="">
          <Col s={12} m={6} l={4}>
            <Card className="homeFirstcard white-text">
              {" "}
              <Row />
              <h4>
                Pracownia projektowa CHD <Divider />
              </h4>
              <Row />
              <Row>
                <Col s={4}>
                  <img src={architekturaLogo} width="100%" />
                </Col>
                <Col s={8}>
                  <div data-aos="fade-up" data-aos-duration="1000">
                  <a className="p2">
                      Architektura <Divider />
                    </a>
                    Elastyczny zespół, który poradzi sobie z różnymi projekatmi.
                    <br />
                    <br />
                    {/* <a className="white-text" href="#arch" id="">
                      WIECEJ INFORMACJI
                    </a> */}
                  </div>
                </Col>
              </Row>
              <Row>
                <Col s={4}>
                  <img src={wnetrzaLogo} width="100%" />
                </Col>
                <Col s={8}>
                  <div data-aos="fade-up" data-aos-duration="2000">
                  <a className="p2">
                      Wnętrza <Divider />
                    </a>
                    Wnętrza prywatne, komercyjne w pełnym zakresie, wraz z
                    nadzorem.
                    <br />
                    <br />
                    {/* <a className="white-text" href="#int" id="">
                      WIECEJ INFORMACJI
                    </a> */}
                  </div>
                </Col>
              </Row>
              <Row>
                <Col s={4}>
                  <img src={wizualizacjeLogo} width="100%" />
                </Col>
                <Col s={8}>
                  <div data-aos="fade-up" data-aos-duration="3000">
                  <a className="p2">
                      Wizualizacje <Divider />
                    </a>
                    Wizualizacje, Animacje, Interaktywne modele 3D VR, obiekty
                    BIM
                    <br />
                    <br />
                    {/* <a className="white-text" href="#vis" id="">
                      WIECEJ INFORMACJI
                    </a> */}
                  </div>
                </Col>
              </Row>
              <Row>
                <Col s={4}>
                  <img src={web} width="50%" />
                </Col>
                <Col s={8}>
                  <div data-aos="fade-up" data-aos-duration="3000">
                  <a className="p2">
                      Web design <Divider />
                      </a>
                    Design, frontend, backend 
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <div className="divHome1" />
        <div data-aos="fade-down" data-aos-duration="1000">
          <HomeSecond />
        </div>
      </div>
    );
};

export default HomeFirst;
