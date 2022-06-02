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
          Web Design https://sungroup.pl/oferta/obsluga-graficzna-sklepow-internetowych?gclid=CjwKCAjwv-GUBhAzEiwASUMm4mDjWCFORoxQ6FW4nO_Vhr7qFQCHnCyBkx1_K5ST0Y4CXJW96biNqhoCWiIQAvD_BwE
          <Divider />
        </h3>
        <Row />
        <Row>
      
          <Col s={12} m={6}>
            <h3>Wyróżnij się reklamą</h3>
            <div>
            Chcesz, aby Twoja reklama się wyróżniała?
Zaprojektujemy ją dla Ciebie.

              <li>Bannery promocyjne</li>
              <li>Grafiki w social media</li>
              <li>Kreacje reklamowe Google GDN</li>
            </div>
          </Col>
          <Col s={12} m={6}>
            tutaj strona
          </Col>
        </Row>
        <Row className="grey darken-3">
          <Col s={12} m={6}>
            tutaj strona
          </Col>
          <Col s={12} m={6}>
            <h3>Pokaż swój produkt od najlepszej stron</h3>
            <div>
              Zaprojektuj z nami swój landing page, który zapewni sprzedaż
              Twojego produktu na odpowiednim poziomie.
              <li>Oferty sprzedażowe</li>
              <li>Landing page promocyjne i konkursowe</li>
              <li>Landing page produktowe</li>
            </div>
          </Col>
        </Row>
        <Row>
          <Col s={12} m={6}>
            <h3>Bądź w kontakcie ze swoimi klientami</h3>
            <div>
              Projektujemy mailingi i newslettery, które się czytają. Zapewnij
              swoim klientom stały dostęp do informacji o swojej ofercie.
              <li>Cykliczne akcje mailingowe</li>
              <li>Szablony newsletterów</li>
              <li>Kampanie mailingowe</li>
            </div>
          </Col>
          <Col s={12} m={6}>
            tutaj strona
          </Col>
        </Row>
        <Row className="teal darken-3">
        <h3>Jak będzie wyglądała nasza współpraca?</h3>
        sz ekspert będzie sprawował pieczę nad kampaniami i treściami Twoich
        mailingów. Doświadczony zespół grafików W Sun Group mamy świetnych
        specjalistów UX, którzy zapewnią czytelność i odpowiedni układ graficzny
        treści mailingowych. Terminowość i przejrzyste warunki współpracy Zanim
        zaczniemy pracę, wszystko ustalimy z Tobą. Masz kontrolę nad przebiegiem
        prac, a my zapewniamy jakość. Dopasowane rozwiązania Kampanie dopasujemy
        do standardów rynkowych, ale przede wszystkim - do indywidualnych
        potrzeb Twojego biznesu. Wsparcie techniczne i marketingowe Po wdrożeniu
        zapewniamy dalsze wsparcie i służymy radą.
        </Row>
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
            1. Poznajemy się. 2. Przedstawiasz nam swój brief, czyli opis celów
            i pomysłów. 3. Analizujemy brief i to, czym dysponujesz obecnie. 4.
            Pracujemy kreatywnie. 5. Przedstawiamy Ci projekt. Działamy w myśl
            metodologii Agile (Zwinnego Wytwarzania Oprogramowania), która
            zakłada zmianę koncepcji w dowolnym momencie realizacji. Jeśli
            zechcesz w którymś momencie coś zmienić - dopasujemy się. Nie robimy
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
            rozwiązanie niż grafik na Twoim pokładzie. W ramach pakietu usług
            możemy umówić się na konkretną pulę godzin w miesiącu. Możesz ją
            kontrolować i zmieniać warunki. Dzięki takiemu rozwiązaniu będziemy
            do Twojej dyspozycji wtedy, gdy będzie to konieczne. Przykładowy
            pakiet usług (np. key visual w formie headera lub dużego banera +
            paczka 12 banerów GDN) to koszt w granicach 1.200 – 1.550 zł. Napisz
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
            realizacji. To nie czas nas ogranicza, tylko budżet :)</div>
          </CollapsibleItem>
        </Collapsible></Col></Row>
      </div>
    );
  else return <div></div>;
};

export default Modelowanie;
