import "materialize-css";
import React, { Component, useEffect } from "react";
import {
  Button,
  Col,
  Divider,
  Row,

  Carousel,
} from "react-materialize";
import Aos from "aos";
import "aos/dist/aos.css";
import finger from "./svg/finger (1).svg"


const HomeWnetrza = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  let lang = localStorage.getItem("lang");

  if (lang == "en") return (   
    <div>
      <Carousel
        carouselId="Carousel-2"
        className="white-text center"
        options={{
          indicators: false,
          fullWidth: true,
          
        }}
      >
        <div className="cyan darken-4">
          <div className="kropki center white-text">
                <img src={finger} width="100%"/>
                </div>
          <Row>
            <Row className="hide-on-med-and-down" />
            <Row className="hide-on-med-and-down" />
            <Row className="hide-on-med-and-down" />
            <Row className="hide-on-med-and-down" />
            <Col s={12} l={6}>
              <img
                className="imgCarousel"
                src="https://images.unsplash.com/photo-1618385455730-2571c38966b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                width="100%"
              />
            </Col>
            <Col s={12} l={6}>
              <h3 className="smallHead">
                Interrior design <Divider />
              </h3>
              <div className="left-align smallText">
              We offer  private, commercial interior design 
                  to the full extent, including supervision.
                <br />
                <h5 className = "smallHead"> INDIVIDUAL APPROACH </h5>
                We do not design using a template. Each of our projects is carefully
                thoughtful and planned! We pay attention to details
                and we design with passion and commitment.
                <h5 className = "smallHead"> FOR EVERY POCKET </h5>
                We adapt all projects to your financial situation.
                <h5 className = "smallHead"> PROVEN SOLUTIONS </h5>
                We only work with proven contractors.
                <h5 className = "smallHead"> TIMELY </h5>
                We only accept enough orders to meet our client's deadlines.
                
                <br />
                <br />
                <Button node="a" href="contact">Call/write</Button>
              </div>
            </Col>
          </Row>
        </div>
        <div className=" cyan darken-3">
          <div className="kropki center white-text">
                <img src={finger} width="100%"/>
                </div>
          <Row className="hide-on-med-and-down" />
          <Row className="hide-on-med-and-down" />
          <Row className="hide-on-med-and-down" />
          <Row className="hide-on-med-and-down" />
          <Row>
            <Col s={12} l={6}>
              <img
                className="imgCarousel"
                src="https://images.unsplash.com/photo-1525193612562-0ec53b0e5d7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
                width="100%"
              />
            </Col>
            <Col s={12} l={6}>
              <h3 className="smallHead">
                We specialise in: <Divider />
              </h3>
              <div className = "left-align smallText">
                 Our team is able to cope with all
                 tasks, we are proud of extensive experience in
                 design and build of the following objects:
               </div>
               <h5 className = "left-align">
                 ✓ Restaurants and cafes
                 <br />
                 <br /> ✓ Apartments
                 <br /> <br /> ✓ Historical objects
                 <br /> <br /> ✓ Apartments for rent
                 <br /> <br /> ✓ "Developers"
                 <br /> <br /> ✓ Furniture designs
                 <br /> <br />
             <Button node = "a" href = "portfolio"> Examples </Button>
              </h5>
            </Col>
          </Row>
        </div>
        <div className="grey darken-3">
          <div className="kropki center white-text">
                <img src={finger} width="100%"/>
                </div>
          <Row className="hide-on-med-and-down" />
          <Row className="hide-on-med-and-down" />
          <Row className="hide-on-med-and-down" />
          <Row className="hide-on-med-and-down" />
          <Row>
            <Col s={12} l={6}>
              <img
                className="imgCarousel"
                src="https://images.unsplash.com/photo-1542621334-a254cf47733d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                width="100%"
              />
            </Col>
            <Col s={12} l={6}>
              <h3 className="smallHead">
              Full <Divider /> documentation
              </h3>
              <div className = "left-align smallText">
                <li> Flooring drawings </li>
                <li>
                  {""}
                  Drawings of suspended ceilings and plasterboard constructions and changes
                  layout of partition walls
                </li>
                <li> Drawings with the location of electrical points </li>
                <li>
                  {""}
                  Drawings with the arrangement of plumbing points
                </li>
                <li>
                  {""}
                  Drawings with lighting, including LED profiles and transformers
                </li>
                <li>
                  {""}
                  Layers of the bathroom - that is, projections from the front, on which you can see
                  placement of tiles and equipment;
                </li>
                <li>
                  {""}
                  Drawings of custom-made furniture, e.g. kitchens, built-in wardrobes,
                  cabinets, chests of drawers, tables
                </li>
                <li>
                  {""}
                  Drawings with color marking of walls and ceilings, marked
                  places where wallpapers, decorative masses are to be located,
                  mirrors; drawings
                </li>
                <li>
                  {""}
                  List of products to buy with a description of materials, z
                  what they are made of
                </li>
                <li>
                  {""}
                  Renovation estimate taking into account all valuations
                </li>
                <li> Design of unusual graphics and decorations </li>
                <br />
                <Button node = "a" href = "contact"> Call / Write </Button>
                
              </div>
            </Col>
          </Row>
        </div>
        <div className="blue-grey darken-2">
          <div className="kropki center white-text">
                <img src={finger} width="100%"/>
                </div>
          <Row className="hide-on-med-and-down" />
          <Row className="hide-on-med-and-down" />
          <Row>
            <Col s={12} l={6}>
              <img
                className="imgCarousel"
                src="https://media4.giphy.com/media/26FfbM5bbhCdLANW0/giphy.gif"
                width="100%"
              />
            </Col>
            <Col s={12} l={6}>
              <h3 className="smallHead">
              Supervision and consulting <Divider />
               </h3>
               <h5 className = "left-align smallText">
                 We have a unique combination of driving experience
                 construction works and companies not related to the construction industry,
                 talking to us before starting the investment will help you estimate
                 profitability of such a venture.
               </h5>
               <br />
                 <Button node = "a" href = "contact"> Call / Write </Button>
            </Col>
          </Row>
        </div>
      </Carousel>
    
    </div>
  );
  else
    return (   
      <div>
        <Carousel
          carouselId="Carousel-2"
          className="white-text center"
          options={{
            indicators: false,
            fullWidth: true,
            
          }}
        >
          <div className="cyan darken-4">
            <div className="kropki center white-text">
                  <img src={finger} width="100%"/>
                  </div>
            <Row>
              <Row className="hide-on-med-and-down" />
              <Row className="hide-on-med-and-down" />
              <Row className="hide-on-med-and-down" />
              <Row className="hide-on-med-and-down" />
              <Col s={12} l={6}>
                <img
                  className="imgCarousel"
                  src="https://images.unsplash.com/photo-1618385455730-2571c38966b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  width="100%"
                />
              </Col>
              <Col s={12} l={6}>
                <h3 className="smallHead">
                  Projekty Wnętrz <Divider />
                </h3>
                <div className="left-align smallText">
                  Oferujemy przygotowanie projektu wnętrz prywatnych oraz
                  komercyjnych w pełnym zakresie, wraz z nadzorem.
                  <br />
                  <h5 className="smallHead">INDYWIDUALNE PODEJŚCIE</h5>
                  Nie projektujemy szablonowo. Każdy nasz projekt jest dokładnie
                  przemyślany i zaplanowany! Przywiązując wagę do detali
                  projektujemy z pasją i zaangażowaniem.
                  <h5 className="smallHead">PROJEKTUJEMY NA KAŻDĄ KIESZEŃ</h5>
                  Wszystkie projekty dostosowujemy do Państwa możliwości
                  finansowych.
                  <h5 className="smallHead">SPRAWDZONE ROZWIĄZANIA</h5>
                  Współpracujemy tylko ze sprawdzonymi wykonawcami, właśnie
                  dlatego mamy pewność, że wszystkie założenia projektowe
                  zostaną zrealizowane.
                  <h5 className="smallHead">TERMINOWOŚĆ</h5>
                  Przyjmujemy tylko tyle zleceń, aby żaden z naszych klientów
                  nie musiał czekać zbyt długo na projekt.
                  <br />
                  <br />
                  <Button node="a" href="contact">Zadzwoń/Napisz</Button>
                </div>
              </Col>
            </Row>
          </div>
          <div className=" cyan darken-3">
            <div className="kropki center white-text">
                  <img src={finger} width="100%"/>
                  </div>
            <Row className="hide-on-med-and-down" />
            <Row className="hide-on-med-and-down" />
            <Row className="hide-on-med-and-down" />
            <Row className="hide-on-med-and-down" />
            <Row>
              <Col s={12} l={6}>
                <img
                  className="imgCarousel"
                  src="https://images.unsplash.com/photo-1525193612562-0ec53b0e5d7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
                  width="100%"
                />
              </Col>
              <Col s={12} l={6}>
                <h3 className="smallHead">
                  Specjalizacja w: <Divider />
                </h3>
                <div className="left-align smallText">
                  O ile nasz zespół jest w stanie poradzić sobie z kadym
                  zadaniem, mozemy się poszczycić szczególnym doświadczeniem w
                  projektowaniu i realizacji następującym obiektów:
                </div>
                <h5 className="left-align">
                  ✓ Restauracjach i kawiarniach
                  <br />
                  <br />✓ Mieszkaniach
                  <br /> <br />✓ Historycznych obiektach
                  <br /> <br />✓ Mieszkaniach pod wynajem
                  <br /> <br />✓ "Deweloperkach"
                  <br /> <br />✓ Projektach mebli
                  <br />   <br />
              <Button node="a" href="portfolio">Przykłady</Button>
                </h5>
              </Col>
            </Row>
          </div>
          <div className="grey darken-3">
            <div className="kropki center white-text">
                  <img src={finger} width="100%"/>
                  </div>
            <Row className="hide-on-med-and-down" />
            <Row className="hide-on-med-and-down" />
            <Row className="hide-on-med-and-down" />
            <Row className="hide-on-med-and-down" />
            <Row>
              <Col s={12} l={6}>
                <img
                  className="imgCarousel"
                  src="https://images.unsplash.com/photo-1542621334-a254cf47733d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  width="100%"
                />
              </Col>
              <Col s={12} l={6}>
                <h3 className="smallHead">
                  Pełna dokumentacja <Divider />
                </h3>
                <div className="left-align smallText ">
                  <li>Rysunki ułożenia podłóg</li>
                  <li>
                    {" "}
                    Rysunki sufitów podwieszanych oraz zabudowy g-k oraz zmian
                    kładu ścian działowych
                  </li>
                  <li> Rysunki z rozmieszczeniem punktów elektrycznych</li>
                  <li>
                    {" "}
                    Rysunki z rozmieszczeniem punktów wodno-kanalizacyjnych
                  </li>
                  <li>
                    {" "}
                    Rysunki z oświetlenie w tym profile ledowe i transformatory
                  </li>
                  <li>
                    {" "}
                    Kłady łazienki – czyli rzuty od przodu, na których widać
                    rozmieszczenie płytek i sprzętów;
                  </li>
                  <li>
                    {" "}
                    Rysunki mebli na zamówienie np. kuchni, szaf wnękowych,
                    szafek, komód, stołów
                  </li>
                  <li>
                    {" "}
                    Rysunki z zaznaczeniem kolorów ścian i sufitów,  zaznaczone
                    miejsca, gdzie mają się znajdować tapety, masy dekoracyjne,
                    lustra; rysunki
                  </li>
                  <li>
                    {" "}
                    Spis produktów do kupienia wraz z opisem materiałów, z
                    jakich są wykonane
                  </li>
                  <li>
                    {" "}
                    Kosztorys remontowy z uwzględnieniem wszystkich wycen
                  </li>
                  <li> Projekt nietypowych grafik i dekoracji</li>
                  <br />
                  <Button node="a" href="contact">Zadzwoń/Napisz</Button>

                  
                </div>
              </Col>
            </Row>
          </div>
          <div className="blue-grey darken-2">
            <div className="kropki center white-text">
                  <img src={finger} width="100%"/>
                  </div>
            <Row className="hide-on-med-and-down" />
            <Row className="hide-on-med-and-down" />
            <Row>
              <Col s={12} l={6}>
                <img
                  className="imgCarousel"
                  src="https://media4.giphy.com/media/26FfbM5bbhCdLANW0/giphy.gif"
                  width="100%"
                />
              </Col>
              <Col s={12} l={6}>
                <h3 className="smallHead">
                  Nadzór i doradztwo <Divider />
                </h3>
                <h5 className="left-align smallText">
                  Posiadamy unikalne połączenie doświadczenia w prowadzeniu
                  robót budowlanych oraz firm nie związanych z braną budowlaną,
                  rozmowa z nami przed rozpoczęciem inwestycji pomze oszcować
                  dochodowść takiego przedsięwzięcia.
                </h5>
                <br />
                  <Button node="a" href="contact">Zadzwoń/Napisz</Button>
              </Col>
            </Row>
          </div>
        </Carousel>
      
      </div>
    );
};

export default HomeWnetrza;
