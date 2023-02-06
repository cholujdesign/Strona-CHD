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

const tiers = [
  {
    pic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    title: "Mecenas jan kowalski",
    Name: "Wspólnik",
    Opis: "Specjalizuje się w rozwodach oraz w szeroko pojętym prawie rodzinnym. Kompleksowo obsługuje podmioty gospodarcze, doradzając w zakresie zarówno bieżącej działalności przedsiębiorstwa, w tym w szczególności z zakresu prawa pracy i sporządzania umów gospodarczych, spraw korporacyjnych, a także w zakresie prawa upadłościowego i prawa restrukturyzacyjnego. W imieniu klientów skutecznie prowadzi negocjacje umów oraz mediacje. Ponadto, zajmuje się sprawami odszkodowawczymi, a także związanymi z ochroną dóbr osobistych. Absolwentka prawa na Wydziale Prawa i Administracji Uniwersytetu Jagiellońskiego w Krakowie. Ukończyła studia podyplomowe z zakresu prawa autorskiego, wydawniczego i prasowego w Instytucie Prawa Własności Intelektualnej Uniwersytetu Jagiellońskiego w Krakowie, studia podyplomowe z zakresu prawa pracy prowadzone przez Uniwersytet Jagielloński oraz studia podyplomowe z zakresu prawa gospodarczego na Wydziale Prawa i Administracji Uniwersytetu Śląskiego w Katowicach. Włada językiem angielskim. Adwokat wpisany na listę adwokatów Okręgowej Izby Adwokackiej w Krakowie.",
    Doswiadczenie:
      "Specjalizuje się w rozwodach oraz w szeroko pojętym prawie rodzinnym. Kompleksowo obsługuje podmioty gospodarcze, doradzając w zakresie zarówno bieżącej działalności przedsiębiorstwa, w tym w szczególności z zakresu prawa pracy i sporządzania umów gospodarczych, spraw korporacyjnych, a także w zakresie prawa upadłościowego i prawa restrukturyzacyjnego. W imieniu klientów skutecznie prowadzi negocjacje umów oraz mediacje. Ponadto, zajmuje się sprawami odszkodowawczymi, a także związanymi z ochroną dóbr osobistych. Absolwentka prawa na Wydziale Prawa i Administracji Uniwersytetu Jagiellońskiego w Krakowie. Ukończyła studia podyplomowe z zakresu prawa autorskiego, wydawniczego i prasowego w Instytucie Prawa Własności Intelektualnej Uniwersytetu Jagiellońskiego w Krakowie, studia podyplomowe z zakresu prawa pracy prowadzone przez Uniwersytet Jagielloński oraz studia podyplomowe z zakresu prawa gospodarczego na Wydziale Prawa i Administracji Uniwersytetu Śląskiego w Katowicach. Włada językiem angielskim. Adwokat wpisany na listę adwokatów Okręgowej Izby Adwokackiej w Krakowie.",
    description: ["cos tam", "cos tam", "cos tam", "cos tam"],
    buttonText: "Telefon",
    buttonVariant: "outlined",
    buttonText2: "Email",
    buttonVariant2: "outlined",
  },

  {
    pic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    title: "Mecenas jan kowalski",
    Name: "Wspólnik",
    Opis: "Specjalizuje się w rozwodach oraz w szeroko pojętym prawie rodzinnym. Kompleksowo obsługuje podmioty gospodarcze, doradzając w zakresie zarówno bieżącej działalności przedsiębiorstwa, w tym w szczególności z zakresu prawa pracy i sporządzania umów gospodarczych, spraw korporacyjnych, a także w zakresie prawa upadłościowego i prawa restrukturyzacyjnego. W imieniu klientów skutecznie prowadzi negocjacje umów oraz mediacje. Ponadto, zajmuje się sprawami odszkodowawczymi, a także związanymi z ochroną dóbr osobistych. Absolwentka prawa na Wydziale Prawa i Administracji Uniwersytetu Jagiellońskiego w Krakowie. Ukończyła studia podyplomowe z zakresu prawa autorskiego, wydawniczego i prasowego w Instytucie Prawa Własności Intelektualnej Uniwersytetu Jagiellońskiego w Krakowie, studia podyplomowe z zakresu prawa pracy prowadzone przez Uniwersytet Jagielloński oraz studia podyplomowe z zakresu prawa gospodarczego na Wydziale Prawa i Administracji Uniwersytetu Śląskiego w Katowicach. Włada językiem angielskim. Adwokat wpisany na listę adwokatów Okręgowej Izby Adwokackiej w Krakowie.",
    Doswiadczenie:
      "Specjalizuje się w rozwodach oraz w szeroko pojętym prawie rodzinnym. Kompleksowo obsługuje podmioty gospodarcze, doradzając w zakresie zarówno bieżącej działalności przedsiębiorstwa, w tym w szczególności z zakresu prawa pracy i sporządzania umów gospodarczych, spraw korporacyjnych, a także w zakresie prawa upadłościowego i prawa restrukturyzacyjnego. W imieniu klientów skutecznie prowadzi negocjacje umów oraz mediacje. Ponadto, zajmuje się sprawami odszkodowawczymi, a także związanymi z ochroną dóbr osobistych. Absolwentka prawa na Wydziale Prawa i Administracji Uniwersytetu Jagiellońskiego w Krakowie. Ukończyła studia podyplomowe z zakresu prawa autorskiego, wydawniczego i prasowego w Instytucie Prawa Własności Intelektualnej Uniwersytetu Jagiellońskiego w Krakowie, studia podyplomowe z zakresu prawa pracy prowadzone przez Uniwersytet Jagielloński oraz studia podyplomowe z zakresu prawa gospodarczego na Wydziale Prawa i Administracji Uniwersytetu Śląskiego w Katowicach. Włada językiem angielskim. Adwokat wpisany na listę adwokatów Okręgowej Izby Adwokackiej w Krakowie.",
    description: ["cos tam", "cos tam", "cos tam", "cos tam"],
    buttonText: "Telefon",
    buttonVariant: "outlined",
    buttonText2: "Email",
    buttonVariant2: "outlined",
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
          sx={{ pt: 8, pb: 6 }}
        >
          <Typography
            component="h4"
            variant="h4"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Generalne Wykonastwo
          </Typography>
          <Typography
            variant="h7"
            align="left"
            color="text.secondary"
            component="p"
            gutterBottom
          >
            <br />
            Projektujemy wnętrza, dobieramy materiały, wybieramy meble, mamy sprawdzonych specjalistów i pilnujemy jakości oraz budżetu. Dzięki temu nasi klienci bezstresowo przechodzą przez proces inwestycyjny. Często wykonujemy zlecenia dla klientów przebywających w innych państwach.
          </Typography>
        </Container>
      </Box>
      {/* End hero unit */}
      <Container
        maxWidth="md"
        component="main"
        sx={{
          pt: 8,
          pb: 6,
        }}
      >
     <img src="https://images.unsplash.com/photo-1482731215275-a1f151646268?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" width="100%"/>
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
