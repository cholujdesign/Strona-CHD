import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import CardMedia from "@mui/material/CardMedia";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AOS from "aos";
import "aos/dist/aos.css";

const text = [
  {
    a: "1. Administrator danych osobowych",
    one: "Administratorem Państwa danych osobowych jest firma Choluj Design Spółka Cywilna z siedzibą przy ul. Rynek Główny 43, 31-013 Kraków; NIP: 6762437655; ",
  },
  {
    a: "2. Dane kontaktowe",
    one: "W razie pytań dotyczących przetwarzania Państwa danych osobowych oraz przysługujących Państwu praw, prosimy o kontakt drogą mailową na adres: biuro@cholujdesign.pl",
  },
  {
    a: "3. Zakres, cele i podstawy prawne przetwarzania danych osobowych",
    one: "W związku z tym, że poprzez serwis cholujdesign.com umożliwiamy przesłanie zapytania ofertowego oraz kontakt w różnych sprawach, przetwarzamy Państwa dane osobowe w różnych celach, w różnych zakresach i na różnych podstawach prawnych. W celu precyzyjnego przekazania informacji na temat przetwarzania Państwa danych osobowych pogrupowaliśmy je według celu przetwarzania danych.   a. Przedstawienie oferty naszych usług    Zakres danych: W celu przygotowania i przedstawienia oferty naszych usług przetwarzamy dane osobowe przesłane za pomocą formularza kontaktowego: Imię i nazwisko, adres e-mail, nr telefonu, treść wiadomości.    Podstawa prawna: Przetwarzanie jest niezbędne do podjęcia działań na żądanie osoby, której dane dotyczą, przed zawarciem umowy.  b. Obsługa pozostałych zapytań z formularza kontaktowego    Zakres danych: W celu odpowiedzi na zapytania przesłane za pośrednictwem formularza kontaktowego, przetwarzamy dane przesłane w/w formularzu: Imię i nazwisko, adres e-mail, nr telefonu, treść wiadomości. Podstawa prawna: Nasz prawnie uzasadniony interes (przetwarzanie na żądanie osoby, której dane dotyczą).    c. Przesłanie newslettera firmowego    Zakres danych: W celu przesłania naszego newslettera firmowego przetwarzamy dane osobowe przesłane za pomocą formularza zapisu do newslettera: Imię i nazwisko, adres e-mail.   Podstawa prawna: Nasz prawnie uzasadniony interes (przetwarzanie na żądanie osoby, której dane dotyczą).    W przypadku danych osobowych pozyskanych w inny sposób niż przez stronę mikulski.krakow.pl (telefonicznie, mailowo itd.) również przetwarzamy je wyłącznie w celu, w jakim zostały udostępnione i przez czas jaki jest konieczny do realizacji tego celu. W przypadku planowanej zmiany celu przetwarzania, zawsze pytamy właściciela danych osobowych o zgodę i informujemy o zmieniających się warunkach przetwarzania danych.",
  },
  {
    a: "4. Pliki cookies",
    one: "Wykorzystujemy pliki cookies w celu zapewnienia poprawnego działania serwisu, a w szczególności dostosowania zawartości serwisu do preferencji użytkownika oraz optymalizacji korzystania z serwisu. W szczególności pliki te pozwalają rozpoznać podstawowe parametry urządzenia użytkownika (takie jak: typ urządzenia, rozdzielczość ekranu, kraj, z którego dochodzi do wejścia) i dzięki temu odpowiednio wyświetlić stronę internetową dostosowaną do jego potrzeb. Wykorzystujemy także cookies w celu zbierania ogólnych i anonimowych danych statystycznych za pośrednictwem narzędzi analitycznych i marketingowych: Google Analytics (administrator cookies: Google Inc z siedzibą w USA), Google AdWords (administrator cookies: Google Inc z siedzibą w USA),   Google Search Console (administrator cookies: Google Inc z siedzibą w USA), Facebook (administrator cookies: Facebook Ireland Ltd. z siedzibą w Irlandii), Mogą Państwo samodzielnie i w każdym czasie zmienić ustawienia dotyczące plików cookies, określając warunki ich przechowywania i uzyskiwania dostępu przez pliki cookies do urządzenia użytkownika. Zmiany ustawień można dokonać za pomocą ustawień przeglądarki internetowej. Ustawienia te mogą zostać zmienione w taki sposób, aby blokować automatyczną obsługę plików cookies bądź informować o każdorazowym zamieszczeniu cookies na Państwa urządzeniu. Szczegółowe informacje o możliwości i sposobach obsługi plików cookies dostępne są w ustawieniach przeglądarki internetowej. Mogą Państwo w każdej chwili usunąć pliki cookies, korzystając z dostępnych funkcji w przeglądarce internetowej, której Państwo używają. Ograniczenie stosowania plików cookies może wpłynąć na niektóre funkcjonalności dostępne na stronie internetowej.",
  },
  {
    a: "5. Przekazywanie danych osobowych",
    one: "Przekazujemy Państwa dane osobowe dostawcom usług, z których korzystamy przy prowadzeniu serwisu. Dostawcy usług, którym przekazujemy Państwa dane osobowe, w zależności od sytuacji, są podmiotami przetwarzającymi albo administratorami. Wykaz dostawców, z których usług korzystamy, znajdą Państwo na końcu niniejszej Polityki. Korzystamy z dostawców, którzy przetwarzają Państwa dane osobowe wyłącznie na nasze polecenie. Świadczą oni dla nas usługę hostingu, dostarczają nam systemy do marketingu online, do wysyłki wiadomości email oraz do analizy ruchu w serwisie. Korzystamy z dostawców, którzy nie działają wyłącznie na nasze polecenie i sami ustalą cele i sposoby wykorzystania Państwa danych osobowych. Świadczą oni dla nas usługi kampanii reklamowych. Nasi dostawcy mają siedzibę głównie w Polsce i w innych krajach Europejskiego Obszaru Gospodarczego (EOG), np. w Irlandii. Niektórzy z nich mają siedzibę poza terytorium EOG. W związku z przekazaniem Państwa danych poza terytorium EOG zadbaliśmy, aby nasi dostawcy dawali gwarancje wysokiego stopnia ochrony danych osobowych. Gwarancje te wynikają w szczególności ze zobowiązania do stosowania standardowych klauzul umownych przyjętych przez Komisję (UE) lub uczestnictwa w programie ?Tarcza Prywatności? UE-USA.  a. Organy Państwowe Udostępniamy Państwa dane osobowe, jeżeli zwrócą się do nas o to uprawnione organy państwowe. Administrator przechowuje dane osobowe Użytkowników przez okres nie dłuższy, niż jest to niezbędne do przygotowania spersonalizowanej oferty / przetworzenia Państwa zamówienia/ odpowiedzi na inne zapytania oraz umożliwiający Administratorowi wykonanie ciążących na nim obowiązków. Przypominamy, że w każdym czasie Użytkownicy mogą usunąć dane.",
  },
  {
    a: "6. Państwa prawa związane z przetwarzaniem danych osobowych",
    one: "Przysługuje Państwu prawo do: a. dostępu do swoich danych osobowych, b. sprostowania danych osobowych, c. usunięcia danych osobowych, d. ograniczenia przetwarzania danych osobowych, e. przenoszenia danych osobowych, f. wniesienia sprzeciwu do przetwarzania danych osobowych, g. cofnięcia wcześniej wyrażonej zgody na przetwarzanie danych osobowych. Aby skorzystać ze swoich uprawnień, prosimy o kontakt na adres mailowy: kancelaria@mikulski.krakow.pl Jeżeli, występują Państwo do nas z żądaniem związanym z wykonaniem wymienionych powyżej praw, odpowiadamy na to żądanie niezwłocznie, nie później jednak niż w ciągu miesiąca po jego otrzymaniu. Jeżeli jednak ? z uwagi na skomplikowany charakter żądania lub liczbę żądań ? nie będziemy mogli spełnić Państwa żądania w ciągu miesiąca, spełnimy je w ciągu kolejnych dwóch miesięcy informując uprzednio o przedłużeniu terminu.",
  },
  {
    a: "7. Bezpieczeństwo Państwa danych",
    one: "Jako Administrator danych osobowych dokładamy wszelkich starań, aby zapewnić bezpieczeństwo Państwa danych. Zobowiązujemy się do: zabezpieczenia danych przed ich udostępnieniem osobom nieupoważnionym, zabraniem przez osobę nieuprawnioną, zmianami, uszkodzeniem lub zniszczeniem, dopuszczenia do przetwarzania danych osobowych wyłącznie osób posiadających wydane przez nas upoważnienie, zapewnienia kontroli nad prawidłowością przetwarzania danych osobowych, prowadzenia ewidencji osób upoważnionych do przetwarzania danych osobowych, dochowania szczególnej staranności, aby osoby upoważnione do przetwarzania tych danych zachowały je w tajemnicy, również po zakończeniu realizacji Usługi, prowadzenia wymaganej przepisami prawa dokumentacji opisującej sposób przetwarzania powierzonych danych osobowych oraz środki techniczne i organizacyjne zapewniające ochronę przetwarzania tych danych, zapewnienia, aby urządzenia i systemy informatyczne i telekomunikacyjne, służące do przetwarzania danych osobowych, były zgodne z wymogami Rozporządzenia Ministerstwa Spraw Wewnętrznych i Administracji z dnia 29 kwietnia 2004 r. w sprawie dokumentacji przetwarzanych danych osobowych oraz warunków technicznych i organizacyjnych, jakim powinny odpowiadać urządzenia i systemy.",
  },
  {
    a: "8. Lista zewnętrznych dostawców usług i dane, które są udostępniane:",
    one: " eniteo.PL – usługa hostingu stron internetowych, przechowuje wszystkie dane serwisu.Google Analytics – adres IP, przeglądarka i dane o lokalizacji, historia nawigacji w witrynie.Google AdWords – adres IP, przeglądarka i dane o lokalizacji, historia nawigacji w witrynie.",
  },
];

