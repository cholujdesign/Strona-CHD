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
import Nav from "./navEn";

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
            Other services
          </Typography>
          <Typography
            variant="h7"
            align="left"
            color="text.secondary"
            component="p"
            data-aos="fade-up"
          >
            <br />
            Our office has many years of experience in the field
             architectural design, construction supervision and management
             construction. We take part in competitions and prepare projects
             concept to broaden our design horizons. Simultaneously
             thanks to our experience on construction sites, we are able to design
             structures that are easy and cheap to build.
           </Typography>
           <br/><br/>
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
                 We will take care of the content of your online resources.
                 An experienced graphic designer will prepare materials especially for you
                 needs. We ensure punctuality and transparent conditions
                 team work. Before we start work, we will arrange everything with you.
                 You control the workflow and we ensure quality.
                 We will adapt the content to market standards, but above all
                 - to the individual needs of your business.
               </Typography>
             </AccordionDetails>
           </Accordion>
           <Accordion>
             <AccordionSummary
               expandIcon={<ExpandMoreIcon />}
               aria-controls="panel2a-content"
               id="panel2a-header"
             >
               <Typography>Schedule</Typography>
             </AccordionSummary>
             <AccordionDetails>
               <Typography>
                 1. We get to know each other.
                 <br />
                 2. You present us your brief, i.e. a description of your goals and ideas.
                 <br />
                 3. We analyze the brief and what you currently have.
                 <br />
                 4. We work creatively.
                 <br />
                 5. We present the project to you. If you want at any time
                 change something - we will adapt. We don't do art for art's sake -
                 we care primarily about the effectiveness of the project, which for
                 we realize you.
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
                 How long will I wait for the implementation of the project?
               </Typography>
             </AccordionSummary>
             <AccordionDetails>
               <Typography>
                 The scale of the project depends on you, and we translate it into
                 time needed. Implementation is possible even in 1 day. Time
                 will depend on the needs, available graphic materials and
                 text. If you have everything in your head and materials, and we have it
                 dress nicely - it will be quick. We operate in accordance with the Agile methodology
                 (Agile Software Development), which assumes change
                 concept at any time.
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
