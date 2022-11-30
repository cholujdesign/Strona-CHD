import React, { useEffect } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AOS from 'aos';
import "aos/dist/aos.css";



const tiers = [
  {
    pic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
    title: 'Mecenas jan kowalski',
    Name: 'Wspólnik',
    Opis:        'Specjalizuje się w rozwodach oraz w szeroko pojętym prawie rodzinnym. Kompleksowo obsługuje podmioty gospodarcze, doradzając w zakresie zarówno bieżącej działalności przedsiębiorstwa, w tym w szczególności z zakresu prawa pracy i sporządzania umów gospodarczych, spraw korporacyjnych, a także w zakresie prawa upadłościowego i prawa restrukturyzacyjnego. W imieniu klientów skutecznie prowadzi negocjacje umów oraz mediacje. Ponadto, zajmuje się sprawami odszkodowawczymi, a także związanymi z ochroną dóbr osobistych. Absolwentka prawa na Wydziale Prawa i Administracji Uniwersytetu Jagiellońskiego w Krakowie. Ukończyła studia podyplomowe z zakresu prawa autorskiego, wydawniczego i prasowego w Instytucie Prawa Własności Intelektualnej Uniwersytetu Jagiellońskiego w Krakowie, studia podyplomowe z zakresu prawa pracy prowadzone przez Uniwersytet Jagielloński oraz studia podyplomowe z zakresu prawa gospodarczego na Wydziale Prawa i Administracji Uniwersytetu Śląskiego w Katowicach. Włada językiem angielskim. Adwokat wpisany na listę adwokatów Okręgowej Izby Adwokackiej w Krakowie.',
    Doswiadczenie:        'Specjalizuje się w rozwodach oraz w szeroko pojętym prawie rodzinnym. Kompleksowo obsługuje podmioty gospodarcze, doradzając w zakresie zarówno bieżącej działalności przedsiębiorstwa, w tym w szczególności z zakresu prawa pracy i sporządzania umów gospodarczych, spraw korporacyjnych, a także w zakresie prawa upadłościowego i prawa restrukturyzacyjnego. W imieniu klientów skutecznie prowadzi negocjacje umów oraz mediacje. Ponadto, zajmuje się sprawami odszkodowawczymi, a także związanymi z ochroną dóbr osobistych. Absolwentka prawa na Wydziale Prawa i Administracji Uniwersytetu Jagiellońskiego w Krakowie. Ukończyła studia podyplomowe z zakresu prawa autorskiego, wydawniczego i prasowego w Instytucie Prawa Własności Intelektualnej Uniwersytetu Jagiellońskiego w Krakowie, studia podyplomowe z zakresu prawa pracy prowadzone przez Uniwersytet Jagielloński oraz studia podyplomowe z zakresu prawa gospodarczego na Wydziale Prawa i Administracji Uniwersytetu Śląskiego w Katowicach. Włada językiem angielskim. Adwokat wpisany na listę adwokatów Okręgowej Izby Adwokackiej w Krakowie.',
    description: [
      'cos tam',
      'cos tam',
      'cos tam',
      'cos tam',
    ],
    buttonText: 'Telefon',
    buttonVariant: 'outlined',
    buttonText2: 'Email',
    buttonVariant2: 'outlined',
  },

  {
    pic: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    title: 'Mecenas jan kowalski',
    Name: 'Wspólnik',
    Opis:        'Specjalizuje się w rozwodach oraz w szeroko pojętym prawie rodzinnym. Kompleksowo obsługuje podmioty gospodarcze, doradzając w zakresie zarówno bieżącej działalności przedsiębiorstwa, w tym w szczególności z zakresu prawa pracy i sporządzania umów gospodarczych, spraw korporacyjnych, a także w zakresie prawa upadłościowego i prawa restrukturyzacyjnego. W imieniu klientów skutecznie prowadzi negocjacje umów oraz mediacje. Ponadto, zajmuje się sprawami odszkodowawczymi, a także związanymi z ochroną dóbr osobistych. Absolwentka prawa na Wydziale Prawa i Administracji Uniwersytetu Jagiellońskiego w Krakowie. Ukończyła studia podyplomowe z zakresu prawa autorskiego, wydawniczego i prasowego w Instytucie Prawa Własności Intelektualnej Uniwersytetu Jagiellońskiego w Krakowie, studia podyplomowe z zakresu prawa pracy prowadzone przez Uniwersytet Jagielloński oraz studia podyplomowe z zakresu prawa gospodarczego na Wydziale Prawa i Administracji Uniwersytetu Śląskiego w Katowicach. Włada językiem angielskim. Adwokat wpisany na listę adwokatów Okręgowej Izby Adwokackiej w Krakowie.',
    Doswiadczenie:        'Specjalizuje się w rozwodach oraz w szeroko pojętym prawie rodzinnym. Kompleksowo obsługuje podmioty gospodarcze, doradzając w zakresie zarówno bieżącej działalności przedsiębiorstwa, w tym w szczególności z zakresu prawa pracy i sporządzania umów gospodarczych, spraw korporacyjnych, a także w zakresie prawa upadłościowego i prawa restrukturyzacyjnego. W imieniu klientów skutecznie prowadzi negocjacje umów oraz mediacje. Ponadto, zajmuje się sprawami odszkodowawczymi, a także związanymi z ochroną dóbr osobistych. Absolwentka prawa na Wydziale Prawa i Administracji Uniwersytetu Jagiellońskiego w Krakowie. Ukończyła studia podyplomowe z zakresu prawa autorskiego, wydawniczego i prasowego w Instytucie Prawa Własności Intelektualnej Uniwersytetu Jagiellońskiego w Krakowie, studia podyplomowe z zakresu prawa pracy prowadzone przez Uniwersytet Jagielloński oraz studia podyplomowe z zakresu prawa gospodarczego na Wydziale Prawa i Administracji Uniwersytetu Śląskiego w Katowicach. Włada językiem angielskim. Adwokat wpisany na listę adwokatów Okręgowej Izby Adwokackiej w Krakowie.',
    description: [
        'cos tam',
        'cos tam',
        'cos tam',
        'cos tam',
    ],
    buttonText: 'Telefon',
    buttonVariant: 'outlined',
    buttonText2: 'Email',
    buttonVariant2: 'outlined',
  },
];



