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
  Collapsible,
  CollapsibleItem,
} from "react-materialize";
import Aos from "aos";
import "aos/dist/aos.css";
import Animacje from "./svg/wnetrzaLogo.svg";
import img1 from "./svg/kanonicza.webp";
import img2 from "./svg/Rakowicka15C.webp";
import img3 from "./svg/Rakowicka15A.webp";
import img4 from "./svg/HOUSE_QOF35AHouseQ.jpeg";
import img5 from "./svg/koscielne.webp";
import finger from "./svg/finger (1).svg";
import Noncommercial from "./Noncommercial";
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
          Web Design 
          <Divider />
        </h3>
        <Row />
        <Row>
      
          <Col s={12} m={6}>
            <h3>Wyróżnij się stroną</h3>
            <div className="left-align">
            Chcesz, aby Twója firma zaistniała w sieci?
Zaprojektujemy stronę dla Ciebie.

              <li>Personalizacja</li>
              <li>Graphic design dla Twojej firmy</li>
              <li>React JS - skalowalność projektu</li>
              <li>Zdjecia, filmy, modele 3D</li>
              <li>Takie firmy jak Netflix, czy Facebook korzystają z React JS</li>
            </div>
          </Col>
          <Col s={12} m={6}>
            <img src={img1} width="100%"/>
          </Col>
          <Row/><Row/><Row/><Row/>
        </Row>
        <Row className="grey darken-3">
          <Col s={12} m={6}>
          <img src={img2} width="100%"/>
          </Col>
          <Col s={12} m={6}>
            <h3>Pokaż swój produkt lub swoją usługę od najlepszej strony</h3>
            <div className="left-align">              
              <li>Oferty sprzedażowe</li>
              <li>Atrakcyjne landing page</li>
              <li>Projekt dostosowany do branży</li>
            </div>
          </Col>
        </Row>
        <Row/><Row/><Row/><Row/>
        <Row>
          <Col s={12} m={6}>
            <h3>Bądź w kontakcie ze swoimi klientami</h3>
            <div className="left-align">
              Projektujemy strony, którepozwolą Ci na kontakt z klientem.
              <li>Formy mailowe</li>
              <li>Telefon, whatsup i inne komunikatory</li>
              <li>Połączenie z mapami</li>
            </div>
          </Col>
          <Col s={12} m={6}>
          <img src={img3} width="100%"/>
          </Col> <Row/><Row/><Row/><Row/>
        </Row>
        <Row className="teal darken-3"> <Row/><Row/><Row/><Row/>
        <h3>Jak będzie wyglądała nasza współpraca?</h3>
        Będziemy sprawował pieczę nad  treściami Twoich
        zasobów w sieci. Doświadczony grafik przygotuje materialy specjalnie dla Twoich potrzeb.
        Zapewniamy terminowość i przejrzyste warunki współpracy. Zanim
        zaczniemy pracę, wszystko ustalimy z Tobą. Masz kontrolę nad przebiegiem
        prac, a my zapewniamy jakość. Tresci dopasujemy
        do standardów rynkowych, ale przede wszystkim - do indywidualnych
        potrzeb Twojego biznesu.
        <Row/><Row/><Row/><Row/>
        </Row>
        <Row/><Row/><Row/><Row/>
        <Row />
        <Row><Col s={12} m={6} push="m3">
        <Collapsible className="black-text " accordion>
          <CollapsibleItem
          className="brown darken-3 "
            expanded={false}
            header="Jak będzie wyglądała nasza współpraca?"
            node="div"
          >
              <div className="white-text">
            1. Poznajemy się. 
            <br/>2. Przedstawiasz nam swój brief, czyli opis celów
            i pomysłów. 
            <br/>3. Analizujemy brief i to, czym dysponujesz obecnie. 
            <br/>4. Pracujemy kreatywnie. 
            <br/>5. Przedstawiamy Ci projekt. Działamy w myśl
            metodologii Agile (Zwinnego Wytwarzania Oprogramowania), która
            zakłada zmianę koncepcji w dowolnym momencie realizacji. 
            <br/>Jeśli zechcesz w którymś momencie coś zmienić - dopasujemy się. Nie robimy
            sztuki dla sztuki - zależy nam przede wszystkim na skuteczności
            projektu, który dla Ciebie realizujemy.</div>
          </CollapsibleItem>
          <CollapsibleItem
           className="grey darken-3 "
            expanded={false}
            header="Ile kosztuje stała obsługa graficzna mojego sklepu?"
            node="div"
          ><div className="white-text">
            Koszt zależy od liczby godzin i zakresu wsparcia. Oferujemy różne
            rozwiązania: konsulting, szkolenia, aktualizacje, backupy, pakiety
            usług. Niezależnie od tego, co wybierzesz, jest to tańsze
            rozwiązanie niż grafik na Twoim pokładzie.  Napisz
            do nas, wycenimy koszt naszej współpracy według Twoich potrzeb.</div>
          </CollapsibleItem>
          <CollapsibleItem
           className="teal darken-3 "
            expanded={false}
            header="Jak długo będę czekać na wdrożenie projektu?"
            node="div"
          ><div className="white-text">
            Skala projektu zależy od ciebie, a my to przekładamy na potrzebny
            czas. Realizacja jest możliwa nawet w 1 dzień. Czas zależeć będzie
            od potrzeb, dostępnych materiałów graficznych i tekstowych. Jak masz
            wszystko w głowie i materiały, a my mamy to ładnie ubrać – będzie
            szybko. Działamy w myśl metodologii Agile (Zwinnego Wytwarzania
            Oprogramowania), która zakłada zmianę koncepcji w dowolnym momencie
            realizacji.</div>
          </CollapsibleItem>
        </Collapsible></Col></Row>
      </div>
    );




    
  else return   ( 
  <div className="white-text">
  <Row />
  <Row />
  <Row />
  <h3 className="left-align">
    Web Design 
    <Divider />
  </h3>
  <Row />
  <Row>

    <Col s={12} m={6}>
      <h3>Wyróżnij się stroną</h3>
      <div className="left-align">
      Chcesz, aby Twója firma zaistniała w sieci?
Zaprojektujemy stronę dla Ciebie.

        <li>Personalizacja</li>
        <li>Graphic design dla Twojej firmy</li>
        <li>React JS - skalowalność projektu</li>
        <li>Zdjecia, filmy, modele 3D</li>
        <li>Takie firmy jak Netflix, czy Facebook korzystają z React JS</li>
      </div>
    </Col>
    <Col s={12} m={6}>
      <img src={img1} width="100%"/>
    </Col>
    <Row/><Row/><Row/><Row/>
  </Row>
  <Row className="grey darken-3">
    <Col s={12} m={6}>
    <img src={img2} width="100%"/>
    </Col>
    <Col s={12} m={6}>
      <h3>Pokaż swój produkt lub swoją usługę od najlepszej strony</h3>
      <div className="left-align">              
        <li>Oferty sprzedażowe</li>
        <li>Atrakcyjne landing page</li>
        <li>Projekt dostosowany do branży</li>
      </div>
    </Col>
  </Row>
  <Row/><Row/><Row/><Row/>
  <Row>
    <Col s={12} m={6}>
      <h3>Bądź w kontakcie ze swoimi klientami</h3>
      <div className="left-align">
        Projektujemy strony, którepozwolą Ci na kontakt z klientem.
        <li>Formy mailowe</li>
        <li>Telefon, whatsup i inne komunikatory</li>
        <li>Połączenie z mapami</li>
      </div>
    </Col>
    <Col s={12} m={6}>
    <img src={img3} width="100%"/>
    </Col> <Row/><Row/><Row/><Row/>
  </Row>
  <Row className="teal darken-3"> <Row/><Row/><Row/><Row/>
  <h3>Jak będzie wyglądała nasza współpraca?</h3>
  Będziemy sprawował pieczę nad  treściami Twoich
  zasobów w sieci. Doświadczony grafik przygotuje materialy specjalnie dla Twoich potrzeb.
  Zapewniamy terminowość i przejrzyste warunki współpracy. Zanim
  zaczniemy pracę, wszystko ustalimy z Tobą. Masz kontrolę nad przebiegiem
  prac, a my zapewniamy jakość. Tresci dopasujemy
  do standardów rynkowych, ale przede wszystkim - do indywidualnych
  potrzeb Twojego biznesu.
  <Row/><Row/><Row/><Row/>
  </Row>
  <Row/><Row/><Row/><Row/>
  <Row />
  <Row><Col s={12} m={6} push="m3">
  <Collapsible className="black-text " accordion>
    <CollapsibleItem
    className="brown darken-3 "
      expanded={false}
      header="Jak będzie wyglądała nasza współpraca?"
      node="div"
    >
        <div className="white-text">
      1. Poznajemy się. 
      <br/>2. Przedstawiasz nam swój brief, czyli opis celów
      i pomysłów. 
      <br/>3. Analizujemy brief i to, czym dysponujesz obecnie. 
      <br/>4. Pracujemy kreatywnie. 
      <br/>5. Przedstawiamy Ci projekt. Działamy w myśl
      metodologii Agile (Zwinnego Wytwarzania Oprogramowania), która
      zakłada zmianę koncepcji w dowolnym momencie realizacji. 
      <br/>Jeśli zechcesz w którymś momencie coś zmienić - dopasujemy się. Nie robimy
      sztuki dla sztuki - zależy nam przede wszystkim na skuteczności
      projektu, który dla Ciebie realizujemy.</div>
    </CollapsibleItem>
    <CollapsibleItem
     className="grey darken-3 "
      expanded={false}
      header="Ile kosztuje stała obsługa graficzna mojego sklepu?"
      node="div"
    ><div className="white-text">
      Koszt zależy od liczby godzin i zakresu wsparcia. Oferujemy różne
      rozwiązania: konsulting, szkolenia, aktualizacje, backupy, pakiety
      usług. Niezależnie od tego, co wybierzesz, jest to tańsze
      rozwiązanie niż grafik na Twoim pokładzie.  Napisz
      do nas, wycenimy koszt naszej współpracy według Twoich potrzeb.</div>
    </CollapsibleItem>
    <CollapsibleItem
     className="teal darken-3 "
      expanded={false}
      header="Jak długo będę czekać na wdrożenie projektu?"
      node="div"
    ><div className="white-text">
      Skala projektu zależy od ciebie, a my to przekładamy na potrzebny
      czas. Realizacja jest możliwa nawet w 1 dzień. Czas zależeć będzie
      od potrzeb, dostępnych materiałów graficznych i tekstowych. Jak masz
      wszystko w głowie i materiały, a my mamy to ładnie ubrać – będzie
      szybko. Działamy w myśl metodologii Agile (Zwinnego Wytwarzania
      Oprogramowania), która zakłada zmianę koncepcji w dowolnym momencie
      realizacji.</div>
    </CollapsibleItem>
  </Collapsible></Col></Row>
</div>
);
};

export default Modelowanie;
