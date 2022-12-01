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
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            CHD Architekci
          </Typography>
          <Typography
            variant="h7"
            align="left"
            color="text.secondary"
            component="p"
            gutterBottom
          >
            <br />
            Zajmujemy się architekturą oraz architekturą wnętrz od ponad 25 lat.
            Nasz zespół ma doświadczenie w projektach od małych do średnich,
            nadzorze autorskim oraz kierowaniu budową. Od dekady zaczęliśmy
            łączyć projektowanie przestrzenne z projektowaniem form
            przemysłowych. W zależności od typu i rozmiaru projektu zapraszamy
            do współpracy naszych kolegów po fachu oraz innych zaufanych
            specjalistów.{" "}
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
        <Box data-aos="zoom-in"
          sx={{
            backgroundImage: `url(https://i.etsystatic.com/29824474/r/il/5d77c6/3085999730/il_fullxfull.3085999730_c22h.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            alignItems: "center",
            py: 35,
          }}
        >
          <Box
            sx={{
              backgroundColor: "secondary.light",
            }}
          >
            <Typography
              component="h1"
              variant="h4"
              align="center"
              color="white"
            >
              Własna produkcja prototypów
            </Typography>
            <br />
            <br />
            <Typography
              component="h6"
              variant="h6"
              align="center"
              color="white"
            >
              Sami często przytowujemy prototypu mebli, czy rozwiązań
              technologiczno-materiałowych. Posiadamy 2 małe warsztaty
              wyposażone w sprzęt pozwalający na obróbkę metalu, drewna i wielu
              innych materiałow.
            </Typography>
          </Box>
        </Box>
        <br /> <br />
        <Box data-aos="zoom-in"
          sx={{
            backgroundImage: `url(https://media.wired.com/photos/6279a496a4fb038463303e16/3:2/w_2400,h_1600,c_limit/3D-Print-GigaLab-Gear-GettyImages-1132021724.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            alignItems: "center",
            py: 35,
          }}
        >
          <Box data-aos="zoom-in"
            sx={{
              backgroundColor: "secondary.light",
            }}
          >
            <Typography
              component="h1"
              variant="h4"
              align="center"
              color="white"
            >
              Nowoczesne technologie
            </Typography>
            <br />
            <br />
            <Typography
              component="h6"
              variant="h6"
              align="center"
              color="white"
            >
              Korzystamy z drukarki 3d, oprogramowania do produkcji
              zaawansowanych cyfrowych modeli 3d. Korzystamy z projektowania
              algorytmicznego.
            </Typography>
          </Box>
        </Box>
        <br /> <br />
        <Box data-aos="zoom-in"
          sx={{
            backgroundImage: `url(https://c.stocksy.com/a/ZBH000/z9/66065.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            alignItems: "center",
            py: 35,
          }}
        >
          <Box data-aos="zoom-in"
            sx={{
              backgroundColor: "secondary.light",
            }}
          >
            <Typography
              component="h1"
              variant="h4"
              align="center"
              color="white"
            >
              Tradycyjne techniki
            </Typography>
            <br />
            <br />
            <Typography
              component="h6"
              variant="h6"
              align="center"
              color="white"
            >
              Czasami pracujemy z użyciem tradycjnych technik projektowych
              takich jak produkcji modeli, szkice odręczne, malowanie.
            </Typography>
          </Box>
        </Box>
        {/* <Grid container spacing={5} alignItems="">
          {tiers.map((tier) => (
            
            <Grid
              item
              key={tier.title}
              xs={12}
              md={6}
            >
              <Card data-aos="zoom-in">
                <CardHeader
                
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[10]
                        : theme.palette.grey[700],
                  }}
                />
                <CardMedia
        component="img"
        alt="green iguana"
        height="440"
        image={tier.pic}
      />
                <CardContent>
                    
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h2" variant="h5" color="text.primary">
                      {tier.Name}
                    </Typography>
                    
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                  <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>O mnie</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {tier.Opis}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Doświadczenie</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {tier.Doswiadczenie}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Wykształcenie</Typography>
        </AccordionSummary>
      </Accordion>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant}>
                    {tier.buttonText}
                  </Button>
                  <Button fullWidth variant={tier.buttonVariant2}>
                    {tier.buttonText2}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid> */}
      </Container>
      {/* Hero unit */}

      <Container sx={{ py: 8 }} maxWidth="md"></Container>
      {/* End hero unit */}
    </React.Fragment>
  );
}

export default function Pricing() {
  return <PricingContent />;
}
