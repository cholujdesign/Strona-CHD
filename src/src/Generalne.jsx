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
import Nav from "./nav";
import { Helmet } from "react-helmet";
import Divider from '@mui/material/Divider';
import Iframe from "react-iframe";

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
      <Nav/>
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
          sx={{ pt: 8, pb: 2 }}
        >
          <Typography
            component="h4"
            variant="h4"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Generalne Wykonawstwo
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            component="p"
            gutterBottom
          >
        
            Projektujemy wnętrza, dobieramy materiały, wybieramy meble, mamy sprawdzonych specjalistów i pilnujemy jakości oraz budżetu. 
            
            Dzięki temu nasi klienci bezstresowo przechodzą przez proces inwestycyjny.<br/>
            ✓  <br/> Często wykonujemy zlecenia dla klientów przebywających w innych państwach.
            <br/>
            ✓  <br/>
            W celu dokonania wyceny projektu wraz z nadzorem prosimy o kontakt drogą mailową lub telefoniczną.
            <br/>
            ✓  <br/>
          </Typography>
      
          <Typography
            component="h4"
            variant="h4"
            align="center"
            color="text.primary"
            gutterBottom
          ><br/><br/>
          Częste pytania
          </Typography>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Jak będzie wyglądała nasza współpraca?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Dzielimy proces inwestycyjny na 7 etapów:
                <Divider/> <br/>
                1. Faza przedprojektowa.<br/><br/>Poznajemy się. Konsultujemy oczekiwania, pomysły i cele inwestora, ustalamy styl projektu, analizujemy założenia projektowe. <br/>
                <Divider/> <br/>
                2. Faza  koncepcji funcjonalnej.<br/><br/>Przygotowujemy projekt funkcjonalny, przeważnie dostarczamy kilka propozycji naszym inwestorom.
                <Divider/> <br/>
                3. Faza wstępnej koncepcji.<br/><br/>Przygotowujemy projekt koncepcyjny na badzie wcześniejszych ustaleń. Przeważnie są to ryusnki 2D, 3D, wizualizacja i animacje projektowanego wnętrza.
                <Divider/> <br/>
                4. Faza zaawansowaj koncepcji.<br/><br/>Na bazie uwag i zaleceń inwestora w stosunku do wstępnej koncepcji przygotowujemy koncepcję zaawansowaną.
                <Divider/> <br/>
                5. Faza projektu wykonawczego.<br/><br/>Po akceptacji koncepcji zaawansowanej przygotowujemy projekt wykonawczy tj. rysunki techniczne, wszelkie zestawienia, projekty techniczne..
                <Divider/> <br/>
                6. Faza negocjacji z wykonawcami.<br/><br/>Wpółpracujemy z wieloma wykonawcami i firmami dostarczającymi meble, oświetlenie, alarmy i wieloma innymi producentami i sprzedawcami wyposażenia wnętrz. Na bazie projektu wykonawczego szukamy odpowiedznich wykonawców i prowadzimy z nimi negocjacje.
                <Divider/> <br/>
                7. Faza nadzoru prac budowlanych oraz umeblowania wnętrz.<br/><br/>Prowadzimy nadzór nad pracami, pilnujemy jakości, zamawiamy meble, lampy i inny osprzęt do projektowanego wnętrza. Dokonujemy odbiórów i na koniec wręczamy inwestorami ukończone wnętrze.
                <Divider/> <br/>
               
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Proces inwestycyjny.</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              Na każdym etapie jesteśmy z kontakcie z Inwestorem, staramy się dopasowywać projekt w zależności od pomysłów Inwestora.
              Rozumiemy, że proces wykończenia wnętrz jest kosztowny i dopasujemy projekt do budżetu; nasze projekty można reazliować etapami. Nasze doświadczenie pozwala na zredukowanie ryzyka zmian kosztów wykonania prac. Przygotowujemy umowy z wykonawcami w taki sposób, aby zabezpeiczały interes Inwestora.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography>
                Cena.
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Skala projektu zależy od ciebie, a my to przekładamy na
                potrzebny czas i jednoczesnie koszt. <br/> Etapowość pozwala nam na rozpisanie umowy w taki sposób, aby inwestor mógł zawężyć lub poszerzyć zakres umowy po każdym etapie prac.<br/> Koszt naszych usług zależny jest od zakresu prac, wielkości obiektu oraz trudności przygotowania projektu. Nadzór nad pracami wykończeniowo-budowlanymi wyceniami najcześciej jako % wartości inwestycji. Procent ten zależy od wcześcniej wpomnianych czynników.  
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Container>
      </Box>
      {/* End hero unit */}
      <Container
        maxWidth="md"
        component="main"
        sx={{
          pt: 2,
          pb: 2,
        }}
      >
         <Typography
            component="h4"
            variant="h4"
            align="center"
            color="white"
            gutterBottom
          ><br/>
         Przykładowe inwestycje<br/><br/>
          </Typography>
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
                  />{" "}
     <Helmet>
          <title>Generalne wykonawstwo</title>
          <meta name="description" content="CHD generalne wykonwastwo mieszkań i lokalów usługowych w Krakowie" />
          <meta property="og:image" content="https://images.unsplash.com/photo-1617360547704-3da8b5363369?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />
          <link
            rel="canonical"
            href="https://cholujdesign.com/Generalne_Wykonawstwo"
          />
        </Helmet>
      </Container>
      {/* Hero unit */}
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
     
      </Box>
      <Container sx={{ py: 8 }} maxWidth="md"></Container>
      {/* End hero unit */}
    </React.Fragment>
  );
}

export default function Pricing() {
  return <PricingContent />;
}
