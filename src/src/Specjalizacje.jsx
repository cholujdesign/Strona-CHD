import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";

import Realestate from '@mui/icons-material/WorkspacePremium';

import Employer from '@mui/icons-material/Home';

import Employee from "@mui/icons-material/SupportAgent";

import Court from '@mui/icons-material/RestaurantMenu';

import Spolka from "@mui/icons-material/AirlineSeatIndividualSuite";

import Transaction from "@mui/icons-material/AccountBalance";

import Upadlosc from "@mui/icons-material/Computer";

import It from '@mui/icons-material/Architecture';

import Wykonawstwo from '@mui/icons-material/Construction';

import PhoneIcon from "@mui/icons-material/AssuredWorkload";
import { Button, CardActionArea, CardActions } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
import Nav from "./nav";
import Certyfikaty from "./CertyfikatyReduced";
import Generalne from "./Generalne"
import Iframe from "react-iframe";
const one = [
  {
    pic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",

    tab: "Mieszkania",
    index: 0,
    icon: <Employer />,
    bgPic:
      "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    parg1: "Mieszkania",
    parg2: (
      <p>
        Od wielu lat projektujemy domy i mieszkania. Mimo zmieniających się
        trendów, nasze projekty dobrze się zestarzały. Skupiamy się na
        potrzebach przyszłych domowników, ich preferencjach, planach, warunkach
        finansowych.
      </p>
    ),
    parg3: "",
    parg4: "W ramach specjalizacji “Mieszkania” między innymi:",
    parg5: [
      <ul>
        <li>
          • przygotujemy układ funkcjonalny, projekt koncepcyjny, projekt
          wykonawczy;
        </li>
        <li>
          <br />• na zlecenie klienta poprowadzimy prace wykończeniowo-remontowe
          jako generalny wykonawca, dzięki czemu oszczędzamy czasu, pieniądzy i
          stresu związanego z remontem ;
        </li>
        <li>
          <br />• prezentujemy projekt klientom z wykorzystaniem róznych środów
          prezentacji i przekazu takich jak np.: wizualizacje, animacje i
          virtualną rzeczywistość;
        </li>
        <li>
          <br />• przygotujemy specyfikację i kosztorys;
        </li>
        <li>
          {" "}
          <br />• w razie potrzeby zaadaptujemy wykonany juz projekt.
        </li>
      </ul>,
    ],
    parg6: [
      <ul>
        <li>
          {" "}
          <br />• podchodzimy do projektowania w sposób realistyczny,
          proponujemy rozwiązania sprawdzone, odpowiednie finansowo i adekwatne
          do potrzeb klienta, nigdy nie narzucamy na siłę naszych rozwiązań;
        </li>
        <li>
          {" "}
          <br />• kierujemy się zasadą, ze to klient będzie mieszkać w
          projektowanej przesztrzeni;
        </li>
        <li>
          <br />• cieszy nas to, ze nasi klienci są, nawet po latach, zadowoleni
          z naszej pracy i do nas wracją z kolejnymi zleceniami;
        </li>
      </ul>,
    ],

    buttonText: "Telefon",
    buttonVariant: "outlined",
    buttonText2: "Email",
    buttonVariant2: "outlined",
    buttonText3: "LinkedIn",
    buttonVariant3: "outlined",
  },
  {
    pic: "4528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",

    tab: "Gastronomia",
    index: 1,
    icon: <Court />,
    bgPic:
      "https://images.unsplash.com/photo-1539190346343-2063b7a88208?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1753&q=80",
    parg1: "Gastronomia",
    parg2: (
      <p>
        Lokale gastronomiczne muszą przyciągać klientów swoim wyglądem i
        funkcjonalnością. Dobry projekt lokalu zwiększa jego przepustowość,
        zachęca do odwiedzenia i pozwala na zredukowanie kosztów obsługi.
        Jednocześnie projekt lokalu musi odpowiadać włąsciwemu klientowi oraz
        loaklizacji obiektu.
      </p>
    ),
    parg3: "",
    parg4: "W ramach specjalizacji “Gastronomia” między innymi:",
    parg5: [
      <ul>
        <li>
          <br />• konsultujemy wstępne i ogólne załozenia
          projektowo-funkcjonalne z inwestorem;
        </li>
        <li>
          <br />• asystujemy przy przygotowaniu budzetu inwestycji;
        </li>
        <li>
          <br />• asystujemy przy wykreowaniu designu i marki lokalu;
        </li>
        <li>
          <br />• asystujemy w procesie wyboru osprzętu, doradzamy w jaki sposób
          zaplanować prowadzenie i rozwój biznesu;
        </li>
        <li>
          <br />• przygotujemy projekt koncepcyjny, wykonawczy, branzowy i
          dokonamy konsultacji z sanepidem;
        </li>
      </ul>,
    ],
    parg6: [
      <ul>
        <li>
          <br /> • wieloletnie doświadczenie w prowadzeniu lokali
          gastronomicznych przez członków zespołu;
        </li>
        <li>
          <br />• zrealizowaliśmy ponad 10 projektów lokali gastronomicznych;
        </li>
        <li>
          <br />• zrealizowaliśmy projekty w historycznym centrum Krakowa;
        </li>
        <li>
          <br />• zrealizowaliśmy projekty w szpitalach;
        </li>
        <li>
          <br />• posiadamy ciągły kontakt z branzą;
        </li>
        <li>
          <br />• <a href="/wnetrza">link do przykładowych projektów</a>;
        </li>
      </ul>,
    ],

    buttonText: "Telefon",
    buttonVariant: "outlined",
    buttonText2: "Email",
    buttonVariant2: "outlined",
    buttonText3: "LinkedIn",
    buttonVariant3: "outlined",
  },
  {
    pic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    title: "  ",
    tab: "Hotele / Apartamenty na wynajem",
    index: 2,
    icon: <Spolka />,
    bgPic:
      "https://images.unsplash.com/photo-1549923746-c502d488b3ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    parg1: "Hotele / Apartamenty na wynajem ",
    parg2: (
      <p>
        Projektowanie przestrzeni na czasowy pobyt gości rózni się od
        projektowania mieszkań i domów. Dobrze zaprojektowana przestrzeń dla
        pobytu czasowego ma duzy wpływ na zwrot z inwestycji.
      </p>
    ),
    parg3: (
      <p>
        Hotele / Apartamenty na wynajem to szerokie zagadnienie, które zawiera w
        sobie obiekty małe i duze. Często są zlokalizowane w trudnych,
        zabytkowych działkach/budynkach. Właściwe zrozumienie kontekstu
        projektowego jest kluczowe, aby uzyskać udany projekt i realizację.
      </p>
    ),
    parg4:
      "W ramach specjalizacji “Hotele / Apartamenty na wynajem” między innymi:",
    parg5: [
      <ul>
        <li>
          <br />• doradzamy w wyborze odpowiedniej formy prowadzenia
          działalności, zdradzimy tajniki wynajmowania apartamentów;
        </li>
        <li>
          <br />• przygotujemy tzw. feasbility studies, projekt funkcjonalny,
          koncepcyjny i wykonawczy;
        </li>
        <li>
          <br />• zajmiemy się nadzorem nad pracami remntowo-budowlanymi;
        </li>
        <li>
          <br />• pomozemy klientowi z przygotowaniem właściwej marki;
        </li>
        <li>
          <br />• pilnujemy załozeń biznesowych i projektujemy z ich
          uwzględnieniem;
        </li>
      </ul>,
    ],
    parg6: [
      <ul>
        <li>
          <br />• nastawienie probiznesowe, posiadamy szeroką wiedzę praktyczną
          (sami prowadziliśmy działaność polegającą na wynajmie apartamentów);
        </li>
        <li>
          <br />• lokale które zrealizowaliśmy przynoszą dochody, nie niszczeją i
          nie starzeją się;
        </li>
      </ul>,
    ],

    buttonText: "Telefon",
    buttonVariant: "outlined",
    buttonText2: "Email",
    buttonVariant2: "outlined",
    buttonText3: "LinkedIn",
    buttonVariant3: "outlined",
  },
  {
    pic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",

    tab: " Budynki zabytkowe ",
    index: 3,
    icon: <Transaction />,
    bgPic:
      "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    parg1: " Budynki zabytkowe  ",
    parg2: (
      <p>
        Remonty, przebudowy i adaptacje zabytkowych budynków wiążą się z dodatkowymi komplikacjami. Kluczowe jest tutaj doświadczenie i wiedza, które posiadamy. Dobrze poprowadzony projekt i realizacja w zabytkowej tkance miejskiej potrafi zaoszczędzić duzo czasu i pieniedzy inwestorowi.
      </p>
    ),
    parg3: (
      <p>
       
      </p>
    ),
    parg4: <p>W ramach specjalizacji " Budynki zabytkowe" między innymi:</p>,
    parg5: [
      <ul>
        <li>
          • kompleksowo doradzamy w procesach inwestycyjnych inwestorom;
        </li>
        <li>
          <br />• przygotujemy feasability studies, projekty koncepcyjne, wykonawcze;
        </li>
        <li>
          <br />• nadzorujemy i analizujemy prace wykonanywane przez podwykonawców;
        </li>
        <li>
          <br />• określamy jakie rozwiązania projektowe przynisą najlepsze wyniki finansowe;
        </li>
       
      
       
      </ul>,
    ],
    parg6: [
      <ul>
        <li>
          <br />• wszechstronny zespół posiadający umiejętności pozwalające na
          kompleksowe wsparcie przy prowadzeniu prac przy obiektach zabytkowych;
        </li>
        <li>
          <br />• doświadczenie nabyte podczas administrowania obiektami zabytkowymi;
        </li>
        <li>
          <br />• olbrzymi procent naszych projektów znajduję sie w strefach objętych nadzorem konserwatorskim;
        </li>
        <li>
          <br />• indywidualne i praktyczne podejście do procesu inwestycyjnego;
        </li>
        <li>
          <br />• jasna i szybka komunikacja w celu sprawnego przeprowadzenia
          całego procesu inwestycyjnego, z uwzględnieniem istnienia potencjalnych niespodzianek;
        </li>
       
      </ul>,
    ],

    buttonText: "Telefon",
    buttonVariant: "outlined",
    buttonText2: "Email",
    buttonVariant2: "outlined",
    buttonText3: "LinkedIn",
    buttonVariant3: "outlined",
  },
  {
    pic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    title: "  ",
    tab: "CGI/Dokumentacja projektowa",
    icon: <It />,
    index: 4,
    bgPic:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80",
    parg1: "CGI/Dokumentacja projektowa",
    parg2: (
      <p>
        Współpracujemy z biurami projektowymi w Polsce, USA i UK. Przygotowujemy dla nich dokumentację projektową, modele 3d, animacje, wizualizacje i dokumentację VR.
      </p>
    ),
    parg3: (
      <p>
        Oferujemy wysokiej jakości usługi w cenach nizszych niz za granicą.
      </p>
    ),
    parg4: <p>CGI/Dokumentacja projektowa:</p>,
    parg5: [
      <ul>
        <li>
          <br />• przygotujemy dokumentację w BIM;
        </li>
        <li>
          <br />• wykonamy skomplikowane geometrie za pomocą oprogramowania Rhino3D;
        </li>
        <li>
          <br />• wykonamy dokumentację koncepcyjną, projektową, wykonawczą i po wykonawczą;
        </li>
        <li>
          <br />• przygotujemy pliki 3D, animacje, wizualizacje, pliki VR;
        </li>
        <li>
          <br />• głownie pracujemy w UnrealEngine;
        </li>
       
        <li>
          <br />• dzięki naszemu doświadzczeniu projektowemu i wielu realizacjach masz pewność, ze dokumentacja zostnie wykonana w sposób profesjonalny.
        </li>
      </ul>,
    ],
    parg6: [
      <ul>
        <li>
          <br />• utrzymujemy stała współpracę z biurami w Polsce i za granicą;
        </li>
        <li>
          <br />• Polska: Idea Development, <a target="blank" href="https://investmap.pl/firma/idea-development-sp-z-o-o,10045.html">https://investmap.pl/firma/idea-development-sp-z-o-o,10045.html</a>;
        </li>
        <li>
          <br />• USA: CAD Designing Syndicate, LLC, <a target="blank" href="https://cdstech.us/">https://cdstech.us/</a>;
        </li>
        <li>
          <br />• UK: MA Architecture and interior design,<a target="blank" href="https://cdstech.us/">https://www.maarchitecture.co.uk/about</a>;
        </li>
        
      </ul>,
    ],

    buttonText: "Telefon",
    buttonVariant: "outlined",
    buttonText2: "Email",
    buttonVariant2: "outlined",
    buttonText3: "LinkedIn",
    buttonVariant3: "outlined",
  },
  {
    pic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    title: "  ",
    tab: "Certyfikaty Energetyczne",
    index: 5,
    icon: <Realestate />,
    bgPic:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    parg1: "Certyfikaty Energetyczne",
    parg2: (
   <Certyfikaty/>

   
    ),
    parg3: "",
    parg4: (
      <p>W ramach specjalizacji "Certyfikaty Energetyczne" oferujemy:</p>
     
    
    ),
    parg5: [
      <div>
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
   </div>
  ],
    parg6: [
      <ul>
        <li>
          <br />• posiadamy właściwe oprogramowanie i uprawnienia do wykonywania świadect;
        </li>
        <li>
          <br />• doradzamy w zakresię efektywności energetycznej budynków;
        </li>
        
      
      </ul>,
    ],

    buttonText: "Telefon",
    buttonVariant: "outlined",
    buttonText2: "Email",
    buttonVariant2: "outlined",
    buttonText3: "LinkedIn",
    buttonVariant3: "outlined",
  },
  {
    pic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",

    tab: "www i design",
    index: 6,
    icon: <Upadlosc />,
    bgPic:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    parg1: "www i design",
    parg2: (
      <p>
        Nasi partnerzy doceniają nasze umiejętności w projektowaniu i dizajnie. Współpracujący z nami deweloperzy doceniają oferowaną kompleksowość usług, od projektu architektonicznego poprez projekt i osbsługę strony i materiałów marketingowych.
      </p>
    ),
    parg4: "W ramach specjalizacji “www i design” między innymi: ",
    parg5: [
      <ul>
        <li>
          <br />• przygotujemy stronę www dla Ciebie;
        </li>

        <li>
          <br />• Będziemy sprawować pieczę nad treściami Twoich zasobów w sieci. Doświadczony grafik przygotuje materialy specjalnie dla Twoich potrzeb. Zapewniamy terminowość i przejrzyste warunki współpracy. Zanim zaczniemy pracę, wszystko ustalimy z Tobą. Masz kontrolę nad przebiegiem prac, a my zapewniamy jakość. Tresci dopasujemy do standardów rynkowych, ale przede wszystkim - do indywidualnych potrzeb Twojego biznesu;
        </li>
      
      
      
      </ul>,
    ],
    parg6: [
      <ul>
        <li>
          <br />• przykłady wykonanych stron dla naszych partnerów:
        </li>
        <li>
          <br /><a target="blank" href="https://kmtlegal.pl/">https://kmtlegal.pl/</a>
        </li>
        <li>
          <br /><a target="blank" href="https://willazlocien.com/">https://willazlocien.com/</a>
        </li>
        <li>
          <br /><a target="blank" href="https://www.pawla12.pl/">https://www.pawla12.pl/</a>
        </li>
        <li>
          <br /><a target="blank" href="https://madejpak.pl/">https://madejpak.pl/</a>
        </li>
        <li>
          <br /><a target="blank" href="https://remontypaciorek.com/">https://remontypaciorek.com/</a>
        </li>
        <li>
          <br /><a target="blank" href="https://hydraulikwnek.com/">https://hydraulikwnek.com/</a>
        </li>
        
      </ul>,
    ],

    buttonText: "Telefon",
    buttonVariant: "outlined",
    buttonText2: "Email",
    buttonVariant2: "outlined",
    buttonText3: "LinkedIn",
    buttonVariant3: "outlined",
  },
  {
    pic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    title: "  ",
    tab: "Generalne wykonawstwo",
    index: 7,
    icon: <Wykonawstwo />,
    bgPic:
      "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    parg1: "Generalne wykonawstwo",
    parg2: (
     <p>
       Działamy na zlecenie inwestora, nasze zadania obejmują kompleksową realizację inwestycji w zakresie prac budowlanych i montażowych. Prace są wykonywane na podstawie umowy o generalne wykonawstwo w określonych terminach i w stopniu niezbędnym do skutecznego wystąpienia z wnioskiem o wydanie pozwolenia na użytkowanie obiektu. Wynagrodzenie obejmuje sumę wartości brutto prac wszystkich podwykonawców i marżę generalnego wykonawcy. 
     </p>
    ),
    parg3: (
      ""
    ),
    parg4: <Generalne/>,
    parg5: [
    ],
    parg6: [(
      <div>
        <p>Przykładowe realizacje</p>
      <Iframe
                    url={"https://www.youtube.com/embed/neyJ6Fi8QzI"}
                    width="100%"
                    height="600px"
                    id="1"
                    className="myClassname"
                    frameBorder="0"
                    title="Embedded youtube"
                    display="initial"
                    position="relative"
                  /></div>
    )
   ],

    buttonText: "Telefon",
    buttonVariant: "outlined",
    buttonText2: "Email",
    buttonVariant2: "outlined",
    buttonText3: "LinkedIn",
    buttonVariant3: "outlined",
  },
  
 
];

