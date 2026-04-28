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
import Nav from "./navEn";
import { Helmet } from "react-helmet";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ReactPlayer from "react-player/lazy";

export default function Album() {
  const [messageSent, setMessageSent] = React.useState(false);
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
          setMessageSent(true);
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
        {messageSent ? (
          <Alert>
            Message Sent!
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
      <Nav />
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
            3D Modeling, CGI
          </Typography>
          <Typography variant="h7" align="left" color="grey">
            We offer a wide range of services.
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
            gutterBottom
          >
            3D Modeling
          </Typography>
          <Typography variant="h7" align="left">
            We create very detailed 3D models of products, stairs, facades, and other objects. Our clients use these models mainly in detailed design, as a base for documentation, 3D printing, BIM implementation, or to prepare visualizations (which we also create ourselves).
            <br />
            <br />
            <br />

            <Accordion>
              <AccordionSummary
                expandIcon={<ArrowDownwardIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span">How does cooperation with us look like?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <li>
                    <b>What can we do?</b> - we can create virtually any geometry. Starting from small steel elements, ornaments, to stairs, facades, and entire buildings. We often write our own scripts to ensure maximum precision.
                  </li>
                  <li>
                    <b>What do we need from the client?</b> - depending on the project, we will need the appropriate documentation and a brief. Sometimes a sketch is enough, and sometimes we will need a 3D model of the existing building. Often, for more complex orders, we work with multiple iterations of the project. We adapt to changes in the documentation or brief.
                  </li>
                  <li>
                    <b>What is the price of our services?</b> - the cost depends on the time and resources we need to allocate for the order. Based on the provided documentation and brief, we will prepare a quote. Usually, the cost decreases with subsequent orders. We cooperate regularly with several architectural offices and construction companies who appreciate the quality and cost of our services.
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
                <Typography component="span">What software do we use?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <li>
                    <b>Rhino 3D</b> - a computer program for modeling and creating 3D objects. This program can be used in industrial form design, supporting production processes (CAD/CAM), creating interactive animations, and games. It allows the creation of virtually any 3D object.
                  </li>
                  <li>
                    <b>ArchiCad</b> - Archicad is one of the most popular programs in architectural offices. It allows the preparation of both 2D drawings (floor plans, sections, elevations) and perspective and axonometric views using a single model and BIM technology.
                  </li>
                  <li>
                    <b>Grasshopper</b> - it is somewhat a complement to the previous programs. It is software used for creating and using scripts.
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
                <Typography component="span">What file formats do we support?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <li>
                    <b>Import:</b> .ifc/.stl/.obj/.dwg/.dxf/.gsm/.pln/.3dm/.rws/.3ds/.3mf/.amf/.ai/.dae/.dxf/.x/.e57/.dst/.exp/.eps/.off/.gft/.gts/.igs/.lwo/.dgn/.fbx/.scn/.obj/.stl/.sldprt/.pdf/.ply/.asc/.csv/.xyz/.cgo_ascii/.pts/.raw/.skp/.svg/.gdf/.zpr
                  </li>
                  <li>
                    <b>Export:</b> .rvt/.ifc/.stl/.obj/.dwg/.dxf/.gsm/.pln/.3dm/.rws/.3ds/.kmz/.3mf/.amf/.dae/.sat/.ai/.dwg/.dxf/.x/.e57/.dst/.exp/.eps/.off/.gft/.gts/.igs/.lwo/.dgn/.fbx/.scn/.obj/.stl/.sldprt/.pdf/.ply/.asc/.csv/.xyz/.cgo_ascii/.pts/.raw/.skp/.svg/.gdf/.zpr
                  </li>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Typography>
          <br /></Container>
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
              src="https://www.youtube.com/embed/lYMHQb0HV5k"
              width="100%"
              height="480"
              frameBorder="0"
              allowFullScreen
            />
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
    CGI - Visualizations, Animations, VR
  </Typography>
  <Typography variant="h7" align="left" color="">
    We create graphic materials using the latest tools. We use Unreal Engine - a programming tool used, among other things, by Hollywood instead of the so-called 'Green Screen'. We can prepare photorealistic visualizations, films, animations, or focus on stylization – it all depends on the expectations of our clients.<br />
    <br />
    <br />

    <Accordion>
      <AccordionSummary
        expandIcon={<ArrowDownwardIcon />}
        aria-controls="panel4content"
        id="panel4-header"
      >
        <Typography component="span">How does collaboration with us look?</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <li>
            <b>What can we create?</b> - photorealistic high-resolution shots, films, animations, VR experiences, 3D views, 3D panoramas. Stylized visualizations tailored to the product/investor’s requirements.
          </li>
          <li>
            <b>What do we need from the client?</b> - depending on the order, we will need materials such as a 3D model, photos of materials, photos of locations, and reference materials. Sometimes, a sketch is enough!
          </li>
          <li>
            <b>What is the price of our services?</b> - the cost depends on the time and resources we need to allocate for the order. Based on the provided documentation and brief, we will prepare a quote for you. The cost usually decreases with each subsequent order. We cooperate regularly with several architectural offices and construction companies that appreciate the quality and price of our services.
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
        <Typography component="span">Which software do we use?</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <li>
            <b>Unreal Engine 5+</b> - an advanced game engine developed by Epic Games. It is software that enables the creation of video games, virtual reality (VR) applications, animated films, and other interactive experiences. Unreal Engine is known for high-quality 3D graphics, realistic physics, and advanced rendering.
          </li>
          <li>
            <b>ArchiCad</b> - Archicad is one of the most popular programs in architectural offices. It allows the preparation of both two-dimensional drawings (floor plans, sections, elevation views) and perspective and axonometric views using a single model and BIM technology.
          </li>
          <li>
            <b>Photoshop</b> - software for editing photographic material, graphics, etc.
          </li>
          <li>
            <b>iMovie</b> - software for editing video material.
          </li>
        </Typography>
      </AccordionDetails>
    </Accordion>

  </Typography>

  </Container>
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
    />


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
            Contact Form
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
              label="Your Email"
              name="user_email"
              autoComplete="email"
            />
            <TextField
              multiline
              margin="normal"
              required
              fullWidth
              name="message"
              label="Message"
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
              Send
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
    <html lang="en" />
    <meta name="description" content="3D modeling, CGI, visualizations, animations, VR, rhino3d, 3D model, computer model" />
    <meta property="og:image" content="/images/ben/sycamore model 1.webp" />
    <link
      rel="canonical"
      href="https://cholujdesign.com/Modelling"
    />
  </Helmet>
</Container>

        
    
      
    </React.Fragment>
  );
}
