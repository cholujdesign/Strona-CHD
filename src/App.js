import React, { Component } from "react";
import "./App.css";
import "materialize-css";
import { Button, Card, Row, Col, Modal } from "react-materialize";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Commercial from "./components/Commercial";
import Noncommercial from "./components/Noncommercial";
import Other from "./components/Other";
import Portfolio from "./components/Portfolio";
import Offer from "./components/Offer";
import Nav from "./components/Nav";
import PortfolioArchitektura from "./components/PortfolioArchitektura.jsx";
import PortfolioWnetrza from "./components/PortfolioWnetrza.jsx";
import PortfolioAnimacje from "./components/PortfolioAnimacje.jsx";
import PortfolioWizualizacje from "./components/PortfolioWizualizacje.jsx";
import PortfolioModelowanie from "./components/PortfolioModelowanie.jsx";
import PortfolioStrony from "./components/PortfolioStrony.jsx";
import InstrukcjeZameldowania from "./components/InstrukcjeZameldowania";
import Kuba from "./components/Kuba"
import DocumentMeta from 'react-document-meta';

function App() {
  const meta = {
    title: "CHD",
    description: "Architektura, wnetrza, wizualizacje, strony www, cholujdesign",
    canonical: "https://cholujdesign.com",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "Projekty wnetrz, projekty wnętrz, interrior design, animacje, animations, wizualizacje, kraków, krakow, architektura, architecture, architekt, architect, dom, mieszkanie",
      },
    },
  };
  return (
    <DocumentMeta {...meta}>
      <div className="App">
        <Row>
          <BrowserRouter>
            <br />

            <Nav />
            <br />

            <Switch>
            <Route path="/JakubCholuj" component={Kuba} />
              <Route path="/home" component={Home} />
              <Route path="/instructions" component={InstrukcjeZameldowania}/>
              <Route path="/contact" component={Contact} />
              <Route path="/offer" component={Offer} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/commercial" component={Commercial} />
              <Route path="/noncommercial" component={Noncommercial} />
              <Route path="/architektura" component={PortfolioArchitektura} />
              <Route path="/wnetrza" component={PortfolioWnetrza} />
              <Route path="/animacje" component={PortfolioAnimacje} />
              <Route path="/modelowanie" component={PortfolioModelowanie} />
              <Route path="/strony" component={PortfolioStrony} />
              <Route path="/wizualizacje" component={PortfolioWizualizacje} />
              <Route path="/other" component={Other} />
              <Route path="/:any" component={Home} />
              <Route path="/" component={Home} />
            </Switch>
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />

            <Modal
              actions={[
                <Button flat modal="close" node="button" waves="green">
                  Close
                </Button>,
              ]}
              bottomSheet={false}
              fixedFooter={false}
              header="RODO"
              id="Modal-0"
              open={false}
              options={{
                dismissible: true,
                endingTop: "10%",
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                opacity: 0.5,
                outDuration: 250,
                preventScrolling: true,
                startingTop: "4%",
              }}
              trigger={
                <Button className="rodo red z-depth-4" node="button">
                  RODO
                </Button>
              }
            >
              Klauzula informacyjna dla klientów i kontrahentów. Zgodnie z
              przepisami rozporządzenia Parlamentu Europejskiego i Rady (UE)
              2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób
              fizycznych w związku z przetwarzaniem danych osobowych i w sprawie
              swobodnego przepływu takich danych oraz uchylenia dyrektywy
              95/46/WE (ogólne rozporządzenie o ochronie danych) („RODO”),
              przekazujemy poniższe informacje dotyczące Państwa danych
              osobowych. Administrator danych osobowych Administratorem Państwa
              danych osobowych jest Choluj Design S.C. Cel i podstawa
              przetwarzania Państwa dane osobowe przetwarzamy: • w celu zgodnym
              z udzieloną zgodą, o ile została wyrażona zgoda, na podstawie art.
              6 ust. 1 lit. a RODO; • w celu udzielenia odpowiedzi w związku z
              Państwa zainteresowaniem naszą ofertą handlową, zgodnie z art. 6
              ust. 1 lit. b RODO; • w celu zawarcia i wykonania umowy, na
              podstawie art. 6 ust. 1 lit. b RODO; • w celu realizacji
              obowiązków prawnych, na przykład wynikających z przepisów
              podatkowych, na podstawie art. 6 ust. 1 lit. c RODO; • w celu
              wykonywania naszych prawnie uzasadnionych interesów jako
              Administratora, o których mowa w art. 6 ust. 1 lit. f RODO, takich
              jak marketing bezpośredni, dochodzenie lub obrona przed
              roszczeniami. Odbiorcy danych osobowych Odbiorcami Państwa danych
              będą następujące podmioty: • podmioty, którym powierzyliśmy
              przetwarzanie danych osobowych w naszym imieniu: spółki
              informatyczne, kancelarie prawne, jednostki audytujące, agencje
              ochrony; • podmioty lub organy uprawnione na podstawie przepisów
              prawa. Okres przechowywania danych Państwa dane osobowe będą
              przechowywane: • w przypadku przetwarzania danych na podstawie
              zgody – do czasu cofnięcia zgody; • w przypadku przetwarzania
              danych na podstawie w celu przedstawienia oferty – przez okres
              negocjowania umowy oraz do końca roku kalendarzowego następującego
              po roku, w którym ostatni raz kontaktowali się Państwo w sprawie
              jej zawarcia; • w przypadku przetwarzania danych na podstawie w
              celu wykonania umowy – do momentu wygaśnięcia umowy; • w przypadku
              przetwarzania w celu realizacji obowiązków prawnych - przez okres
              w jaki aktualne przepisy prawa nakazują ich przechowywanie; • w
              przypadku przetwarzania danych na podstawie uzasadnionego interesu
              Administratora – do momentu ustania tego interesu (np.
              przedawnienia roszczeń) lub do momentu wniesienia skutecznego
              sprzeciwu, przeciwko dalszemu przetwarzaniu przez osobę, której
              dane dotyczą. Prawa osób, których dane dotyczą Zgodnie z RODO
              przysługuje Państwu: • prawo dostępu do swoich danych oraz
              otrzymania ich kopii; • prawo do sprostowania (poprawienia) swoich
              danych; • prawo do usunięcia danych; • prawo do ograniczenia
              przewarzania danych; • prawo do sprzeciwu; • prawo do wniesienia
              skargi do Prezesa Urzędu Ochrony Danych Osobowych. Informacja na
              temat prawa cofnięcia zgody W stosunku do danych przetwarzanych na
              podstawie zgody informujemy, że wyrażenie zgody każdorazowo jest
              całkowicie dobrowolne, a w przypadku jej wyrażenia w dowolnym
              momencie przysługuje Państwu prawo do jej wycofania. Cofnięcie
              zgody nie będzie wpływać na zgodność z prawem przetwarzania,
              którego dokonano dotychczas. Obowiązek podawania danych osobowych
              Podanie danych jest dobrowolne, niemniej jednak konieczne, jeśli
              chcą Państwo zawrzeć z nami umowę lub otrzymać oferty. Podanie
              danych na postawie zgody jest całkowicie dobrowolne. Informacja na
              temat zautomatyzowanego podejmowania decyzji i profilowania W
              związku z przetwarzaniem Państwa danych osobowych nie dochodzi do
              zautomatyzowanego podejmowania decyzji, w tym do profilowaniu.
              English
              <br /> In accordance with the provisions of the Regulation of the
              European Parliament and of the Council (EU)
              <br /> 2016/679 of 27 April 2016 on the protection of natural
              persons in connection with
              <br /> the processing of personal data and on the free movement of
              such data
              <br /> data and repealing Directive 95/46 / EC (general protection
              regulation
              <br /> data) ("GDPR"), we provide the following information
              regarding your data
              <br /> personal.
              <br /> Personal data administrator
              <br /> The administrator of your personal data is HouseQ sp. z. o.
              o.
              <br /> Purpose and basis of processing
              <br /> We process your personal data:
              <br /> • for the purpose consistent with the consent granted,
              provided that consent has been given, pursuant to Art.
              <br /> 6 sec. 1 lit. a GDPR;
              <br /> • in order to respond to your interest in our offer
              <br /> commercial, in accordance with Art. 6 sec. 1 lit. b GDPR;
              <br /> • in order to conclude and perform a contract, pursuant to
              Art. 6 sec. 1 lit. b GDPR;
              <br /> • in order to comply with legal obligations, such as those
              resulting from regulations
              <br /> tax, pursuant to Art. 6 sec. 1 lit. c GDPR;
              <br /> • in order to pursue our legitimate interests as
              <br /> The administrator referred to in art. 6 sec. 1 lit. f GDPR,
              such as marketing
              <br /> direct, investigation or defense against claims.
              <br /> Recipients of personal data
              <br /> The recipients of your data will be the following entities:
              <br /> • entities entrusted with the processing of personal data
              in our
              <br /> on behalf of: IT companies, law firms, audit units,
              agencies
              <br /> protection;
              <br /> • entities or bodies authorized by law.
              <br /> The period of data storage
              <br /> your personal data will be stored:
              <br /> • in the case of data processing on the basis of consent -
              until the consent is withdrawn;
              <br /> • in the case of data processing on the basis of the
              purpose of presenting an offer -
              <br /> for the period of contract negotiation and until the end of
              the calendar year
              <br /> following the year in which you last contacted about the
              matter
              <br /> its conclusion;
              <br /> • in the case of data processing on the basis of the
              performance of a contract - up to
              <br /> the moment the contract expires;
              <br /> • in the case of processing in order to fulfill legal
              obligations - for the period of
              <br /> what current legal regulations require their storage;
              <br /> • in the case of data processing based on a legitimate
              interest
              <br /> Administrator - until the end of this interest (e.g.
              limitation of claims)
              <br /> or until an effective objection is raised, against another
              <br /> processing by the data subject.
              <br /> Rights of data subjects
              <br /> According to the GDPR, you are entitled to:
              <br /> • the right to access your data and receive a copy of it;
              <br /> • the right to rectify (correct) your data;
              <br /> • the right to delete data;
              <br /> • the right to limit data processing;
              <br /> • right to object;
              <br /> • the right to lodge a complaint with the President of the
              Personal Data Protection Office.
              <br /> Information on the right to withdraw consent
              <br /> In relation to data processed on the basis of consent, we
              inform that
              <br /> consent is each time entirely voluntary, and in the case of
              it
              <br /> expression, you have the right to withdraw it at any time.
              <br /> Withdrawal of consent will not affect the lawfulness of the
              processing
              <br /> has been done so far.
              <br /> Obligation to provide personal data
              <br /> Providing data is voluntary, but necessary if you want to
              <br /> enter into a contract with us or receive offers. Providing
              data on the basis of consent is
              <br /> completely voluntary.
              <br /> Information on automated decision making and profiling
              <br /> In connection with the processing of your personal data,
              there is no
              <br /> automated decision making, including profiling.{" "}
            </Modal>
            <div className="  grey darken-2">
              <Row>
                <Col className="white-text valign-align" m={6}>
                  <h3 className="white-text right-align">
                    {" "}
                    Dane
                    <br /> Kontaktowe{" "}
                  </h3>
                  Wszelkie prawa zastrzeżone
                  <br />
                  Wszystkie teksty, rysunki, zdjęcia oraz wszystkie inne
                  informacje opublikowane na niniejszych stronach podlegają
                  prawom autorskim firmy Choluj Design s.c. z wyjątkiem zdjęć
                  wykorzystanych z strony unsplash.com.
                  <br />
                  Wszelkie kopiowanie, dystrybucja, elektroniczne przetwarzanie
                  oraz przesyłanie zawartości bez zezwolenia firmy Choluj Design
                  s.c. jest zabronione.
                  <br />
                  Wszelkie prawa zastrzeżone Choluj Design s.c.
                </Col>
                <Col m={6}>
                  <h5 className="white-text left-align">
                    {/* +48 509 446 703,
                  <br /> */}
                    +48 509 447 006,
                    <br />
                    +48 518 048 983
                    <br />
                    Rynek Główny 43, 31-013 Kraków, Polska
                    <br />
                    NIP: 676 243 76 55
                    <br />© 2023 by Choluj Design s.c.
                  </h5>
                </Col>
              </Row>
            </div>
          </BrowserRouter>
        </Row>
      </div>
    </DocumentMeta>
  );
}

export default App;