const text = [
  {
    tab: "Mieszkania",
    icon: <Employer sx={{ fontSize: "80px" }} />,
    id: 0,
  },
  {
    tab: "Gastronomia",
    icon: <Court sx={{ fontSize: "80px" }} />,
    id: 1,
  },
  {
    tab: "Hotele / Apartamenty na wynajem",
    icon: <Spolka sx={{ fontSize: "80px" }} />,
    id: 2,
  },
  {
    tab: " Budynki zabytkowe",
    icon: <Transaction sx={{ fontSize: "80px" }} />,
    id: 3,
  },
  {
    tab: "CGI/Dokumentacja projektowa",
    icon: <It sx={{ fontSize: "80px" }} />,
    id: 4,
  },
  {
    tab: "Certyfikaty Energetyczne",
    icon: <Realestate sx={{ fontSize: "80px" }} />,
    id: 5,
  },
  {
    tab: "www i design",
    icon: <Upadlosc sx={{ fontSize: "80px" }} />,
    id: 6,
  },
  {
    tab: "Generalne wykonawstwo",
    icon: <Wykonawstwo sx={{ fontSize: "80px" }} />,
    id: 7,
  },
];
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function BasicTabs() {
  const myRef = useRef(null);

  const executeScroll = () => myRef.current.scrollIntoView();

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [expanded, setExpanded] = React.useState(false);

  const handleSwitch = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth="l"
        sx={{
          position: "fixed",
          zIndex: 5,
          display: {
            xs: "none",
            sm: "none",
            md: "block",
            lg: "block",
            xl: "block",
          },
        }}
      >
        <Box backgroundColor="white"></Box>
      </Container>
      {/* <Container
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "block",
            lg: "block",
            xl: "block",
          },
        }}
        maxWidth="lg"
      >
        <Box
          sx={{
            pt: 3,
            pb: 3,
            minHeight: "20vh",
          }}
        >
          <Container
            data-aos="fade-up"
            disableGutters
            component="main"
            sx={{
              pt: 0,
              pb: 0,
            }}
          >
            <Container
              sx={{
                m: 0.2,
                py: 5,
                display: {
                  xs: "none",
                  sm: "none",
                  md: "flex",
                  lg: "flex",
                  xl: "flex",
                },
              }}
            ></Container>

            <Typography
              variant="h5"
              align="justify"
              color=""
              component="p"
               
            >
              <br />
              CHD Kozubek Matusiak. Jesteśmy kancelarią 
              radców prawnych, która powstała z myślą o kompleksowym wsparciu
              podmiotów gospodarczych w celu umożliwienia im skupienia całej
              swojej uwagi na własnej działalności. Stawiamy się w roli partnera
              prawnego naszego Klienta, starannie słuchając jego potrzeb, aby
              dostarczyć mu najlepszych rozwiązań.
            </Typography>
          </Container>
        </Box>

        <Box
          sx={{
          
            minHeight: "80vh",
          }}
        >
          <Container
            data-aos="fade-down"
            sx={{
              pt: 5,
              pb: 22,
            }}
          >
            <Typography
              component="h4"
              variant="h4"
              align="center"
              color=""
               
              sx={{
                backgroundColor: "primary",
              }}
            >
              Specjalizacje
              <hr />
            </Typography>
            <Tabs>
              <Grid
                sx={{
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "flex",
                    lg: "flex",
                    xl: "flex",
                  },
                }}
                container
                spacing={0}
                alignItems=""
              >
                {text.map((tier) => (
                  <Grid item key={tier.tab} xs={12} md={6} lg={4}>
                    <Button
                      onClick={() => {
                        executeScroll();
                        setValue(tier.id);
                      }}
                      id={tier.id}
                      size="large"
                      color="third"
                      sx={{
                        "&:hover": {
                          backgroundColor: "secondary.light",
                        },
                      }}
                    >
                      <Typography color="grey" component="h4" variant="h6">
                        {tier.icon}
                        <br />
                        {tier.tab}
                      </Typography>
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </Tabs>
          </Container>
        </Box>
      </Container>
       */}
      {/* <div ref={myRef}> */}
      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: "white",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          minHeight: "101vh",
          minWidth: "102vw",
          zIndex: -2,
          pt: 1,
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{
            borderRight: 1,
            borderColor: "divider",
            width: "20vw",
            py: 1,
          }}
        >
          <Tab
            sx={{ py: 1 }}
            icon={<Employer />}
            label="Mieszkania"
            {...a11yProps(0)}
          />
          <Tab
            sx={{ py: 1 }}
            icon={<Court />}
            label="Gastronomia"
            {...a11yProps(1)}
          />
          <Tab
            sx={{ py: 1 }}
            icon={<Spolka />}
            label="Hotele / Apartamenty na wynajem"
            {...a11yProps(2)}
          />
          <Tab
            sx={{ py: 1 }}
            icon={<Transaction />}
            label=" Budynki zabytkowe"
            {...a11yProps(3)}
          />
          <Tab
            sx={{ py: 1 }}
            icon={<It />}
            label="CGI/Dokumentacja projektowa"
            {...a11yProps(4)}
          />
          <Tab
            sx={{ py: 1 }}
            icon={<Realestate />}
            label="Certyfikaty Energetyczne"
            {...a11yProps(5)}
          />
          <Tab
            sx={{ py: 1 }}
            icon={<Upadlosc />}
            label="www i design"
            {...a11yProps(6)}
          />
          <Tab
            sx={{ py: 1 }}
            icon={<Wykonawstwo />}
            label="Generalne wykonawstwo"
            {...a11yProps(7)}
          />
        </Tabs>
        {one.map((one) => (
          <TabPanel value={value} index={one.index}>
            <Box
              sx={{
                // backgroundImage: `url(${one.bgPic})`,
                // backgroundSize: "200vh",
                backgroundPosition: "top",
                backgroundRepeat: "no-repeat",
                display: "flex",
                minHeight: "120vh",
                minWidth: "85vw",
                mt: "-2vh",
                ml: "-1vw",
              }}
            >
              <Grid container spacing={0} alignItems="">
                <Grid item key="bio" xs={12} sm={12} md={12} lg={12}>
                  <Card
                    data-aos="fade-justify"
                    sx={{
                      // minHeight: "300vh",
                      minHeight: "101vh",
                      py: 3,
                    }}
                  >
                    <CardContent>
                      <Box
                        sx={{
                          justifyContent: "justify",
                          maxWidth: "lg",
                          mb: 2,
                          minHeight: "50vh",
                        }}
                      >
                        <Typography
                          component="h6"
                          variant="h6"
                          align="justify"
                          color="text.priamry"
                          sx={{ py: 0 }}
                        >
                          {one.icon} | {one.tab}
                          <hr />
                        </Typography>

                        <Accordion
                          expanded={expanded === "panel1"}
                          onChange={handleSwitch("panel1")}
                          sx={{ py: 1 }}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={one.parg1}
                            id={one.parg1}
                          >
                            <Typography
                              component="h6"
                              variant="h6"
                              align="justify"
                              color="text.priamry"
                            >
                              Opis specjalizacji
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography>
                              {/* <Typography
                                variant="h5"
                                align="justify"
                                color="text.secondary"
                                component="p"
                                 
                              >
                                {one.parg1}
                              </Typography> */}
                              <Typography
                                variant="h7"
                                align="justify"
                                color="text.secondary"
                                component="p"
                              >
                                {one.parg2}
                              </Typography>

                              <Typography
                                variant="h7"
                                align="justify"
                                color="text.secondary"
                                component="p"
                              >
                                {one.parg3}
                              </Typography>
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                        <Accordion
                          sx={{ py: 1 }}
                          expanded={expanded === "panel2"}
                          onChange={handleSwitch("panel2")}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={one.parg2}
                            id={one.parg2}
                          >
                            {/* <img src={one} width="10%" /> */}

                            <Typography
                              component="h6"
                              variant="h6"
                              align="justify"
                              color="text.priamry"
                            >
                              Nasze usługi
                              <br />
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography>
                              <Typography
                                variant="h7"
                                align="justify"
                                color="text.secondary"
                                component="p"
                              >
                                {one.parg4}
                              </Typography>
                              <br />
                              <ul>
                                <Typography
                                  component="p"
                                  variant="h7"
                                  align="justify"
                                  color="text.secondary"
                                  // key={line}
                                >
                                  {one.parg5}
                                </Typography>
                              </ul>
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                        <Accordion
                          sx={{ py: 1 }}
                          expanded={expanded === "panel3"}
                          onChange={handleSwitch("panel3")}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={one.parg3}
                            id={one.parg3}
                          >
                            {/* <img src={one} width="10%" /> */}

                            <Typography
                              component="h6"
                              variant="h6"
                              align="justify"
                              color="text.priamry"
                            >
                              Dlaczego CHD?
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography>
                              <Typography
                                color="text.secondary"
                                component="p"
                                variant="h7"
                                align="justify"
                              >
                                {one.parg6}
                              </Typography>
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </TabPanel>
        ))}
      </Box>
      {/* </div> */}
    </React.Fragment>
  );
}

