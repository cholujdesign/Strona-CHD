import React, { Component } from "react";
import "./App.css";
import "materialize-css";
import { Button, Card, Row, Col,Modal } from "react-materialize";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Commercial from "./components/Commercial";
import Noncommercial from "./components/Noncommercial";
import Other from "./components/Other";
import Portfolio from "./components/Portfolio";
import Offer from "./components/Offer";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Row>
        
          <BrowserRouter>
            <br />
          

            <Nav />
            <br />
      

            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/contact" component={Contact} />
              <Route path="/offer" component={Offer} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/commercial" component={Commercial} />
              <Route path="/noncommercial" component={Noncommercial} />
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
    <Button flat modal="close" node="button" waves="green">Close</Button>
  ]}
  bottomSheet={false}
  fixedFooter={false}
  header="RODO"
  id="Modal-0"
  open={false}
  options={{
    dismissible: true,
    endingTop: '10%',
    inDuration: 250,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    opacity: 0.5,
    outDuration: 250,
    preventScrolling: true,
    startingTop: '4%'
  }}

  trigger={<Button className="rodo red z-depth-4" node="button">RODO</Button>}
>
Klauzula informacyjna dla klientów i kontrahentów.


Zgodnie z przepisami rozporządzenia Parlamentu Europejskiego i Rady (UE)
2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z
przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich
danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie
danych) („RODO”), przekazujemy poniższe informacje dotyczące Państwa danych
osobowych.
Administrator danych osobowych
Administratorem Państwa danych osobowych jest Choluj Design S.C.
Cel i podstawa przetwarzania
Państwa dane osobowe przetwarzamy:
• w celu zgodnym z udzieloną zgodą, o ile została wyrażona zgoda, na podstawie art.
6 ust. 1 lit. a RODO;
• w celu udzielenia odpowiedzi w związku z Państwa zainteresowaniem naszą ofertą
handlową, zgodnie z art. 6 ust. 1 lit. b RODO;
• w celu zawarcia i wykonania umowy, na podstawie art. 6 ust. 1 lit. b RODO;
• w celu realizacji obowiązków prawnych, na przykład wynikających z przepisów
podatkowych, na podstawie art. 6 ust. 1 lit. c RODO;
• w celu wykonywania naszych prawnie uzasadnionych interesów jako
Administratora, o których mowa w art. 6 ust. 1 lit. f RODO, takich jak marketing
bezpośredni, dochodzenie lub obrona przed roszczeniami.
Odbiorcy danych osobowych
Odbiorcami Państwa danych będą następujące podmioty:
• podmioty, którym powierzyliśmy przetwarzanie danych osobowych w naszym
imieniu: spółki informatyczne, kancelarie prawne, jednostki audytujące, agencje
ochrony;
• podmioty lub organy uprawnione na podstawie przepisów prawa.
Okres przechowywania danych
Państwa dane osobowe będą przechowywane:
• w przypadku przetwarzania danych na podstawie zgody – do czasu cofnięcia zgody;
• w przypadku przetwarzania danych na podstawie w celu przedstawienia oferty –
przez okres negocjowania umowy oraz do końca roku kalendarzowego
następującego po roku, w którym ostatni raz kontaktowali się Państwo w sprawie
jej zawarcia;
• w przypadku przetwarzania danych na podstawie w celu wykonania umowy – do
momentu wygaśnięcia umowy;
• w przypadku przetwarzania w celu realizacji obowiązków prawnych - przez okres w
jaki aktualne przepisy prawa nakazują ich przechowywanie;
• w przypadku przetwarzania danych na podstawie uzasadnionego interesu
Administratora – do momentu ustania tego interesu (np. przedawnienia roszczeń)
lub do momentu wniesienia skutecznego sprzeciwu, przeciwko dalszemu
przetwarzaniu przez osobę, której dane dotyczą.
Prawa osób, których dane dotyczą
Zgodnie z RODO przysługuje Państwu:
• prawo dostępu do swoich danych oraz otrzymania ich kopii;
• prawo do sprostowania (poprawienia) swoich danych;
• prawo do usunięcia danych;
• prawo do ograniczenia przewarzania danych;
• prawo do sprzeciwu;
• prawo do wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych.
Informacja na temat prawa cofnięcia zgody
W stosunku do danych przetwarzanych na podstawie zgody informujemy, że
wyrażenie zgody każdorazowo jest całkowicie dobrowolne, a w przypadku jej
wyrażenia w dowolnym momencie przysługuje Państwu prawo do jej wycofania.
Cofnięcie zgody nie będzie wpływać na zgodność z prawem przetwarzania, którego
dokonano dotychczas.
Obowiązek podawania danych osobowych
Podanie danych jest dobrowolne, niemniej jednak konieczne, jeśli chcą Państwo
zawrzeć z nami umowę lub otrzymać oferty. Podanie danych na postawie zgody jest
całkowicie dobrowolne.
Informacja na temat zautomatyzowanego podejmowania decyzji i profilowania
W związku z przetwarzaniem Państwa danych osobowych nie dochodzi do
zautomatyzowanego podejmowania decyzji, w tym do profilowaniu.
</Modal>
            <div className=" hide-on-small-only grey darken-2">
              <Row>
                <Col m={6}>
                  <h3 className="white-text valign-align">Dane Kontaktowe</h3>
                </Col>
                <Col m={6}>
                  <h5 className="white-text left-align">
                    +48 509 446 704, 
                    <br/>+48 509 447 006, 
                    <br/>+48 518 048 983
                    <br/>Rynek Główny 43, 31-013 Kraków, Polska
                    <br/>NIP: 676 243 76 55
                    <br/>© 2023 by Choluj Design s.c.


                    </h5>
                </Col>
              </Row>
            </div>
          </BrowserRouter>
       
      </Row>
    </div>
  );
}

export default App;
