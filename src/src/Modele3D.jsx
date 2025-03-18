import React, { useEffect, useRef } from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { grey, teal } from "@mui/material/colors";
import { sizing, minHeight } from "@mui/system";
import AOS from "aos";
import "aos/dist/aos.css";
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Alert from "@mui/material/Alert";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
// import ContactForm from "./ContactForm";
import { CardActionArea } from "@mui/material";
import Iframe from "react-iframe";
import emailjs from "@emailjs/browser";
import GlobalStyles from "@mui/material/GlobalStyles";
import Nav from "./nav";
import { Helmet } from "react-helmet";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ReactPlayer from "react-player/lazy";
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: grey[200],
//     },
//     secondary: {
//       main: teal[800],
//     },
//   },
// });
export default function Album() {
  const [wyslanoWiadomosc, setwyslanoWiadomosc] = React.useState(false);
  const [validated, setValidated] = React.useState(false);
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
  const videoParentRef = useRef();
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
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      {/* Hero unit */} <Nav />
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            component="h1"
            variant="h3"
            align="center"
            color="grey"
            gutterBottom
          >
            Modelowanie 3D, CGI
          </Typography>
          <Typography variant="h7" align="left" color="grey">
            Zapraszamy Państwa do zapoznania się z naszą ofertą.
            <br />
          </Typography>
          <br />
        </Container>
        <Container maxWidth="lg">
          <hr />
          <Typography
            component="h2"
            variant="h4"
            align="center"
            color=""
            gutterBottom
          >
            Modelowanie 3D
          </Typography>
          <Typography variant="h7" align="left" color="">

            Wykonujemy bardzo szczegółowe modele 3D produktów, schodów, elewacji i innych obiektów. Nasi klienci wykorzystują te modele najczęściej w projektach wykonawczych, jako baza do wykonania dokumentacji, druku 3D, implementacji obiektów BIM lub w celu przygotowania wizualizacji (które również sami wykonujemy).<br />
            <br />
            <br />

            <Accordion>
              <AccordionSummary
                expandIcon={<ArrowDownwardIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span">Jak wygłada współpraca z nami?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <li>
                    <b>Co możemy wykonać?</b> - jesteśmy w stanie wykonać praktycznie każdą geometrię. Począwszy od małych elementów stalowych, ornamentów, kończąc na schodach, elewacjach i całych budynkach. Często piszemy własne skrypty, aby zapewnić maksymalną dokładność.              </li>
                  <li>
                    <b>Co potrzebujemy od klienta?</b> - w zalezności od zlecenia będziemy potrzbować odpowiedniej dokumentacji oraz briefu. Czasem wystarczy szkic, czasem będziemy potrzebować modelu 3d isniejącego budynku. Często, przy bardziej złożonych zleceniach, pracujemy na wielu iteracjach projektu. Dostosowujemy się zmian do w dokumentacji lub briefie.
                  </li>
                  <li>
                    <b>Jaka jest cena naszych usług?</b> - koszt zależny jest od czasu i zasobów jakie musimy przeznaczyć na zlecenie. Na podstawie dostarczonej dokumentacji i briefu przygotujemy dla Państwa wycenę. Przeważnie koszt maleje wraz z kolejnymi zamówieniami. Współpracujemy stale z paroma biurami architektonicznymi i firmami budowlanymi, które doceniają jakość i cenę naszych usług.
                  </li>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ArrowDownwardIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography component="span">Z jakiego oprogramowania korzystamy?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <li>
                    <b>Rhino 3D</b> - program komputerowy typu służący do modelowania i tworzenia obiektów 3D. Program ten może być stosowany przy projektowaniu form przemysłowych, wspomaganiu procesów produkcji (CAD/CAM), podczas tworzenia interaktywnych animacji i gier. Pozwala na tworzenie praktycznie dowolnych obiektów 3D.
                  </li>
                  <li>
                    <b>ArchiCad</b> - Archicad jest jednym z najbardziej popularnych programów w biurach architektonicznych. Umożliwia przygotowanie jednocześnie zarówno dwuwymiarowych rysunków (rzutów kondygnacji, przekrojów, widoków elewacji), jak i widoków perspektywicznych i aksonometrycznych przy korzystaniu z jednego tylko modelu i technologi BIM.
                  </li>
                  <li>
                    <b>Grasshopper</b> - jest niejako dopełnieniem poprzednich programów. Jest to oprogramowanie służące do tworzenia i wykorzystywania skryptów.
                  </li>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ArrowDownwardIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                <Typography component="span">Jakie pliki obsługujemy?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <li>
                    <b>Import:</b>	.ifc/.stl/.obj//.dwg/.dxf/.gsm/.pln/.3dm /.rws /.3ds /.3mf /.amf/.ai/.dwg/	.dae/.dxf/.x/.e57/.dst/.exp/.eps/.off/	.gf/.gft/.gts/.igs/.lwo/.dgn/.fbx/.scn/.obj/.stl/	.sldprt/.pdf/	.ply/	.asc, .csv, .xyz, .cgo_ascii,.cgo_asci, .pts/	.raw/	.skp/.svg/.gdf/.zpr
                  </li>
                  <li>
                    <b>Export:</b>   .rvt/.ifc/.stl/.obj//.dwg/.dxf/.gsm/.pln/.3dm /.rws /.3ds/	.kmz /.3mf /.amf/	.dae/	.sat/.ai/.dwg/.dxf/.x/.e57/.dst/.exp/.eps/.off/	.gf/.gft/.gts/.igs/.lwo/.dgn/.fbx/.scn/.obj/.stl/	.sldprt/.pdf/	.ply/	.asc, .csv, .xyz, .cgo_ascii,.cgo_asci, .pts/	.raw/	.skp/.svg/.gdf/.zpr
                  </li>
                </Typography>
              </AccordionDetails>
            </Accordion>








          </Typography>
          <br />
          <Container alignItems="center" maxWidth="lg">
            <Grid container spacing={5}>

              <Grid item key={1} xs={12} lg={4}>
                <Card>

                  <CardMedia
                    component="img"
                    loading="lazy"
                    height="auto"
                    image="/images/ben/sycamore model 2.webp"
                    alt=" loading"
                  />
                </Card>
              </Grid>

              <Grid item key={2} xs={12} lg={4}>
                <Card>

                  <CardMedia
                    component="img"
                    loading="lazy"
                    height="auto"
                    image="/images/ben/sycamore model 1.webp"
                    alt=" loading"
                  />
                </Card>
              </Grid>
              <Grid item key={3} xs={12} lg={4}>
                <Card>

                  <CardMedia
                    component="img"
                    loading="lazy"
                    height="auto"
                    image="/images/ben/nycelewacja1.webp"
                    alt=" loading"
                  />
                </Card>
              </Grid>
              <Grid item key={4} xs={12} lg={4}>
                <Card>

                  <CardMedia
                    component="img"
                    loading="lazy"
                    height="auto"
                    image="/images/ben/nycelewacja2.webp"
                    alt=" loading"
                  />
                </Card>
              </Grid>
              <Grid item key={5} xs={12} lg={4}>
                <Card>

                  <CardMedia
                    component="img"
                    loading="lazy"
                    height="auto"
                    image="/images/ben/stair2model1.webp"
                    alt=" loading"
                  />
                </Card>
              </Grid>
              <Grid item key={6} xs={12} lg={4}>
                <Card>

                  <CardMedia
                    component="img"
                    loading="lazy"
                    height="auto"
                    image="/images/ben/stair3model1.webp"
                    alt=" loading"
                  />
                </Card>
              </Grid>


            </Grid>
            <br />
            <iframe

              src="https://www.youtube.com/embed/tX1H5jeyKtE"
              width="100%"
              height="480"
              id="myId vb"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              display="initial"
              position="relative"
            />{" "}
          </Container>


        </Container>
        <br /><br /><br /><br />
        <Container maxWidth="lg">
          <hr />
          <Typography
            component="h2"
            variant="h4"
            align="center"
            color=""
            gutterBottom
          >
            CGI - wizualizacje, animacje, VR
          </Typography>
          <Typography variant="h7" align="left" color="">

            Wykonujemy materiały graficzne z użyciem najnowszych narzędzi. Korzystamy z Unreal Engine - programowania używanego, między innymi, przez Hollywood zamiast tak zwanego 'Green Screen-a'. Możemy przygotować fotorealistyczne wizualizacje, filmy, animacje lub zadbać o stylizację  -  wsyzstko zależy od oczekiwań naszych klientów.<br />
            <br />
            <br />

            <Accordion>
              <AccordionSummary
                expandIcon={<ArrowDownwardIcon />}
                aria-controls="panel4content"
                id="panel4-header"
              >
                <Typography component="span">Jak wygłada współpraca z nami?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <li>
                    <b>Co możemy wykonać?</b> - fotorealistyczne ujęcia w wysokiej rozdzielczości, filmy, animacje, doświadczenia VR, rzuty 3d, panoramy 3d. Stylizowane wizualizacje pasujące do produktu / wymagań inwestora.           </li>
                  <li>
                    <b>Co potrzebujemy od klienta?</b> - w zalezności od zlecenia będziemy potrzbować matriałów takich jak model 3D, zdjęcia matriałow, zdjęcia lokalizacji i materiałów referencyjnych. Czasem wystarczy szkic!
                  </li>
                  <li>
                    <b>Jaka jest cena naszych usług?</b> - koszt zależny jest od czasu i zasobów jakie musimy przeznaczyć na zlecenie. Na podstawie dostarczonej dokumentacji i briefu przygotujemy dla Państwa wycenę. Przeważnie koszt maleje wraz z kolejnymi zamówieniami. Współpracujemy stale z paroma biurami architektonicznymi i firmami budowlanymi, które doceniają jakość i cenę naszych usług.
                  </li>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ArrowDownwardIcon />}
                aria-controls="panel5-content"
                id="panel5-header"
              >
                <Typography component="span">Z jakiego oprogramowania korzystamy?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <li>
                    <b>Unreal Engine 5+</b> -  zaawansowany silnik gier opracowany przez firmę Epic Games. Jest to oprogramowanie, które umożliwia tworzenie gier komputerowych, aplikacji wirtualnej rzeczywistości (VR), filmów animowanych i innych interaktywnych doświadczeń. Unreal Engine jest znany z wysokiej jakości grafiki 3D, realistycznej fizyki i zaawansowanego renderowania.                  </li>
                  <li>
                    <b>ArchiCad</b> - Archicad jest jednym z najbardziej popularnych programów w biurach architektonicznych. Umożliwia przygotowanie jednocześnie zarówno dwuwymiarowych rysunków (rzutów kondygnacji, przekrojów, widoków elewacji), jak i widoków perspektywicznych i aksonometrycznych przy korzystaniu z jednego tylko modelu i technologi BIM.
                  </li>
                  <li>
                    <b>Photoshop</b> - program przeznaczony do edycji materiału fotograficznego, grafik itp.
                  </li>
                  <li>
                    <b>iMovie</b> - program przeznaczony do edycji materiału filmowego.
                  </li>
                </Typography>
              </AccordionDetails>
            </Accordion>









          </Typography>
          <br />
          <Container alignItems="center" maxWidth="lg">
            <Grid container spacing={5}>

              <Grid item key={1} xs={12} lg={4}>
                <Card>

                  <CardMedia
                    component="img"
                    loading="lazy"
                    height="auto"
                    image="/images/brighton.png"
                    alt=" loading"
                  />
                </Card>
              </Grid>

              <Grid item key={2} xs={12} lg={4}>
                <Card>

                  <CardMedia
                    component="img"
                    loading="lazy"
                    height="auto"
                    image="/images/krynica3.webp"
                    alt=" loading"
                  />
                </Card>
              </Grid>
              <Grid item key={3} xs={12} lg={4}>
                <Card>

                  <CardMedia
                    component="img"
                    loading="lazy"
                    height="auto"
                    image="/images/ben/ben5.webp"
                    alt=" loading"
                  />
                </Card>
              </Grid>
              <Grid item key={4} xs={12} lg={4}>
                <Card>

                  <CardMedia
                    component="img"
                    loading="lazy"
                    height="auto"
                    image="/images/houseq2.jpg"
                    alt=" loading"
                  />
                </Card>
              </Grid>
              <Grid item key={5} xs={12} lg={4}>
                <Card>

                  <CardMedia
                    component="img"
                    loading="lazy"
                    height="auto"
                    image="/images/leszek/katowice4.webp"
                    alt=" loading"
                  />
                </Card>
              </Grid>
              <Grid item key={6} xs={12} lg={4}>
                <Card>

                  <CardMedia
                    component="img"
                    loading="lazy"
                    height="auto"
                    image="/images/leszek/katowice5.webp"
                    alt=" loading"
                  />
                </Card>
              </Grid>


            </Grid>
            <br />
            <iframe

src="https://www.youtube.com/embed/cCwqpy8ra7w"
width="100%"
height="480"
id="myId vb"
frameBorder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowFullScreen
display="initial"
position="relative"
/>{" "}
           
          </Container>


        </Container>
      </Box>
      <Container
        sx={{ py: 6, minHeight: "100vh", alignItems: "center" }}
        maxWidth="lg"
        data-aos="fade-down"
      >
        <Grid container spacing={5}>
          <Grid item xs={12} sm={12} sx={{ pb: 5 }}>
            <Container component="main" maxWidth="lg">

              <Box
                sx={{
                  // mt: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >

                <Typography color="white" component="h1" variant="h5">
                  Formularz kontaktowy
                </Typography>
                <br /><br />
                <Box sx={{
                  backgroundColor: "white",
                  p: 4,
                  borderRadius: "7px"
                }}
                  component="form" onSubmit={sendEmail}
                  noValidate={validated} >
                  <TextField

                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Twój Email"
                    name="user_email"
                    autoComplete="email"

                  />
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
                    variant=""
                    sx={{ mt: 3, mb: 2, }}
                  >
                    Wyślij
                  </Button>
                  <Wyslano />
                </Box>
              </Box>

            </Container>

          </Grid>

          <Grid item xs={12} sm={12} sx={{ pb: 5 }}>
            {/* <ContactForm /> */}
          </Grid>
          <Grid item xs={12} sm={12} sx={{ pb: 5 }}>
            <Iframe

              url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d269.2208349337302!2d19.938172454009088!3d50.062417692695604!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b0e1dd33297%3A0xa8c90fce36f5f86b!2sCho%C5%82uj%20Design%20s.c.%20Cho%C5%82uj%20I.%2C%20Cho%C5%82uj%20R.!5e0!3m2!1spl!2sus!4v1669903688989!5m2!1spl!2sus"
              width="100%"
              height="600px"
              id="myId"
              className="myClassname"
              display="initial"
              position="relative"
            />{" "}
          </Grid>
        </Grid>
        <Helmet>
          <title>3D CGI</title>
          <meta name="description" content="modelowanie 3d, CGI, wizualizacje, animacje, vr, rhino3d, 3d model, model komputerowy" />
          <meta property="og:image" content="/images/ben/sycamore model 1.webp" />
          <link
            rel="canonical"
            href="https://cholujdesign.com/3D"
          />
        </Helmet>
      </Container>
    </React.Fragment>
  );
}
