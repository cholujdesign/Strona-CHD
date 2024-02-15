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
import ObszaryDzialalnosci from "./ObszaryDzialalnosci"
import AOS from 'aos';
import "aos/dist/aos.css";

const cards = 
[
  { head: 'Prawo budowlane', text: 'pare slow o prawie budowlanym', pic: 'https://images.unsplash.com/photo-1595844730298-b960ff98fee0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' },
  { head: 'Prawo budowlane', text: 'pare slow o prawie budowlanym', pic: 'https://images.unsplash.com/photo-1595844730298-b960ff98fee0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' },
  { head: 'Prawo budowlane', text: 'pare slow o prawie budowlanym', pic: 'https://images.unsplash.com/photo-1595844730298-b960ff98fee0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' },
  { head: 'Prawo budowlane', text: 'pare slow o prawie budowlanym', pic: 'https://images.unsplash.com/photo-1595844730298-b960ff98fee0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' },
  { head: 'Prawo budowlane', text: 'pare slow o prawie budowlanym', pic: 'https://images.unsplash.com/photo-1595844730298-b960ff98fee0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' },
]



function PricingContent() {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
  returns (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      {/* Hero unit */}
      <Box
          sx={{
            bgcolor: "background.paper",
            fri: 8,
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
           Areas of activity
        </Typography>
        <Typography variant="h7" align="left" color="text.secondary" component="p" gutterBottom>
<br/>

KPLA portfolios an individual approach to each client, based on mutual trust, commitment and diligence, which is the foundation for achieving joint success. Professionalism, experience and the ability to adapt to the changing reality ensure the highest level of handling entrusted cases.
        </Typography>
       
      </Container>
      </Box>
    
      <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((cards) => (
              <Grid item key={card.head} xs={12} sm={6} md={4}>
                <Card
                data-aos="fade-left"
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                   
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      // pt: "56.25%",
                    }}
                    image={card.pic}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.head}
                    </Typography>
                    <Typography>
                      {card.text}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        
        </Container>
      {/* End hero unit */}
      <BusinessAreas/>
    </React.Fragment>
  );
}
export default function Pricing() {
  return <PricingContent />;
}