function PricingContent() {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      {/* Hero unit */}
      <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
            
          }}
        >
      <Container disableGutters 
      maxWidth="md" 
      component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
           Kancelaria xyz
        </Typography>
        <Typography variant="h7" align="left" color="text.secondary" component="p"  gutterBottom>
<br/>

KPLA oferuje indywidualne podejście do każdego Klienta, oparte na wzajemnym zaufaniu, zaangażowaniu i staranności, będące fundamentem wypracowania wspólnego sukcesu. Profesjonalizm, doświadczenie oraz umiejętność adaptacji do zmieniającej się rzeczywistości zapewnia najwyższy poziom prowadzenia powierzonych spraw.
        </Typography>
        
      </Container>
      </Box>
      {/* End hero unit */}
      <Container 
      maxWidth="md" component="main"
      sx={{
        
        pt: 8,
        pb: 6,
        
      }}
    >
      
   

        <Grid container spacing={5} alignItems="">
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
        </Grid>
      </Container>
      {/* Hero unit */}
      <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
            
          }}
        >
      <Container disableGutters 
      maxWidth="md" 
      component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
         O naszej Kancelarii
        </Typography>
        <Typography variant="h7" align="left" color="text.secondary" component="p">
        Adwokacka Spółka Partnerska KPLA Kasolik, Pawlus – Łapa  została zawiązana w 2016 roku celem konsolidacji długotrwałej współpracy adwokatów, opierającej się na ich wieloletnim doświadczeniu zawodowym urzeczywistniając, tym samym najwyższą jakość świadczonych usług prawnych.
<br/>
Nieustanny i dynamiczny rozwój KPLA gwarantuje realizację kompleksowej pomocy i doradztwa na rzecz osób prywatnych, podmiotów gospodarczych oraz instytucji w zakresie zróżnicowanych dziedzin prawa.
<br/>
KPLA oferuje indywidualne podejście do każdego Klienta, oparte na wzajemnym zaufaniu, zaangażowaniu i staranności, będące fundamentem wypracowania wspólnego sukcesu. Profesjonalizm, doświadczenie oraz umiejętność adaptacji do zmieniającej się rzeczywistości zapewnia najwyższy poziom prowadzenia powierzonych spraw.
        </Typography>
        
      </Container>
      </Box>
      <Container sx={{ py: 8 }} maxWidth="md">

        </Container>
      {/* End hero unit */}     
    </React.Fragment>
  );
}

export default function Pricing() {
  return <PricingContent />;
}