function Accord() {
  return (
    <React.Fragment>
      <Typography variant="h5" align="center" color="" component="h1">
        {" "}
      </Typography>
      <Grid container spacing={1} alignItems="" sx={{ minHeight: "90vh" }}>
        {one.map((one) => (
          <Grid item key={one.title} xs={12} md={12}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={one.tab}
                id={one.tab}
              >
                <Typography
                  component="h6"
                  variant="h6"
                  align="justify"
                  color="text.priamry"
                >
                  {one.icon} |{one.tab}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Card
                  data-aos="fade-justify"
                  sx={{
                    minHeight: "300vh",
                    py: 5,
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        justifyContent: "justify",
                        maxWidth: "md",
                        mb: 2,
                      }}
                    >
                      <Typography
                        variant="h5"
                        align="justify"
                        color="text.secondary"
                        component="p"
                      >
                        {one.parg1}
                      </Typography>
                      <br />
                      <Typography
                        variant="h7"
                        align="justify"
                        color="text.secondary"
                        component="p"
                      >
                        {one.parg2}
                      </Typography>
                      <Typography
                        variant="h7"
                        align="justify"
                        color="text.secondary"
                        component="p"
                      >
                        {one.parg3}
                      </Typography>
                      <br />
                      <Typography
                        variant="h5"
                        align="justify"
                        color="text.secondary"
                        component="p"
                      >
                        Nasze usługi
                        <br />
                      </Typography>
                      <br />
                      <Typography
                        variant="h7"
                        align="justify"
                        color="text.secondary"
                        component="p"
                      >
                        {one.parg4}
                      </Typography>
                      <ul>
                        <Typography
                          component="p"
                          variant="h7"
                          align="justify"
                          color="text.secondary"
                          // key={line}
                        >
                          {one.parg5}
                        </Typography>
                      </ul>
                      <Typography
                        variant="h5"
                        align="justify"
                        color="text.secondary"
                        component="p"
                      >
                        <br /> Dlaczego CHD?
                        <br />
                      </Typography>

                      <Typography
                        color="text.secondary"
                        component="p"
                        variant="h7"
                        align="justify"
                      >
                        {one.parg6}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </AccordionDetails>
            </Accordion>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}

export default function Album() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <React.Fragment>
      <CssBaseline />
      <Nav />
      <br />
      <br />
      <Typography
        sx={{ ml: 4 }}
        component="h5"
        variant="h5"
        align="left"
        color="white"
        gutterBottom
      >
        Specjalizacje
      </Typography>

      <div>
        <Box component="span" sx={{ display: { xs: "none", sm: "block" } }}>
          <BasicTabs />
        </Box>
        <Box component="span" sx={{ display: { xs: "block", sm: "none" } }}>
          <br />
          <Accord />
        </Box>
        <Helmet>
          <title>Specjalizacje</title>
          <meta name="description" content="W czym się specjalizujemy?" />
          <link rel="canonical" href="https://CHDlegal.pl/Specjalizacje" />
        </Helmet>
      </div>
    </React.Fragment>
  );
}
