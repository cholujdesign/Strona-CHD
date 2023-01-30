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
            component="h3"
                  variant="h3"
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
            Nasze biuro posiada wieloletnie doświadczenie w zakresie
            projektowania architektonicznego, nadzoru budowy oraz prowadzenia
            budowy. Bierzemy udział w konkursach i przygotowujemy projekty
            koncepcyjne, aby poszerzać nasze horyzonty projektowe. Jednocześnie
            dzięki doświadczeniu na budowach jesteśmy w stanie projektować
            obiekty łatwe i tanie do wybudowania.
          </Typography>
          <br/><br/>
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
                Będziemy sprawować pieczę nad treściami Twoich zasobów w sieci.
                Doświadczony grafik przygotuje materialy specjalnie dla Twoich
                potrzeb. Zapewniamy terminowość i przejrzyste warunki
                współpracy. Zanim zaczniemy pracę, wszystko ustalimy z Tobą.
                Masz kontrolę nad przebiegiem prac, a my zapewniamy jakość.
                Tresci dopasujemy do standardów rynkowych, ale przede wszystkim
                - do indywidualnych potrzeb Twojego biznesu.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Harmonogram</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                1. Poznajemy się.
                <br />
                2. Przedstawiasz nam swój brief, czyli opis celów i pomysłów.
                <br />
                3. Analizujemy brief i to, czym dysponujesz obecnie.
                <br />
                4. Pracujemy kreatywnie.
                <br />
                5. Przedstawiamy Ci projekt. Jeśli zechcesz w którymś momencie
                coś zmienić - dopasujemy się. Nie robimy sztuki dla sztuki -
                zależy nam przede wszystkim na skuteczności projektu, który dla
                Ciebie realizujemy.
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
                Jak długo będę czekać na wdrożenie projektu?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Skala projektu zależy od ciebie, a my to przekładamy na
                potrzebny czas. Realizacja jest możliwa nawet w 1 dzień. Czas
                zależeć będzie od potrzeb, dostępnych materiałów graficznych i
                tekstowych. Jak masz wszystko w głowie i materiały, a my mamy to
                ładnie ubrać – będzie szybko. Działamy w myśl metodologii Agile
                (Zwinnego Wytwarzania Oprogramowania), która zakłada zmianę
                koncepcji w dowolnym momencie realizacji.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Container>
      </Box>

      <ArchitectureProjects />
    </React.Fragment>
  );
}

export default function Pricing() {
  return <PricingContent />;
}
