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
import Nav from "./navEn";
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
Design and build          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            component="p"
            gutterBottom
          >
        
        We design interiors, select materials, select furniture, have proven specialists and monitor quality and budget.
            
            Thanks to this, our clients go through the investment process stress-free.<br/>
            ✓ <br/> We oftenwork with clients based in other countries.
            <br/>
            ✓ <br/>
            In order to estimate costs of our services please contact us by e-mail or telephone.
            <br/>
            ✓ <br/>
          </Typography>
      
          <Typography
            component="h4"
            variant="h4"
            align="center"
            color="text.primary"
            gutterBottom
          ><br/><br/>
          FAQ
          </Typography>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>What will our cooperation look like?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We divide the investment process into 7 stages:
                <Divider/> <br/>
                1. Pre-design phase.<br/><br/>Let's get to know each other. We consult the investor's expectations, ideas and goals, determine the project style, and analyze the design assumptions. <br/>
                <Divider/> <br/>
                2. Functional concept phase.<br/><br/>We prepare a functional design, usually providing several proposals to our investors.
                <Divider/> <br/>
                3. Initial concept phase.<br/><br/>We prepare a conceptual design based on previous arrangements. These are usually 2D and 3D drawings, visualizations and animations of the designed interior.
                <Divider/> <br/>
                4. Advanced concept phase.<br/><br/>Based on the investor's comments and recommendations regarding the initial concept, we prepare an advanced concept.
                <Divider/> <br/>
                5. Detailed design phase.<br/><br/>After accepting the advanced concept, we prepare an executive design, i.e. technical drawings, all specifications, technical designs.
                <Divider/> <br/>
                6. Negotiation phase with contractors.<br/><br/>We cooperate with many contractors and companies supplying furniture, lighting, alarms and many other manufacturers and sellers of interior furnishings. Based on the detailed design, we look for suitable contractors and negotiate with them.
                <Divider/> <br/>
                7. Phase of supervision of construction works and interior furnishing.<br/><br/>We supervise the works, check the quality, order furniture, lamps and other accessories for the designed interior. We carry out acceptance tests and finally hand over the completed interior to the investors.
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
              <Typography>The process.</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
              We are in contact with the Investor at every stage and try to adapt the project depending on the Investor's ideas.
              We understand that the interior finishing process is expensive and we will tailor the project to your budget; our projects can be implemented in stages. Our experience allows us to reduce the risk of changes in the costs of work. We prepare contracts with contractors in such a way that they protect the investor's interest.
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
              Price.
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                The scale of the project is up to you, and we translate it into
                time needed and at the same time cost. <br/> The phased approach allows us to draw up the contract in such a way that the investor can narrow or expand the scope of the contract after each stage of work.<br/> The cost of our services depends on the scope of work, the size of the facility and the difficulty of preparing the project. Supervision of finishing and construction works is most often valued as a % of the investment value. This percentage depends on the previously mentioned factors.
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
         Examples<br/><br/>
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
