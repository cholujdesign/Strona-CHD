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
import { Helmet } from "react-helmet";

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
            Inne usługi
          </Typography>
          <Typography
            variant="h7"
            align="left"
            color="text.secondary"
            component="p"
            data-aos="fade-up"
          >
            <br />
            Posiadamy rozległą wiedzę i umiejętności w zakresie modelowania 3d, przygotowywania dokumentacji CAD/BIM, przygotowywania wizualizacji, animacji, doświadczeń VR i wykonywania stron www.
            Oferujemy nasze usługi klientom z różnych branż, często niezwiązanych z branżą budowlaną.
          </Typography>
          <br /><br />
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
                Po otrzymaniu dokumentacji i wymagań klienta analizujemy materiały i przedstawiamy kosztorys.
                <br />
                Jeżeli kosztorys zostanie zaakceptowany ustalamy termin realizacji zlecenia i bierzemy się do pracy.
                <br />
                Często pierwsze zlecenie zajmuje troszkę wiecej czasu niż kolejne. Im dłużej współpracujemy tym szybciej jesteśmy w stanie zrealizować zamówienie, często przekłada się to na niższe koszty dla zleceniodawcy.
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
                Jak długo będę czekać na wykonanie zlecenia?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Czas oczekiwania (również koszt) zależy od skali zlecenia i dostarczonych materiałów. <br/>Przykładowo: wykonanie szczegółowego modelu schodów, wraz z wizualizacjami i animacją potrafi zająć tylko tydzień w sytuacji, kiedy zostanie nam udostępniona pełna dokumentacja i dokładny model klatki schodowej. W sytuacji, kiedy sami musimy wybrać właściwe detale i przygotować model klatki schodowej czs ten potradi się wydłużyć dwukrotnie.
              <br/>
              Jeżeli chodzi o strony www czas realizacji wynosi przeważnie 2-5 dni w zalezności od złożoności zlecenia i dostępnych materiałów graficznych i tekstowych.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Container>
      </Box>

      <ArchitectureProjects />
      <Helmet>
                <title>Inne</title>
                <meta name="description" content="CGI, 3D model, VR, website design, Animations" />
                <meta property="og:image" content="/images/ben/sycamore model 2.webp" />
                <link
                  rel="canonical"
                  href="https://cholujdesign.com/Inne"
                />
              </Helmet>
    </React.Fragment>
    
  );
}

export default function Pricing() {
  return <PricingContent />;
}