function PricingContent() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      {/* Hero unit */}

      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 3,
          pb: 3,
        }}
      >
        <Container
          data-aos="fade-up"
          disableGutters
          maxWidth="md"
          component="main"
          sx={{ pt: 3, pb: 6 }}
        >
          <Typography
            component="h3"
            variant="h3"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Polityka prywatności
          </Typography>
          <Typography
            variant="h7"
            align="left"
            color="text.secondary"
            component="p"
            gutterBottom
          >
            <br />
            Firma Choluj Design Spółka Cywilna, właściciel serwisu
            cholujdesign.com, dokłada wszelkich starań, aby Państwa prywatność
            była odpowiednio chroniona. W celu realizacji zgodnego z prawem,
            przejrzystego i bezpiecznego przetwarzania Państwa danych osobowych
            przyjmujemy niniejszą Politykę Prywatności, która obowiązuje od dnia
            25 maja 2018 r. Polityka Prywatności odwołuje się do RODO, czyli
            Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia
            27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z
            przetwarzaniem danych osobowych i w sprawie swobodnego przepływu
            takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne
            rozporządzenie o ochronie danych). Dokument określa jakie dane i na
            jakich zasadach przetwarzamy i jak dbamy o ich bezpieczeństwo i
            Państwa prawa.
          </Typography>
        </Container>
      </Box>
      {/* End hero unit */}
      <Box
        sx={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "80vh",
          alignItems: "center",
          py: 10,
        }}
      >
        <Container
          data-aos="fade-down"
          maxWidth="md"
          component="main"
          sx={{
            pt: 3,
            pb: 3,
          }}
        >
          <Grid container spacing={1} alignItems="">
            {text.map((tier) => (
              <Grid item key={tier.title} xs={12} md={12}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={tier.one}
                    id={tier.one}
                  >
                    {" "}
                    <Typography
                      component="h6"
                      variant="h6"
                      align="left"
                      color="text.priamry"
                    >
                      {tier.a}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{tier.one}</Typography>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      {/* Hero unit */}

      {/* End hero unit */}
    </React.Fragment>
  );
}

export default function Pricing() {
  return <PricingContent />;
}
