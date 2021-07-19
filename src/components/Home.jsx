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

      // <Row className="z-depth-1">
      //   <Row>
      //     <Slider
      //       fullscreen={true}
      //       options={{
      //         duration: 500,
      //         height: 400,
      //         indicators: false,
      //         interval: 6000,
      //       }}
      //     >
      //       <Slide
      //         image={
      //           <img
      //             alt=""
      //             src="https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/kanonicza151.webp"
      //           />
      //         }
      //       ></Slide>
      //       <Slide
      //         image={
      //           <img
      //             alt=""
      //             src="https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/rakowicka151.webp"
      //           />
      //         }
      //       ></Slide>
      //       <Slide
      //         image={
      //           <img
      //             alt=""
      //             src="https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/ingo1.webp"
      //           />
      //         }
      //       ></Slide>
      //       <Slide
      //         image={
      //           <img
      //             alt=""
      //             src="https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/apartament31.webp"
      //           />
      //         }
      //       ></Slide>
      //     </Slider>
      //   </Row>
      //   <Row>
      //     <div className="hide-on-small-only">
      //       <div className="homecardleft z-depth-3">
      //         <h3>Projekt wnętrz</h3>
      //         <br />
      //         Koncepcyjny / Wykonawczy / Domy / Mieszkania / Powierzchnie
      //         usługowe / Gastronomia / Hotele
      //         <br />
      //         <br />
      //         Pakiet bazowy:
      //         <br></br> <br />
      //         Rysunki CAD 2D, 3D
      //         <li />
      //         Przykłady mebli, oświetlenia i materiałów
      //         <li />
      //         Animacja 3D (Unreal Engine) <li />
      //         Wizualizacje <li />
      //         Pliki BIM (wirtualny spacer)
      //         <br />
      //         <br />
      //         <Button
      //           className="z-depth-2  black"
      //           large
      //           target="blank"
      //           node="a"
      //           href="https://goo.gl/maps/xrJdtaQWoJFFU5ya7"
      //         >
      //           Mapa
      //         </Button>
      //         <a className="btn-large black " href="tel:+48518048983">
      //           zadzwoń
      //         </a>
      //         <a
      //           className="btn-large black "
      //           href="mailto:cholujdesign@gmail.com"
      //         >
      //           Napisz
      //         </a>
      //       </div>

      //       <div className="homecardright z-depth-3">
      //         <h3>Projekt architektoniczny</h3>
      //         <br />
      //         Koncepcyjny / Budowlany / Domy 35m2 / Domy szkieletowe
      //         <br />
      //         <br />
      //         Pakiet bazowy:
      //         <br></br> <br />
      //         Rysunki CAD 2D, 3D
      //         <li />
      //         Animacja 3D (Unreal Engine) <li />
      //         Wizualizacje <li />
      //         Pliki BIM (wirtualny spacer)
      //         <br />
      //         <br />
      //         <Button
      //           className="z-depth-2  black"
      //           large
      //           target="blank"
      //           node="a"
      //           href="https://goo.gl/maps/xrJdtaQWoJFFU5ya7"
      //         >
      //           Mapa
      //         </Button>
      //         <a className="btn-large black " href="tel:+48518048983">
      //           zadzwoń
      //         </a>
      //         <a
      //           className="btn-large black "
      //           href="mailto:cholujdesign@gmail.com"
      //         >
      //           Napisz
      //         </a>
      //       </div>
      //     </div>
      //   </Row>
      //   <Row>
      //     <div className="hide-on-med-and-up">
      //       <div className="mobilehomecardleft z-depth-3">
      //         <h5>Projekty wnętrz</h5>
              
      //         Koncepcyjne / Wykonawcze / Domy / Mieszkania / Powierzchnie
      //         usługowe / Gastronomia / Hotele
      //         <br />
          
          

      //         <h5>Projekty architektoniczne</h5>
         
      //         Koncepcyjne / Budowlane / Domy 35m2 / Domy szkieletowe
      //         <br />
      //         <br />
      //         <h5>Nasz pakiet bazowy:</h5>
      //         <br />
      //         Rysunki CAD 2D, 3D /
              
      //         Animacja 3D (Unreal Engine)  /
      //         Wizualizacje  /
      //         Pliki BIM (wirtualny spacer) 
              
      //         <br /><br />
      //         <Button
      //           className="z-depth-2  black"
                
      //           target="blank"
      //           node="a"
      //           href="https://goo.gl/maps/xrJdtaQWoJFFU5ya7"
      //         >
      //           Mapa
      //         </Button>
      //         <a className="btn black " href="tel:+48518048983">
      //           zadzwoń
      //         </a>
      //         <a
      //           className="btn black "
      //           href="mailto:cholujdesign@gmail.com"
      //         >
      //           Napisz
      //         </a>
      //       </div>
      //     </div>
      //   </Row>
      //   <div className="homebody">
      //     <Col m={8} push="m2">
      //       <div data-aos="fade-down" data-aos-duration="2000" className="">
      //         <Card className="homecard">
      //           <Row>
      //             <h3 className="center-align">
      //               Kilka słów o nas <Divider />
      //             </h3>
      //             <br />
      //             <Col m={6} className="left-align">
      //               Biuro Chołuj Design s.c. funkcjonuje w sercu Krakowa od
      //               ponad 25 lat. Nasz zespół posiada doswiadczenie w
      //               projektowaniu przestrzennym oraz form przemysłowych.
      //               Ukoczyliśmy architekturę na uczelniach polskich oraz
      //               zagranicznych, nasze dodatkowe zainteresowania oraz projekty
      //               w branżach restauracyjnej, artystycznej i IT owocują
      //               tworzeniem ciekawych i nowatorskich projektów.
      //             </Col>
      //             <Col m={6}>
      //               <img
      //                 src="https://images.unsplash.com/photo-1503387837-b154d5074bd2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
      //                 width="100%"
      //               />
      //             </Col>
      //           </Row>
      //         </Card>
      //       </div>
      //       <Row />
      //       <Row />
      //       <Row />
      //       <Row />
      //       <Row />
      //       <div data-aos="fade-down" data-aos-duration="2000" className="">
      //         <Card className="homecard">
      //           <Row>
      //             <h3 className="center-align">
      //               Oferta
      //               <Divider />
      //             </h3>
      //             <br />
      //             <Col m={6}>
      //               <img
      //                 src="https://images.unsplash.com/photo-1554224154-22dec7ec8818?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
      //                 width="100%"
      //               />
      //             </Col>
      //             <Col m={6} className="left-align">
      //               <h5>
      //                 <li>Projekty Architektoniczne</li>
      //                 <br />
      //                 <li>Projekty Wnętrz</li>
      //                 <br />
      //                 <li>Materiały marketingowe dla inwestycji</li>
      //                 <br />
      //                 <li>Projekty Oswietlenia budynków</li>
      //                 <br />
      //                 <li>Realizacje obiektów 'pod klucz' </li>
      //                 <br />
      //                 <li>Obsługa projektowo/designerska firm</li>
      //                 <br />
      //                 <li>Tworzenie bibliotek BIM/3D</li>
      //                 <br />
      //                 <li>Projekty i prototypy mebli oraz oświetlenia</li>
      //                 <br />
      //                 <li>Projekty Ogrodów</li>
      //                 <br />
      //               </h5>
      //             </Col>
      //           </Row>
      //         </Card>
      //       </div>
      //       <Row /> <Row /> <Row /> <Row /> <Row /> <Row />
      //       <div data-aos="fade-down" data-aos-duration="2000" className="">
      //         <Card className="homecard">
      //           <Row>
      //             <h3 className="center-align">
      //               Doświadczenie <Divider />
      //             </h3>
      //             <br />
      //             <Col m={6} className="left-align">
      //               <h5>
      //                 Zajmujemy się architekturą oraz architekturą wnętrz od
      //                 ponad 25 lat. Nasz zespół ma doświadczenie w projektach od
      //                 małych do średnich, nadzorze autorskim oraz kierowaniu
      //                 budową. Od dekady zaczęliśmy łączyć projektowanie
      //                 przestrzenne z projektowaniem form przemysłowych. W
      //                 zależności od typu i rozmiaru projektu zapraszamy do
      //                 współpracy naszych kolegów po fachu oraz innych zaufanych
      //                 specjalistów.
      //               </h5>
      //             </Col>
      //             <Col m={6}>
      //               <img
      //                 src="https://images.unsplash.com/photo-1591588582259-e675bd2e6088?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
      //                 width="100%"
      //               />
      //             </Col>
      //           </Row>
      //         </Card>
      //       </div>
      //       <Row /> <Row /> <Row /> <Row /> <Row /> <Row />
      //       <div data-aos="fade-down" data-aos-duration="2000" className="">
      //         <Card className="homecard">
      //           <Row>
      //             <h3 className="center-align">
      //               Manifesto <Divider />
      //             </h3>
      //             <br />
      //             <Col m={6}>
      //               <img
      //                 src="https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      //                 width="100%"
      //               />
      //             </Col>
      //             <Col m={6} className="left-align">
      //               <h5>
      //                 Skupiamy się w pierwszej kolejności nad potrzebami oraz
      //                 oczekiwaniami naszych klientów, każdy projekt jest
      //                 analizowany indywidualnie. Motywem przewodnim w naszej
      //                 pracy jest oddziaływanie światła naturalnego oraz
      //                 sztucznego na kolorystykę, fakturę i tektonikę bryły
      //                 budynku; geometrię wnętrza oraz powiązanie projektu z
      //                 naturą. Duży nacisk kładziemy na percepcję użytkownika w
      //                 projektowanym obiekcie.{" "}
      //               </h5>
      //             </Col>
      //           </Row>
      //         </Card>
      //       </div>
      //     </Col>
      //   </div>{" "}
      // </Row>
  
  );
};

export default Home;
