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
          pt: 2,
          pb: 2,
        }}
      >
        <Container
          disableGutters
          maxWidth="md"
          component="main"
          sx={{ pt: 2, pb: 2 }}
        >
          <Typography
            component="h4"
            variant="h4"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Architektura
          </Typography>
          
          <Helmet>
          <title>Architektura</title>
          <meta name="description" content="Projekty i realizacje architektoniczne CHD" />
          <meta property="og:image" content="https://images.unsplash.com/photo-1617360547704-3da8b5363369?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />
          <link
            rel="canonical"
            href="https://cholujdesign.com/architektura"
          />
        </Helmet>
        </Container>
      </Box>

      <ArchitectureProjects />
    </React.Fragment>
  );
}

export default function Pricing() {
  return <PricingContent />;
}
