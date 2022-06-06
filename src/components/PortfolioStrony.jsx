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
import drawingwebsite from "./svg/drawingwebsite.svg";
import drawingbrowser from "./svg/drawingbrowser.svg";
import website from "./svg/website.svg";
import madejpak from "./svg/madejpak.svg";
import wnek from "./svg/wnek.svg";
import zlocien from "./svg/zlocien.svg";


const Modelowanie = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  let lang = localStorage.getItem("lang");

  if (lang == "en")
    return (
      <Row>
      <Col s={12} m={8} push="m2">
        <div className="white-text">
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <h3 className="left-align">
            Web Design
            <Divider />
          </h3>
          <Row />
          <Row />
          <Row />
          <Row />
          <Row>
            <Col s={12} m={6}>
              <h3>
              Stand out with your site
                <Divider />
              </h3>
              <div className = "left-align">
                Do you want your company to appear on the web? We will design a
                page for you.
                <li> Personalization </li>
                <li> Graphic design for your company </li>
                <li> React JS - project scalability </li>
                <li> Photos, videos, 3D models </li>
                <li>
                  Companies such as Netflix and Facebook use React JS
                </li>
              </div>
            </Col>
            <Col s={12} m={6}>
              <img src={website} width="100%" />
            </Col>
            <Row />
            <Row />
            <Row />
            <Row />
          </Row>
          <Row className="grey darken-3">
            <Col s={12} m={6}>
              <img src={drawingwebsite} width="100%" />
            </Col>
            <Col s={12} m={6}>
              <h3>
              Show your product or service from the best side
                <Divider />
              </h3>
              <div className = "left-align">
                <br />
                <h5>
                  <li> Attractive landing page </li>
                  <br />
                  <li> Design adapted to the industry </li>
                  <br />
                  <li> Customer focus </li>
                  <br />
                  <li> Responsive Design </li>
                  <br />
                  <li> Cross-device optimization </li>
                </h5>
              </div>
            </Col>
          </Row>
          <Row />
          <Row />
          <Row />
          <Row />
          <Row>
            <Col s={12} m={6}>
              <h3>
              Stay in touch with your customers <Divider />
              </h3>
              <div className = "left-align">
                Wwebsites that will allow you to contact the client.
                <li> Forms of e-mail </li>
                <li> Phone, whatsup and other instant messaging </li>
                <li> Link to maps </li>
              </div>
            </Col>
            <Col s={12} m={6}>
              <img src={drawingbrowser} width="100%" />
            </Col>{" "}
            <Row />
            <Row />
            <Row />
            <Row />
          </Row>
          <Row className="teal darken-3">
            <Col s={12} m={6}>
              <Row />
              <Row />
              <Row />
              <Row />
              <h3>How will our cooperation look like? </h3>
              We will take care of the content of your resources on the web.
              An experienced graphic designer will prepare materials especially for yours
              needs. We provide timeliness and transparent conditions
              team work. Before we start work, we will arrange everything with you.
              You have control over the course of work and we ensure quality.
              We adapt the content to market standards, but most of all
              - to the individual needs of your business.
              <Row />
              <Row />
              <Row />
              <Row />
            </Col>
            <Col s={12} m={6}>
              <Collapsible className="black-text " accordion>
                <CollapsibleItem
                  className="teal darken-3 "
                  expanded={true}
                  header="Jak będzie wyglądała nasza współpraca?"
                  node="div"
                >
                  <div className="white-text">
                  1. We get to know each other.
                    <br />
                    2. You present us your brief, i.e. a description of the goals and
                    ideas.
                    <br />
                    3. We analyze the brief and what you currently have at your disposal.
                    <br />
                    4. We work creatively.
                    <br />
                    5. We present you the project. We operate according to the methodology
                    Agile, which implies
                    change of concept at any time of implementation.
                    <br />
                    If you want to change something at any point - we will adjust it
                    myself. We do not make art for the sake of art - we care above all
                    all on the effectiveness of the project that works for you
                    we carry out.
                  </div>
                </CollapsibleItem>
                <CollapsibleItem
                  className="teal darken-3 "
                  expanded={false}
                  header="Ile kosztuje stała obsługa graficzna mojego sklepu?"
                  node="div"
                >
                  <div className="white-text">
                  The cost depends on the number of hours and scope of support.
                    We offer various solutions: consulting, training,
                    updates, backups, service packages. Whether,
                    whatever you choose, it's cheaper than the graphics on
                    Your board. Write to us, we will estimate the cost of ours
                    cooperation according to your needs.
                  </div>
                </CollapsibleItem>
                <CollapsibleItem
                  className="teal darken-3 "
                  expanded={false}
                  header="Jak długo będę czekać na wdrożenie projektu?"
                  node="div"
                >
                  <div className="white-text">
                  The scale of the project is up to you, and we translate that into
                    time needed. Implementation is possible even in 1 day.
                    Time will depend on the needs and available materials
                    graphic and text. How do you have everything in your head and
                    materials, and we are to dress it nicely - it will be fast.
                    We operate in accordance with the Agile methodology (Agile Manufacturing
                    Software), which implies a change of concept in any
                    the moment of implementation.
                  </div>
                </CollapsibleItem>
              </Collapsible>
            </Col>
          </Row>
          <Row />
          <Row /><Row />
          <Row />
          <Row>  <h3>
                We work with<Divider />
              </h3>
            <Col s={12} m={4}>
            <Button large node="a" target="blank" className="teal darken-3" href="https://madejpak.pl/">
              Madej Pak
            <img src={madejpak} width="100%" />
            </Button>
        
            </Col>
            <Col s={12} m={4}>
            <Button large className="teal darken-3" href="https://hydraulikwnek.com/" node="a" target="blank">
              Wnek Hydraulika
            <img src={wnek} width="100%" />
            </Button>
            </Col>
            <Col s={12} m={4}>
            <Button large className="teal darken-3" href="https://willzazlocien.netlify.app/" node="a" target="blank">
              Idea Development
            <img src={zlocien} width="100%" />
            </Button>
            </Col>
            <Row />
            <Row />
            <Row />
            <Row />
          </Row>
          <Row />
          <Row />
          <Row />
        </div>
      </Col>
    </Row>
    );
  else
    return (
      <Row>
        <Col s={12} m={8} push="m2">
          <div className="white-text">
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <h3 className="left-align">
              Web Design
              <Divider />
            </h3>
            <Row />
            <Row />
            <Row />
            <Row />
            <Row>
              <Col s={12} m={6}>
                <h3>
                  Wyróżnij się stroną
                  <Divider />
                </h3>
                <div className="left-align">
                  Chcesz, aby Twója firma zaistniała w sieci? Zaprojektujemy
                  stronę dla Ciebie.
                  <li>Personalizacja</li>
                  <li>Graphic design dla Twojej firmy</li>
                  <li>React JS - skalowalność projektu</li>
                  <li>Zdjecia, filmy, modele 3D</li>
                  <li>
                    Takie firmy jak Netflix, czy Facebook korzystają z React JS
                  </li>
                </div>
              </Col>
              <Col s={12} m={6}>
                <img src={website} width="100%" />
              </Col>
              <Row />
              <Row />
              <Row />
              <Row />
            </Row>
            <Row className="grey darken-3">
              <Col s={12} m={6}>
                <img src={drawingwebsite} width="100%" />
              </Col>
              <Col s={12} m={6}>
                <h3>
                  Pokaż swój produkt lub usługę od najlepszej strony
                  <Divider />
                </h3>
                <div className="left-align">
                  <br />
                  <h5>
                    <li>Atrakcyjna landing page</li>
                    <br />
                    <li>Projekt dostosowany do branży</li>
                    <br />
                    <li>Koncentracja na kliencie</li>
                    <br />
                    <li>Responsive Design</li>
                    <br />
                    <li>Optymalizacja na różne urządzenia</li>
                  </h5>
                </div>
              </Col>
            </Row>
            <Row />
            <Row />
            <Row />
            <Row />
            <Row>
              <Col s={12} m={6}>
                <h3>
                  Bądź w kontakcie ze swoimi klientami <Divider />
                </h3>
                <div className="left-align">
                  Projektujemy strony, które pozwolą Ci na kontakt z klientem.
                  <li>Formy mailowe</li>
                  <li>Telefon, whatsup i inne komunikatory</li>
                  <li>Połączenie z mapami</li>
                </div>
              </Col>
              <Col s={12} m={6}>
                <img src={drawingbrowser} width="100%" />
              </Col>{" "}
              <Row />
              <Row />
              <Row />
              <Row />
            </Row>
            <Row className="teal darken-3">
              <Col s={12} m={6}>
                <Row />
                <Row />
                <Row />
                <Row />
                <h3>Jak będzie wyglądała nasza współpraca?</h3>
                Będziemy sprawował pieczę nad treściami Twoich zasobów w sieci.
                Doświadczony grafik przygotuje materialy specjalnie dla Twoich
                potrzeb. Zapewniamy terminowość i przejrzyste warunki
                współpracy. Zanim zaczniemy pracę, wszystko ustalimy z Tobą.
                Masz kontrolę nad przebiegiem prac, a my zapewniamy jakość.
                Tresci dopasujemy do standardów rynkowych, ale przede wszystkim
                - do indywidualnych potrzeb Twojego biznesu.
                <Row />
                <Row />
                <Row />
                <Row />
              </Col>
              <Col s={12} m={6}>
                <Collapsible className="black-text " accordion>
                  <CollapsibleItem
                    className="teal darken-3 "
                    expanded={true}
                    header="Jak będzie wyglądała nasza współpraca?"
                    node="div"
                  >
                    <div className="white-text">
                      1. Poznajemy się.
                      <br />
                      2. Przedstawiasz nam swój brief, czyli opis celów i
                      pomysłów.
                      <br />
                      3. Analizujemy brief i to, czym dysponujesz obecnie.
                      <br />
                      4. Pracujemy kreatywnie.
                      <br />
                      5. Przedstawiamy Ci projekt. Działamy w myśl metodologii
                      Agile (Zwinnego Wytwarzania Oprogramowania), która zakłada
                      zmianę koncepcji w dowolnym momencie realizacji.
                      <br />
                      Jeśli zechcesz w którymś momencie coś zmienić - dopasujemy
                      się. Nie robimy sztuki dla sztuki - zależy nam przede
                      wszystkim na skuteczności projektu, który dla Ciebie
                      realizujemy.
                    </div>
                  </CollapsibleItem>
                  <CollapsibleItem
                    className="teal darken-3 "
                    expanded={false}
                    header="Ile kosztuje stała obsługa graficzna mojego sklepu?"
                    node="div"
                  >
                    <div className="white-text">
                      Koszt zależy od liczby godzin i zakresu wsparcia.
                      Oferujemy różne rozwiązania: konsulting, szkolenia,
                      aktualizacje, backupy, pakiety usług. Niezależnie od tego,
                      co wybierzesz, jest to tańsze rozwiązanie niż grafik na
                      Twoim pokładzie. Napisz do nas, wycenimy koszt naszej
                      współpracy według Twoich potrzeb.
                    </div>
                  </CollapsibleItem>
                  <CollapsibleItem
                    className="teal darken-3 "
                    expanded={false}
                    header="Jak długo będę czekać na wdrożenie projektu?"
                    node="div"
                  >
                    <div className="white-text">
                      Skala projektu zależy od ciebie, a my to przekładamy na
                      potrzebny czas. Realizacja jest możliwa nawet w 1 dzień.
                      Czas zależeć będzie od potrzeb, dostępnych materiałów
                      graficznych i tekstowych. Jak masz wszystko w głowie i
                      materiały, a my mamy to ładnie ubrać – będzie szybko.
                      Działamy w myśl metodologii Agile (Zwinnego Wytwarzania
                      Oprogramowania), która zakłada zmianę koncepcji w dowolnym
                      momencie realizacji.
                    </div>
                  </CollapsibleItem>
                </Collapsible>
              </Col>
            </Row>
            <Row />
            <Row /><Row />
            <Row />
            <Row>  <h3>
                  Współpracujemy z <Divider />
                </h3>
                <Col s={12} m={4}>
            <Button large node="a" target="blank" className="teal darken-3" href="https://madejpak.pl/">
              Madej Pak
            <img src={madejpak} width="100%" />
            </Button>
        
            </Col>
            <Col s={12} m={4}>
            <Button large className="teal darken-3" href="https://hydraulikwnek.com/" node="a" target="blank">
              Wnek Hydraulika
            <img src={wnek} width="100%" />
            </Button>
            </Col>
            <Col s={12} m={4}>
            <Button large className="teal darken-3" href="https://willzazlocien.netlify.app/" node="a" target="blank">
              Idea Development
            <img src={zlocien} width="100%" />
            </Button>
            </Col>
              <Row />
              <Row />
              <Row />
              <Row />
            </Row>
            <Row />
            <Row />
            <Row />
          </div>
        </Col>
      </Row>
    );
};

export default Modelowanie;
