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
import ArchitectureProjects from "./ArchitectureProjects";
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
           Architecture
           </Typography>
           <Typography
             variant="h7"
             align="left"
             color="text.secondary"
             component="p"
             data-aos="fade-up"
           >
             <br />
             Our practice has many years of experience in the fields of
             architectural design, construction supervision and management of
             construction. We take part in competitions and prepare projects'
             concept to broaden our design horizons. Simultaneously
             thanks to our experience on construction sites, we are able to design
             structures that are easy and cheap to build.
           </Typography>
        </Container>
        <Helmet>
          <title>Architecture</title>
          <meta name="description" content="Architektural projects from CHD" />
          <meta property="og:image" content="https://images.unsplash.com/photo-1617360547704-3da8b5363369?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />
          <link
            rel="canonical"
            href="https://cholujdesign.com/architecture"
          />
        </Helmet>
      </Box>

      <ArchitectureProjects />
    </React.Fragment>
  );
}

export default function Pricing() {
  return <PricingContent />;
}
