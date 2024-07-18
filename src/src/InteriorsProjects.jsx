import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { grey } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { styled } from "@mui/material/styles";
import AOS from "aos";
import "aos/dist/aos.css";

const Realised = [
  {
    title: "Kurka Wodna",
    design: "CHD architekci",
    date: "2014",
    description: "Kanonicza 15",
    img1: "/images/kurkaWodna.png",
    img2: "/images/kurkaWodna2.png",
    img3: "",
  },
  {
    title: "Uzdrowisko Bistro",
    design: "CHD architekci",
    date: "2023",
    description:"Szpital w Warszawie",
    img1: "/images/uzdrowiskoBistro.png",
    img2: "/images/uzdrowiskoBistro2.jpg",
    img3: "",
  },
  {
    title: "Dzień dobry cafe",
    design: "CHD architekci",
    date: "2019",
    description:"Szpital Uniwersytecki w Krakowie",
    img1: "/images/dzienDobryCafe.png",
    img2: "/images/dzienDobryCafe2.png",
    img3: "",
  },
 
  {
    title: "Uzdrowisko Bistro",
    design: "CHD architekci",
    date: "2023",
    description: "Szpital Onkologiczny w Warszawie",
    img1: "/images/uzdrowsko3.png",
    img2: "/images/uzdrowisko2.png",
    img3: "/images/uzdrowisko3.png",
  },
  {
    title: "Restauracja Pod Słońcem",
    design: "CHD architekci",
    date: "2000",
    description: "Rynek Główny 43 w Krakowie",
    img1: "/images/podsloncem1.webp",
    img2: "/images/podsloncem2.webp",
    img3: "",
  },
  {
    title: "Ingo Hostel",
    design: "CHD architekci",
    date: "2007",
    description: "Ulica Mikołaja Kopernika w Krakowie",
    img1: "/images/ingo1.webp",
    img2: "/images/ingo2.webp",
    img3: "",
  },
  
  {
    title: "Restauracja Szoberowska",
    design: "CHD architekci",
    date: "2008",
    description: "Mały Rynek w Krakowie",
    img1: "/images/szoberowska1.webp",
    img2: "/images/szoberowska2.webp",
    img3: "",
  },
];
const Residential = [
    {
    title: "Sycamore 1",
    design: "CHD architekci - modelowanie, dokumentacja i CGI",
    date: "",
    description: "Chicago, IL",
    img1: "/images/ben/ben2.webp",
    img2: "/images/ben/ben8.webp",
    img3: "/images/ben/.webp",
  },
  {
    title: "Sycamore 1",
    design: "CHD architekci - modelowanie, dokumentacja i CGI",
    date: "",
    description: "Chicago, IL",
    img1: "/images/ben/VIEW3.webp",
    img2: "/images/ben/ben1.webp",
    img3: "/images/ben/ben1.webp",
  },
  {
    title: "Sycamore 2",
    design: "CHD architekci - modelowanie, dokumentacja i CGI",
    date: "",
    description: "Chicago, IL",
    img1: "/images/ben/secondstair 2.webp",
    img2: "/images/ben/secondstair 4.webp",
    img3: "/images/ben/.webp",
  },
  {
    title: "Sycamore 3",
    design: "CHD architekci - modelowanie, dokumentacja i CGI",
    date: "",
    description: "Chicago, IL",
    img1: "/images/ben/bead 47.webp",
    img2: "/images/ben/bead 48.webp",
    img3: "/images/ben/.webp",
  },
  {
    title: "Eliptical Duplex Stair",
    design: "CHD architekci - projekt wkonawczy",
    date: "12/01/2023",
    description: "New York - Central Park Tower",
    img1: "/images/nystair1.jpeg",
    img2: "/images/nystair2.jpeg",
    img3: "",
  },
  {
    title: "Bton1",
    design: "MA Architecture, współpraca",
    date: "",
    description: "Brighton, UK",
    img1: "/images/asia/a1.webp",
    img2: "/images/asia/a2.webp",
    img3: "/images/asia/.webp",
  },
  {
    title: "Bton2",
    design: "MA Architecture, współpraca",
    date: "",
    description: "Brighton, UK",
    img1: "/images/asia/b1.webp",
    img2: "/images/asia/b2.webp",
    img3: "/images/asia/.webp",
  },
  {
    title: "Bton3",
    design: "MA Architecture, współpraca",
    date: "",
    description: "Brighton, UK",
    img1: "/images/asia/c1.webp",
    img2: "/images/asia/c2.webp",
    img3: "/images/asia/.webp",
  },
  {
    title: "Bton4",
    design: "MA Architecture, współpraca",
    date: "",
    description: "Brighton, UK",
    img1: "/images/asia/e1.webp",
    img2: "/images/asia/e2.webp",
    img3: "/images/asia/.webp",
  },
  {
    title: "Bton5",
    design: "MA Architecture, współpraca",
    date: "",
    description: "Brighton, UK",
    img1: "/images/asia/f1.webp",
    img2: "/images/asia/f2.webp",
    img3: "/images/asia/.webp",
  },
  {
    title: "Bton6",
    design: "MA Architecture, współpraca",
    date: "",
    description: "Brighton, UK",
    img1: "/images/asia/g1.webp",
    img2: "/images/asia/1 (2).webp",
    img3: "/images/asia/.webp",
  },
  // {
  //   title: "",
  //   design: "CHD architekci - projekt wkonawczy  i koncepcyjny",
  //   date: "",
  //   description: "",
  //   img1: "/images/asia/.png",
  //   img2: "/images/asia/.png",
  //   img3: "/images/asia/.png",
  // },
  {
    title: "Willa ",
    design: "CHD architekci - Kompleksowy projekt architektoniczno-wnętrzarski willi wraz zagospodarowaniem terenu",
    date: "2018",
    description: "Wieliczka",
    img1: "/images/willa1.png",
    img2: "/images/willa2.png",
    img3: "",
  },
  {
    title: "Willa 2",
    design: "CHD architekci - Kompleksowy projekt architektoniczno-wnętrzarski willi wraz zagospodarowaniem terenu",
    date: "2018",
    description: "Wieliczka",
    img1: "/images/willa2a.png",
    img2: "/images/willa2b.png",
    img3: "",
  },
  {
    title: "Willa 3",
    design: "CHD architekci - Kompleksowy projekt architektoniczno-wnętrzarski willi wraz zagospodarowaniem terenu",
    date: "2018",
    description: "Wieliczka",
    img1: "/images/willa3A.png",
    img2: "/images/willa3B.png",
    img3: "",
  },
  {
    title: "Mieszkanie 15A - generalne wykonawstwo",
    design: "CHD architekci",
    date: "2014",
    description: "Rakowicka 15 A Kraków",
    img1: "/images/apartament11.webp",
    img2: "/images/apartament13.webp",
    img3: "",
  },
  {
    title: "Mieszkanie 15B - generalne wykonawstwo",
    design: "CHD architekci",
    date: "2014",
    description: "Rakowicka 15 A Kraków",
    img1: "/images/apartament21.webp",
    img2: "/images/apartament22.webp",
    img3: "",
  },
  {
    title: "Mieszkanie 15C - generalne wykonawstwo",
    design: "CHD architekci",
    date: "2014",
    description: "Rakowicka 15 A Kraków",
    img1: "/images/apartament32.webp",
    img2: "/images/apartament33.webp",
    img3: "",
  },  
  {
    title: "Mieszkanie 43A - generalne wykonawstwo",
    design: "CHD architekci",
    date: "12/12/12",
    description: "Rynek Główny w Krakowie",
    img1: "/images/apartament 1a.jpg",
    img2: "/images/apartament 1g.jpg",
    img3: "",
  },
  {
    title: "Mieszkanie 43B - generalne wykonawstwo",
    design: "CHD architekci",
    date: "2012",
    description: "Rynek Główny w Krakowie",
    img1: "/images/apartament 2a.jpg",
    img2: "/images/apartament 2b.jpg",
    img3: "",
  },
  {
    title: "Mieszkanie 43C - generalne wykonawstwo",
    design: "CHD architekci",
    date: "20122",
    description: "Rynek Główny w Krakowie",
    img1: "/images/apartament 3a.jpg",
    img2: "/images/apartament 3f.jpg",
    img3: "",
  },
  {
    title: "Mieszkanie 43D  - generalne wykonawstwo",
    design: "CHD architekci",
    date: "2012",
    description: "Rynek Główny w Krakowie",
    img1: "/images/apartament 4d.jpg",
    img2: "/images/apartament 4g.jpg",
    img3: "",
  },
  {
    title: "Mieszkanie 43E - generalne wykonawstwo",
    design: "CHD architekci",
    date: "2012",
    description: "Rynek Główny w Krakowie",
    img1: "/images/apartament 5c.jpg",
    img2: "/images/apartament 5f.jpg",
    img3: "",
  },
  
];
const Concept = [
  {
    title: "Millwork visualisation for Millerblaker ",
    design: "CHD architekci",
    date: "2023",
    description: "New York - Manhattan",
    img1: "/images/millerblaker1.png",
    img2: "/images/millerblaker2.png",
    img3: "",
  },
  {
    title: "Szkoła muzyczna",
    design: "CHD architekci",
    date: "2023",
    description: "",
    img1: "/images/muzyczna.png",
    img2: "/images/muzyczna2.png",
    img3: "",
  },
  {
    title: "Sklep",
    design: "CHD architekci",
    date: " ",
    description: "",
    img1: "/images/.png",
    img2: "/images/.png",
    img3: "",
  },
  {
    title: "Obiekty Sakralne",
    design: "CHD architekci",
    date: "2019",
    description: "",
    img1: "/images/sakralne3.webp",
    img2: "/images/sakralne2.webp",
    img3: "",
  },
];
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <Box bgcolor="white" sx={{ width: "100%", pt: 1, pb: 6 }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          aria-label="basic tabs example"
        >
          <Tab label="GASTRONOMIA" {...a11yProps(0)} />
          <Tab label="MIESZKANIA" {...a11yProps(1)} />
          <Tab label="INNE" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Container alignItems="center" maxWidth="lg">
          <Grid container spacing={5}>
            {Realised.map((Realised) => (
              <Grid
                data-aos="zoom-in"
                item
                key={Realised.title}
                xs={12}
                lg={12}
              >
                <Card>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: grey[500] }} aria-label="recipe">
                        chd
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        {/* <MoreVertIcon /> */}
                      </IconButton>
                    }
                    title={Realised.title}
                    
                  />
                  <CardMedia
                    component="img"
                    loading="lazy"
                    height="auto"
                    image={Realised.img1}
                    alt=" loading"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {Realised.description}
                    </Typography>
                  </CardContent>
                  <CardMedia
                    component="img"
                    loading="lazy"
                    height="auto"
                    image={Realised.img2}
                    alt=" loading"
                  />

                  
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Container alignItems="center" maxWidth="lg">
          <Grid container spacing={5}>
            {Residential.map((Residential) => (
              <Grid data-aos="zoom-in" item key={Residential.title} xs={12} lg={12}>
                <Card>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: grey[500] }} aria-label="recipe">
                        chd
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        {/* <MoreVertIcon /> */}
                      </IconButton>
                    }
                    title={Residential.title}
                    
                  />
                  <CardMedia
                    component="img"
                    loading="lazy"
                    height="auto"
                    image={Residential.img1}
                    alt=" loading"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {Residential.description}
                    </Typography>
                  </CardContent>
                  <CardMedia
                    component="img"
                    loading="lazy"
                    height="auto"
                    image={Residential.img2}
                    alt=" loading"
                  />

                  
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Container alignItems="center" maxWidth="lg">
          <Grid container spacing={5}>
            {Concept.map((Concept) => (
              <Grid data-aos="zoom-in" item key={Concept.title} xs={12} lg={12}>
                <Card>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: grey[500] }} aria-label="recipe">
                        chd
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        {/* <MoreVertIcon /> */}
                      </IconButton>
                    }
                    title={Concept.title}
                    
                  />
                  <CardMedia
                    component="img"
                    loading="lazy"
                    height="auto"
                    image={Concept.img1}
                    alt=" loading"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {Concept.description}
                    </Typography>
                  </CardContent>
                  <CardMedia
                    component="img"
                    loading="lazy"
                    height="auto"
                    image={Concept.img2}
                    alt=" loading"
                  />

                  
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </TabPanel>
    </Box>
  );
}
