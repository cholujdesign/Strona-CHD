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
import ArchitectureProjects from "./OtherProjects";
import AOS from "aos";
import "aos/dist/aos.css";
import Nav from "./nav";
import emailjs from "@emailjs/browser";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";

const text = [
  {
    title: "Kiedy należy sporządzić świadectwa charakterystyki energetycznej?",
    details: (
      <p>
        <br />• W momencie gdy budynek, część budynku czy lokal będzie zbywany
        lub wynajmowany (nawet krótkoterminowo).
        <br />• W momencie zakończenia budowy, pozwolenia na użytkowanie.
        <br />• Przy dotacjach i dofinansowaniach.
        <br />• Każdorozo, gdy charakterystyka budynku ulegnie zmianie.
        <br />• Po 10 latach o wykonania świadectwa charakterystyki
        energetycznej
        <br />• Świadectwo trzeba przekazać nabywcy lub najemcy w momencie gdy
        budynek, część budynku lub lokal będzie:
        <br />
        zbywany na podstawie umowy sprzedaży,
        <br />
        zbywany na podstawie umowy sprzedaży spółdzielczego własnościowego prawa
        do lokalu,
        <br />
        wynajęty. Oznacza to, że świadectwo sporządza się w celu przekazania go
        najemcy lub kupującemu, a więc przy okazji najmu lub sprzedaży budynku
        lub części budynku (obowiązek ten funkcjonuje w ustawie o
        charakterystyce energetycznej budynków od 2015 r., wcześniej (od 2009
        r.) obowiązek ten funkcjonował w ustawie Prawo budowlane).
        <br />• Świadectwo należy również zamieścić w widocznym miejscu dla
        budynków:
        <br />o powierzchni użytkowej powyżej 250 m2 zajmowanych przez organy
        wymiaru sprawiedliwości, prokuraturę oraz organy administracji
        publicznej i w których dokonywana jest obsługa interesantów,
        <br />o powierzchni użytkowej przekraczającej 500 m2, w którym są
        świadczone usługi dla ludności (o ile świadectwo jest już sporządzone).
        <br />• Inwestor będzie zobowiązany załączyć świadectwo charakterystyki
        energetycznej do zawiadomienia o zakończeniu budowy obiektu budowlanego
        lub do wniosku o udzielenie pozwolenia na użytkowanie (obowiązek wchodzi
        w życie z dniem 28 kwietnia 2023 r.). Z obowiązku tego wyłączone są domy
        do 70 m2 zabudowy do własnych celów mieszkaniowych.
      </p>
    ),
  },
  {
    title: "Co zawiera świadectwo charakterystyki energetycznej?",
    details:
      "Świadectwo charakterystyki energetycznej to dokument, który określa wielkość zapotrzebowania na energię niezbędną do zaspokojenia potrzeb energetycznych związanych z użytkowaniem budynku lub części budynku.",
  },
  {
    title: "Jakie informacje zawiera świadectwo charakterystyki energetycznej?",
    details:
      "Świadectwa charakterystyki energetycznej jest ustandaryzowane i jego wzór określony jest przez Ministra Inwestycji i Rozwoju. Zawiera ono szereg parametrów technicznych budynku, jego zapotrzebowanie energetyczne, adres, zdjęcie obiektu oraz dane osoby sporządzającej świadectwo.",
  },
  {
    title: "Jak długo jest ważne świadectwo charakterystyki energetycznej?",
    details:
      "Świadectwo charakterystyki energetycznej jest ważne przez 10 lat od dnia jego sporządzenia. Świadectwa przekazane przed dniem wejścia w życie ustawy (28 kwietnia 2023 r.) zachowają ważność przez okres, na jaki zostały sporządzone. Świadectwo straci ważność przed upływem tego terminu, jeżeli zostaną przeprowadzone roboty budowlano-instalacyjne, w wyniku których zmianie ulegnie charakterystyka energetyczna budynku lub części budynku (np. wymiana okien, wymiana źródła ciepła, docieplenie budynku.",
  },
  {
    title:
      "Jakie znaczenie mają podstawowe wskaźniki zawarte w świadectwe charakterystyki energetycznej? ",
    details:
      " Podstawowe wskaźniki zawarte w świadectwie charakterystyki energetycznej to zapotrzebowanie na energię, ale są też szzegółwe parametry techniczne budynku takie jak rodzaj, adres, data budowy, rodzaje przegród budowlanych, sposobu ogrzewania, wentylacji chłodzenia itp.",
  },
  {
    title: "Forma przekazania świadectwa.",
    details:
      "Świadectwo charakterystyki energetycznej przekazuje się w formie papierowej, opatrzone numerem nadanym w centralnym rejestrze charakterystyki energetycznej budynków oraz podpisem osoby uprawnionej. W wyniku nowelizacji przepisów (od 28 kwietnia 2023 r.), świadectwo będzie można otrzymać w formie:•    papierowej – opatrzone numerem nadanym w centralnym rejestrze charakterystyki energetycznej budynków oraz podpisem osobistym osoby uprawnionejlub •    elektronicznej - opatrzone numerem nadanym w centralnym rejestrze charakterystyki energetycznej budynków oraz kwalifikowanym podpisem elektronicznym, podpisem zaufanym lub podpisem osobistym osoby uprawnionej. Fakt przekazania świadectwa, zostanie odnotowany w akcie notarialnym, natomiast w przypadku braku jego przekazania – notariusz pouczy zobowiązanego do przekazania świadectwa o karze grzywny za niewywiązanie się z tego obowiązku.",
  },
  {
    title: "Podstawa wykonania audytu.",
    details:
      "Dokonujemy audytu na podstawie dokumentacji okazanej przez zleceniodawcę, wizji lokalnej, dokumentacji urzędowej. ",
  },
  {
    title: " Informacje w reklamie.",
    details: (
      <p>
        W przypadku gdy dla budynku lub części budynku zostało sporządzone
        świadectwo charakterystyki energetycznej, w ogłoszeniu lub reklamie
        dotyczących sprzedaży lub najmu budynku lub jego części należy podawać
        (od 28 kwietnia 2023 r.):
        <br /> • wskaźniki rocznego zapotrzebowania na energię użytkową, energię
        końcową, nieodnawialną energię pierwotną,
        <br /> • udział odnawialnych źródeł energii w rocznym zapotrzebowaniu na
        energię końcową,
        <br /> • jednostkową wielkość emisji CO2.
      </p>
    ),
  },

  {
    title:
      "Czy dla każdego istniejącego budynku lub części budynku (np. dom/mieszkanie/lokal użytkowy/garaż) należy sporządzić świadectwo charakterystyki energetycznej?",
    details: (
      <p>
        Świadectwo charakterystyki energetycznej należy sporządzić dla
        istniejącego budynku lub części budynku (lokalu) dopiero, gdy będzie on
        przedmiotem sprzedaży bądź najmu.
        <br />W przypadku nowo wybudowanych budynków od dnia 28 kwietnia 2023 r.
        inwestor będzie miał obowiązek dołączenia świadectwa charakterystyki
        energetycznej do zawiadomienia o zakończeniu budowy obiektu budowlanego
        lub do wniosku o udzielenie pozwolenia na użytkowanie (z obowiązku tego
        wyłączone są domy o powierzchni zabudowy do 70 m2 budowane dla
        zaspokojenia własnych potrzeb mieszkaniowych, natomiast przy ich
        sprzedaży lub najmie świadectwo lub kopię świadectwa należy przekazać
        odpowiednio nabywcy lub najemcy).
        <br />Z obowiązku sporządzania świadectw zwolnione są budynki:
        <br />
        1) podlegające ochronie na podstawie przepisów o ochronie zabytków i
        opiece nad zabytkami,
        <br />
        2) używane jako miejsce kultu i do działalności religijnej,
        <br />
        3) przemysłowe oraz gospodarcze niewyposażone w instalacje zużywające
        energię, z wyłączeniem instalacji oświetlenia wbudowanego,
        <br />
        4) mieszkalne, przeznaczone do użytkowania nie dłużej niż 4 miesiące w
        roku,
        <br />
        5) wolnostojące o powierzchni użytkowej poniżej 50 m2,
        <br />
        6) gospodarstw rolnych o wskaźniku EP określającym roczne obliczeniowe
        zapotrzebowanie na nieodnawialną energię pierwotną nie wyższym niż 50
        kWh/(m2·rok). 
        <br/>
        Zaznaczyć należy, iż zarówno w świetle obecnie
        obowiązujących przepisów prawa, jak też ich znowelizowanego brzmienia,
        obowiązek sporządzenia świadectwa charakterystyki energetycznej budynku
        będzie istniał wyłącznie w przypadku sprzedaży lub najmu budynku lub
        jego części (lokalu) bądź zbycia spółdzielczego własnościowego prawa do
        lokalu. Zatem spółdzielnia mieszkaniowa będzie zobowiązana do
        sporządzenia świadectwa charakterystyki energetycznej, wyłącznie w
        sytuacji, gdy będzie stroną jednej z ww. umów, jako sprzedawca lub
        wynajmujący. Zatem obowiązek sporządzenia świadectwa charakterystyki
        energetycznej nie powstanie w wypadku zawarcia umowy o ustanowienie
        spółdzielczego lokatorskiego prawa do lokalu, ani też ustanowienia
        odrębnej własności lokalu. Należy również dodać, iż w wyniku nowelizacji
        przepisów, od dnia 28 kwietnia 2023 r., w przypadku nowo wybudowanych
        budynków inwestor będzie miał obowiązek dołączenia świadectwa
        charakterystyki energetycznej do zawiadomienia o zakończeniu budowy
        obiektu budowlanego lub do wniosku o udzielenie pozwolenia na
        użytkowanie. Tym samym, od wskazanego powyżej terminu spółdzielnia
        mieszkaniowa, w momencie składania zawiadomienia o zakończeniu budowy
        obiektu budowlanego lub wniosku o udzielenie pozwolenia na użytkowanie,
        będzie zobowiązana złożyć ww. dokument. Przepisy ustawy dopuszczają
        możliwość wystąpienia do właściciela lub zarządcy budynku o nieodpłatne
        udostępnienie dokumentów pozwalających na sporządzenie świadectwa
        charakterystyki energetycznej dla części budynku. Zgodnie z art. 9 ust.
        1 ustawy, świadectwo charakterystyki energetycznej części budynku może
        być opracowane na podstawie świadectwa charakterystyki energetycznej
        budynku, a w przypadku braku tego świadectwa, na podstawie dokumentacji
        technicznej budynku. Oznacza to, iż możliwa jest sytuacja, w której
        właściciel części budynku lub osoba, której przysługuje spółdzielcze
        własnościowe prawo do lokalu, lub osoba, której przysługuje spółdzielcze
        lokatorskie prawo do lokalu mieszkalnego (lub najemca w przypadku, o
        którym mowa w art. 11 ust. 3 – w terminie do 27.04.2023 r.) wystąpi do
        spółdzielni mieszkaniowej z wnioskiem o nieodpłatne przekazanie kopii
        świadectwa charakterystyki energetycznej budynku (w przypadku jego
        sporządzenia dla budynku), a w przypadku braku tego świadectwa,
        dokumentacji technicznej budynku, w celu sporządzenia świadectwa
        charakterystyki energetycznej dla części budynku. Zatem jeżeli
        świadectwo charakterystyki energetycznej zostało już sporządzone dla
        całego budynku, to może zostać ono wykorzystane do sporządzenia
        świadectwa dla jego określonej części. Natomiast jeżeli świadectwo dla
        całego budynku nie zostało jeszcze sporządzone, możliwe jest
        wykorzystanie w tym celu istniejącej dokumentacji technicznej. Wymaga
        podkreślenia, iż w przypadku złożenia takiego wniosku przez
        uprawnionego, właściciel lub zarządca budynku jest obowiązany do
        nieodpłatnego przekazania ww. dokumentów, w terminie nie dłuższym niż 14
        dni od dnia złożenia wniosku (art. 9 ust. 2 ustawy).
      </p>
    ),
  },
  {
    title:
      "Czy w odniesieniu do budynku ujętego w gminnej ewidencji zabytków,  znajduje zastosowanie artykuł 3 ust. 4 pkt 1 ustawy o z dnia 29 sierpnia 2014 r. o charakterystyce energetycznej budynków?",
    details: (
      <p>
        Zgodnie z ustawą z obowiązku sporządzenia świadectwa charakterystyki
        energetycznej zwolnione są budynki podlegające ochronie na podstawie
        przepisów o ochronie zabytków i opiece nad zabytkami. W myśl art. 3 ust.
        4 ww. ustawy z obowiązku zapewnienia sporządzenia świadectwa
        charakterystyki energetycznej dla budynku lub części budynku zwolnione
        są m.in. budynki podlegające ochronie na podstawie przepisów o ochronie
        zabytków i opiece nad zabytkami. W związku z powyższym należy wskazać,
        iż za budynki podlegające ochronie należy uznać budynki objęte wszelkimi
        formami ochrony zabytków, o których mowa w art. 7 ustawy z dnia 23 lipca
        2003 r. o ochronie zabytków i opiece nad zabytkami  (Dz. U. z 2022 r.,
        poz. 840), jak też budynki nimi nie objęte, a włączone do wojewódzkiej
        lub gminnej ewidencji zabytków.
        <br />
        Nie każdy budynek znajdujący się w strefach ochrony konserwatorskiej
        oraz na obszarach historycznych układów urbanistycznych i
        ruralistycznych wpisanych do rejestru zabytków jest zabytkiem. Należy
        zauważyć, że w strefie ochrony konserwatorskiej jak i na obszarze
        historycznego układu mogą, co do zasady być realizowane nowe inwestycje,
        natomiast działania konserwatorskie w ich granicach mogą polegać na
        usuwaniu budynków i budowli zakłócających historyczną kompozycję
        przestrzenną. Strefa ochrony konserwatorskiej jest obszarem technicznym,
        na którym wprowadza się kreślone ustaleniami planu ograniczenia, zakazy
        i nakazy, mające na celu ochronę znajdujących się na tym obszarze
        zabytków, więc jako taka nie jest zabytkiem. Warto dodać, że strefy
        ochrony konserwatorskiej wyznacza się w różnych celach, nie tylko w celu
        ochrony tkanki zabytkowej, ale również walorów widokowych (ekspozycji) i
        krajobrazowych. Natomiast historyczne układy urbanistyczne i
        ruralistyczne jako nieruchome zabytki przestrzenne, obok zabytków
        indywidualnych stanowią przedmiot wpisu do rejestru zabytków i określa
        się je również jako wpisy obszarowe. <br />
        Przedmiotem ochrony na podstawie wpisu obszarowego (układu) nie jest
        substancja zabytkowa, lecz charakterystyczne cechy przestrzeni, w tym:
        historyczne rozplanowanie placów i ulic, ich przebieg, szerokość i
        przekrój, historyczny kształt i wielkość działek oraz ich sposób
        zagospodarowania, współzależność między zabudową, zielenią a otwartą
        przestrzenią, wygląd zewnętrzny budowli określony skalą, rozmiarami,
        stylem, konstrukcją, materiałami, kolorem i wystrojem. Wobec powyższego
        budynki objęte wpisem obszarowym nie są zwolnione z obowiązku
        zapewnienia sporządzenia świadectwa charakterystyki energetycznej.
      </p>
    ),
  },
  {
    title:
      "Czy spółdzielnia mieszkaniowa ma obowiązek sporządzić świadectwo charakterystyki energetycznej budynku w przypadku ustanowienia odrębnej własności lokalu i przeniesienie jego własności na rzecz członka spółdzielni?",
    details: (
      <p>
        Spółdzielnia mieszkaniowa nie ma obowiązku sporządzenia świadectwa
        charakterystyki energetycznej przy zawarciu umowy przeniesienia
        własności lokalu [o której mowa w art. 1714 ustawy z dnia 15 grudnia
        2000 r. o spółdzielniach mieszkaniowych (Dz. U. z 2021 r. poz. 1208 oraz
        z 2022 r. poz. 1561)]. Na podstawie art. 11 ust. 1 znowelizowanej ustawy
        właściciel lub zarządca budynku lub części budynku, osoba, której
        przysługuje spółdzielcze własnościowe prawo do lokalu, lub osoba, której
        przysługuje spółdzielcze lokatorskie prawo do lokalu mieszkalnego, jest
        zobowiązany do przekazania odpowiednio nabywcy albo najemcy: 1.
        świadectwa charakterystyki energetycznej - przy sporządzeniu aktu
        notarialnego umowy zbycia prawa własności albo spółdzielczego
        własnościowego prawa do lokalu; 2. kopię świadectwa charakterystyki
        energetycznej, które przekazano w postaci papierowej, albo wydruk
        świadectwa charakterystyki energetycznej, które przekazano w postaci
        elektronicznej - przy zawarciu umowy najmu. Użyty w tym przepisie termin
        „zbycie” należy tłumaczyć w kontekście art. 3 ustawy, zgodnie z którym
        właściciel lub zarządca budynku lub części budynku lub osoba, której
        przysługuje spółdzielcze własnościowe prawo do lokalu, lub osoba, której
        przysługuje spółdzielcze lokatorskie prawo do lokalu mieszkalnego
        zapewnia sporządzenie świadectwa charakterystyki energetycznej dla
        budynku lub części budynku: 1. zbywanego na podstawie umowy sprzedaży;
        2. zbywanego na podstawie umowy sprzedaży spółdzielczego własnościowego
        prawa do lokalu; 3. wynajmowanego. Wobec powyższego, należy wskazać, że
        zawarcie umowy przeniesienia własności lokalu, o której mowa na wstępie,
        stanowi w istocie zmianę formy prawnej dysponowania lokalem (tj.
        przekształcenie spółdzielczego własnościowego prawa do lokalu w odrębną
        własność) i nie jest żadną z umów, o których mowa w art. 3 ustawy.
      </p>
    ),
  },
  {
    title: (
      <h4>
        Jaki jest koszt wykonania Certyfikatu Charakterystyki Energetycznej?
      </h4>
    ),
    details: (
      <p>
        <br />• Cena zależna jest od powierzchni lokalu, budynku lub jego
        częsci. Ilości okien i rodzaju instalacji.
        <br />• Przeważnie koszt wykonania Certyfiaktu dla mieszkania wynosi
        około 500 PLN
        <br />• Przeważnie koszt wykonania Certyfiaktu dla lokalu użytkowego
        wynosi około 1000 PLN
        <br />• Przeważnie koszt wykonania Certyfiaktu dla domu wynosi około
        1000 PLN
        <br />• Wykonanie certyfiaktu dla obiektów takich jak kamienice, obiekty
        przemysłowe itp. sa indywidualnie wyceniane.
        <br />• W celu otrzymania wyceny prosimy uzupełnić formularz poniżej.
      </p>
    ),
  },
];
export default function Pricing() {
  const [wyslanoWiadomosc, setwyslanoWiadomosc] = React.useState(false);
  const [validated, setValidated] = React.useState(false);

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
        <div>
          {text.map((data) => (
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography textAlign="justify">{data.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography textAlign="justify">{data.details}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </React.Fragment>
    );
  }
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a1wwmva",
        "template_jnm4g0d",
        e.target,
        "user_x9kPpW1JmhYVbwVWmxAVD"
      )
      .then(
        (result) => {
          console.log(result.text);
          setwyslanoWiadomosc(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  const Wyslano = () => {
    return (
      <div>
        {wyslanoWiadomosc ? (
          <Alert
            sx
            // action={
            //   <Button onClick={refreshPage} color="inherit" size="small">
            //     X
            //   </Button>
            // }
          >
            Wiadomość wysłana!
          </Alert>
        ) : null}
      </div>
    );
  };
  return (
    <div>
      <React.Fragment>
        <GlobalStyles
          styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
        />
        <CssBaseline />
        <Nav />
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container
            disableGutters
            maxWidth="md"
            component="main"
            sx={{ pt: 8, pb: 6 }}
          >
            <Typography
              component="h4"
              variant="h4"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Czym jest Świadectwo Charakterystyki Energetycznej
            </Typography>
            <Typography
              variant="h7"
              align="justify"
              color="text.secondary"
              component="p"
              data-aos="fade-up"
            >
              <br />
              Świadectwo charakterystyki energetycznej to dokument, który
              określa wielkość zapotrzebowania na energię niezbędną do
              zaspokojenia potrzeb energetycznych związanych z użytkowaniem
              budynku lub części budynku, czyli energii na potrzeby ogrzewania i
              wentylacji, przygotowania ciepłej wody użytkowej, chłodzenia, a w
              przypadku budynków niemieszkalnych również oświetlenia. Obowiązek
              posiadania w określonych sytuacjach świadectwa charakterystyki
              energetycznej budynku lub części budynku wynika z prawa
              europejskiego. Celem wprowadzenia obowiązku sporządzania świadectw
              jest promowanie budownictwa efektywnego energetycznie i
              zwiększanie świadomości społecznej w zakresie możliwości uzyskania
              oszczędności energii w budynkach. Dzięki informacjom zawartym w
              świadectwie właściciel, najemca lub użytkownik budynku może
              określić orientacyjne roczne zapotrzebowanie na energię, a tym
              samym koszt utrzymania związany ze zużyciem energii. Zasady
              sporządzania i przekazywania świadectw charakterystyki
              energetycznej budynków zostały określone w ustawie z dnia 29
              sierpnia 2014 r. o charakterystyce energetycznej budynków.
              <br />
              <br />
              Świadectwo charakterystyki energetycznej nie jest wymagane kiedy
              wykorzystujemy istniejący budynek (lub lokal) "na własny użytek",
              tj. nie zamierzamy go sprzedawać lub wynajmować.
              <br />
              <br />
              Brak świadectwa charakterystyki energetycznej może wiązać się z
              nałożeniem kary w wsykości 5000PLN.{" "}
              <b>Ustawa wchodzi w życie z dniem 28 kwietnia 2023 roku.</b>
              <br />
            </Typography>
            <br />
            <br />

            <PricingContent />

            <Box
              sx={{
                // mt: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <br />
              <br />
              <Typography color="" component="h1" variant="h5">
                Formularz kontaktowy
              </Typography>

              <Box
                sx={{
                  backgroundColor: "white",
                  p: 4,
                  borderRadius: "7px",
                }}
                component="form"
                onSubmit={sendEmail}
                noValidate={validated}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Twój Email"
                  name="user_email"
                  autoComplete="email"
                />
                Prosimy o podanie przybliżonego: adresu nieruchomości, jej
                powierzchni oraz typu.
                <TextField
                  multiline
                  margin="normal"
                  required
                  fullWidth
                  name="message"
                  label="Wiadomość"
                  type="text"
                  id="text"
                  rows="4"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Wyślij
                </Button>
                <Wyslano />
              </Box>
            </Box>
          </Container>
        </Box>
      </React.Fragment>
    </div>
  );
}
