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
    title: "Pawła 12, Katowice",
    design: "CHD architekci i Idea Development",
    date: "2024",
    description:
      "Rewitalizacja zabytkowej kamienicy - w trakcie realizacji. ",
    descriptionEn:
      "Refurbushment of a listed building.    ",
      img1: "/images/leszek/pawla12a.webp",
      img2: "/images/leszek/katowice.webp",
      img3: "",
  },
  {
    title: "Pi i Sigma, Rakowicka 15A",
    design: "CHD architekci i Idea Development",
    date: "2016",
    description:
      "Plomba została zaprojektowana na trudnej, wąskiej działce z istniejącym pałacykiem. Specyficzna bryła została zaprojektowana z użyciem negatywnej przestrzeni i chęcią uszanowania istniejącego pałacu. Przestrzeń pomiędzy istniejącym budynkiem a budynkiem proponowanym utworzyła wewnętrzny plac. Parter budynku ‘Sigma’ oraz cały budynek ‘Pi’ (istniejący Pałac) spełniają funkcje użytkowe, pozostałe piętra nowego budynku spełniają funkcję mieszkalną. Dzięki zwiększeniu powierzchni elewacji mieszkania otrzymały dodatkowe przeszklenia. Pomimo małej działki zaproponowano dużą powierzchnię biologicznie czynną, ogród na parterze oraz zielony dach. Dzięki temu budynek reguluje temperaturę otoczenia oraz pochłaniają wodę deszczową. ",
    descriptionEn:
      " The building was designed on a difficult, narrow plot with an existing palace. Unique shape derived from the use of negative space and the desire to respect the existing palace. The space between the existing building and the proposed building formed an internal plaza. Ground floor of the 'Sigma' building and the entire 'Pi' building (the existing Palace) have utility functions, the remaining floors of the new building fulfill residential functions. Thanks to the increase in the surface of the façade, the apartments received additional glazing. Despite the small plot, a large biologically active area, a garden on the ground floor and a green roof were proposed. Thanks to this, the building regulates the ambient temperature and absorbs rainwater.    ",
      img1: "/images/rakowicka151.webp",
      img2: "/images/rakowicka152.webp",
      img3: "",
  },
  {
    title: "Krynica-zdrój",
    design: "CHD architekci i Idea Development",
    date: "2022",
    description:
      "Głównym celem przy reiwtalizacji Willi Złocień było zminimalizowanie ilości energii cieplnej, którą zużywa się na ogrzewanie Willi. W tym celu stosowane są nie tylko nowoczesne technologie, ale również specjalne techniki budownictwa, które pozwalają na minimalizację traconej energii przez budynek. Zadbano o utrzymanie zabytkowego wyglądu willi z jednoczesną zamianą budynku na budynek energooszczęny.",
      img1: "/images/leszek/krynica2.webp",
      img2: "/images/krynica3.webp",
      img3: "",
  },
  
  {
    title: "Południe Polski",
    design: "CHD architekci",
    date: "2019",
    description:
      "Rewitalizacja istniejacego obiektu wraz z zagospodarowaniem terenu.",
      img1: "/images/rudera.jpg",
      img2: "/images/rudera2.jpg",
      img3: "",
  },
  {
    title: "Dom prefabrykowany",
    design: "CHD architekci",
    date: "2021",
    description: "Dom prefabrykowany wykonany w technologi szkieletowej, posadowiony na palach. ",
    img1: "/images/prefab1.png",
    img2: "",
    img3: "",
  },
  {
    title: "Domy w zabudowie szeregowej",
    design: "CHD architekci",
    date: "2018",
    description:"",
    descriptionEn:"",
    img1: "/images/szeregowa1.png",
    img2: "/images/szeregowa2.png",
    img3: "",
    },
];
const Designs = [
  {
    title: "Elewacja 142 NYC Manhattan",
    design: "CHD architekci",
    date: "2023",
    description: "Inwentaryzacja Elewacji",
    img1: "/images/elewacjamanhattan1.png",
    img2: "/images/elewacjamanhattan2.png",
    img3: "",
  },
  {
    title: "Elewacja Grand Hotel",
    design: "CHD architekci",
    date: "2018",
    description: "Projekt Oświetlenia Elewacji Grand Hotelu",
    img1: "/images/grand1.webp",
    img2: "",
    img3: "",
  },
  {
    title: "Dom prefabrykowany 1",
    design: "CHD architekci",
    date: "2021",
    description: "Dom prefabrykowany wykonany w technologi szkieletowej, posadowiony na palach. ",
    img1: "/images/plaski1.jpg",
    img2: "/images/plaski2.jpg",
    img3: "",
  },
  {
    title: "Dom prefabrykowany 2",
    design: "CHD architekci",
    date: "2021",
    description: "Dom prefabrykowany wykonany w technologi szkieletowej, posadowiony na palach. ",
    img1: "/images/houseq1.png",
    img2: "/images/houseq2.jpg",
    img3: "",
  },
  {
    title: "Dom prefabrykowany 3",
    design: "CHD architekci",
    date: "2021",
    description: "Dom prefabrykowany wykonany w technologi szkieletowej, posadowiony na palach. ",
    img1: "/images/3.png",
    img2: "/images/8.png",
    img3: "",
  },
  {
    title: "Szkoła Krosno",
    design: "CHD architekci",
    date: "2022",
    description: " ",
    img1: "/images/krosno.jpg",
    img2: "/images/krosno2.png",
    img3: "",
  },
];
const Concept = [
  {
    title: "Newhaven, Place od dissapearance",
    design: "CHD architekci",
    date: "",
    description: " ",
    img1: "/images/brighton.png",
    img2: "/images/brighton2.png",
    img3: "",
  },
  {
    title: "East London, Organic development",
    design: "CHD architekci",
    date: "",
    description: " ",
    img1: "/images/oxford.png",
    img2: "/images/oxford2.png",
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
    <Box bgcolor="white" sx={{ width: "100%", pt: 8, pb: 6 }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          aria-label="basic tabs example"
        >
          <Tab label="Realizacje" {...a11yProps(0)} />
          <Tab label="Projekty" {...a11yProps(1)} />
          <Tab label="Koncepcje" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Container alignItems="center" maxWidth="md">
          <Grid container spacing={5}>
            {Realised.map((Realised) => (
              <Grid
                data-aos="zoom-in"
                item
                key={Realised.title}
                xs={12}
                md={12}
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
                       
                      </IconButton>
                    }
                    title={Realised.title}
                    subheader={Realised.date}
                  />
                  <Typography variant="body2" color="text.secondary">
                    {Realised.design}
                    <br />
                    <br />
                  </Typography>
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
        <Container alignItems="center" maxWidth="md">
          <Grid container spacing={5}>
            {Designs.map((Designs) => (
              <Grid data-aos="zoom-in" item key={Designs.title} xs={12} md={12}>
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
                    title={Designs.title}
                    subheader={Designs.date}
                  />
                  <CardMedia
                    component="img"
                    loading="lazy"
                    height="auto"
                    image={Designs.img1}
                    alt=" loading"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {Designs.description}
                    </Typography>
                  </CardContent>
                  <CardMedia
                    component="img"
                    loading="lazy"
                    height="auto"
                    image={Designs.img2}
                    alt=" loading"
                  />

                  
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Container alignItems="center" maxWidth="md">
          <Grid container spacing={5}>
            {Concept.map((Concept) => (
              <Grid data-aos="zoom-in" item key={Concept.title} xs={12} md={12}>
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
                    subheader={Concept.date}
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
