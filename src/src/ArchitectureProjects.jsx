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
    title: "Pi i Sigma, Rakowicka 15A",
    design: "CHD architekci i Idea Development",
    date: "2016",
    description:
      "Plomba została zaprojektowana na trudnej, wąskiej działce z istniejącym pałacykiem. Specyficzna bryła została zaprojektowana z użyciem negatywnej przestrzeni i chęcią uszanowania istniejącego pałacu. Przestrzeń pomiędzy istniejącym budynkiem a budynkiem proponowanym utworzyła wewnętrzny plac. Parter budynku ‘Sigma’ oraz cały budynek ‘Pi’ (istniejący Pałac) spełniają funkcje użytkowe, pozostałe piętra nowego budynku spełniają funkcję mieszkalną. Dzięki zwiększeniu powierzchni elewacji mieszkania otrzymały dodatkowe przeszklenia. Pomimo małej działki zaproponowano dużą powierzchnię biologicznie czynną, ogród na parterze oraz zielony dach. Dzięki temu budynek reguluje temperaturę otoczenia oraz pochłaniają wodę deszczową. ",
    descriptionEn:
      " The building was designed on a difficult, narrow plot with an existing palace. Unique shape derived from the use of negative space and the desire to respect the existing palace. The space between the existing building and the proposed building formed an internal plaza. Ground floor of the 'Sigma' building and the entire 'Pi' building (the existing Palace) have utility functions, the remaining floors of the new building fulfill residential functions. Thanks to the increase in the surface of the façade, the apartments received additional glazing. Despite the small plot, a large biologically active area, a garden on the ground floor and a green roof were proposed. Thanks to this, the building regulates the ambient temperature and absorbs rainwater.    ",
    img1: "https://drive.google.com/uc?export=view&id=1cWtfff0sJqDA1nJqIYCrcYVj1Snl1Dpj",
    img2: "https://drive.google.com/uc?export=view&id=1MLCH8kHFMHr7c0fJEY4-j0gPqc9Rpcv3",
    img3: "https://drive.google.com/uc?export=view&id=",
  },
  {
    title: "Krynica-zdrój",
    design: "CHD architekci i Idea Development",
    date: "2022",
    description: "Głównym celem przy reiwtalizacji Willi Złocień było zminimalizowanie ilości energii cieplnej, którą zużywa się na ogrzewanie Willi. W tym celu stosowane są nie tylko nowoczesne technologie, ale również specjalne techniki budownictwa, które pozwalają na minimalizację traconej energii przez budynek. Zadbano o utrzymanie zabytkowego wyglądu willi z jednoczesną zamianą budynku na budynek energooszczęny.",
    img1: "https://drive.google.com/uc?export=view&id=1aVlbgXYCUgibAruMIrAoohnZJot-j5-6",
    img2: "https://drive.google.com/uc?export=view&id=1rp5rmb-RcP3O4tDY21CUBOBobzxchFX0",
    img3: "https://drive.google.com/uc?export=view&id=",
  },
  {
    title: "Dom prefabrykowany, Krosno",
    design: "CHD architekci",
    date: "2021",
    description: "Dom prefabrykowany",
    img1: "https://drive.google.com/uc?export=view&id=1yMUFbHEo95Fc2BnURrZS7PG0aAthbt_3",
    img2: "https://drive.google.com/uc?export=view&id=1Q2iBCQ0Jk4mgNVysn881WaB-tiYOrnlK",
    img3: "https://drive.google.com/uc?export=view&id=",
  },
  {
    title: "Południe Polski",
    design: "CHD architekci",
    date: "2019",
    description: "Rewitalizacja istniejacego obiektu wraz z zagospodarowaniem terenu.",
    img1: "https://drive.google.com/uc?export=view&id=1sph9w0jBEJ1MenMVkTWDWJkIhJCsgs4d",
    img2: "https://drive.google.com/uc?export=view&id=1fIdAOI4idppH0_rz1EjqLGCZrdR9OpyH",
    img3: "https://drive.google.com/uc?export=view&id=1MfdCM5DFYoX2LN4q5GA2vmTQlOnieUYq",
  },
];
const Designs = [
  {
    title: "Elewacja Grand Hotel",
    design: "CHD architekci",
    date: "12/12/12",
    description: "Projekt Oświetlenia Elewacji Grand Hotelu",
    img1: "https://drive.google.com/uc?export=view&id=1HG278GpRWlukcd6Qshk69hzMOLfvLVIr",
    img2: "https://drive.google.com/uc?export=view&id=1-uBUnqFbd-b5l6tpkuXJEN7EKtVRn-oZ",
    img3: "https://drive.google.com/uc?export=view&id=",
  },
  {
    title: "Domy prefabrykowane",
    design: "CHD architekci ",
    date: "12/02/21",
    description:
      "Tak jak zmiana sposobu wytwarzania dóbr w innych branżach usprawniła produkcyjność, tak w czasach wysokich kosztów tzw. robocizny i częstych błędów wykonawczych prefabrykacja wydaje się być przyszłością budownictwa. Przygotowanie prefabrykatów redukuje ilość odpadów, poprawia dokładność i pozwala na zaimplementowanie ambitnych projektów i nowoczesnych rozwiązań technologicznych. Uważamy, że prefabrykacja jest najlepszym rozwiązaniem kryzysu mieszkaniowego w Polsce.",
    img1: "https://drive.google.com/uc?export=view&id=1kivcVPFeSaUD7TF2g07ocVWQ41dxtyvq",
    img2: "https://drive.google.com/uc?export=view&id=1SYMJ93N8F1B-aqNLhrjSjkQ-b6HF3Smm",
    img3: "https://drive.google.com/uc?export=view&id=",
  },
  {
    title: "Domy prefabrykowane2",
    design: "CHD architekci",
    date: "12/02/21",
    description:
      "Tak jak zmiana sposobu wytwarzania dóbr w innych branżach usprawniła produkcyjność, tak w czasach wysokich kosztów tzw. robocizny i częstych błędów wykonawczych prefabrykacja wydaje się być przyszłością budownictwa. Przygotowanie prefabrykatów redukuje ilość odpadów, poprawia dokładność i pozwala na zaimplementowanie ambitnych projektów i nowoczesnych rozwiązań technologicznych. Uważamy, że prefabrykacja jest najlepszym rozwiązaniem kryzysu mieszkaniowego w Polsce.",
    img1: "https://drive.google.com/uc?export=view&id=1Cx0KRmBEbvvZgA7yrUN73HGVxp6lhzOp",
    img2: "https://drive.google.com/uc?export=view&id=1yvVd9P6cjIYPjV5YrQEi_h1B09_RDr9n",
    img3: "https://drive.google.com/uc?export=view&id=",
  },
  {
    title: "Domy prefabrykowane3",
    design: "CHD architekci ",
    date: "12/02/21",
    description:
      "Tak jak zmiana sposobu wytwarzania dóbr w innych branżach usprawniła produkcyjność, tak w czasach wysokich kosztów tzw. robocizny i częstych błędów wykonawczych prefabrykacja wydaje się być przyszłością budownictwa. Przygotowanie prefabrykatów redukuje ilość odpadów, poprawia dokładność i pozwala na zaimplementowanie ambitnych projektów i nowoczesnych rozwiązań technologicznych. Uważamy, że prefabrykacja jest najlepszym rozwiązaniem kryzysu mieszkaniowego w Polsce.",
    img1: "https://drive.google.com/uc?export=view&id=19I7cCVLx9oVBtQlU0Y99HP78bO7pbiIU",
    img2: "https://drive.google.com/uc?export=view&id=13MGt8taDdqsgNU_NV5sKx7HtbwC2Zb_g",
    img3: "https://drive.google.com/uc?export=view&id=",
  },
  {
    title: "Szokła podstawoa, Krosno",
    design: "CHD architekci, Ruben Bardanaszwili, USŁUGI PROJEKTOWE I NADZÓR BUDOWLANY PIOTR NIKODY",
    date: "12/12/12",
    description: " ",
    img1: "https://drive.google.com/uc?export=view&id=1uGmxgo2Ph5DUKMbjkBxFvV9sjDG5HqNI",
    img2: "https://drive.google.com/uc?export=view&id=",
    img3: "https://drive.google.com/uc?export=view&id=",
  },
];
const Concept = [
  {
    title: "Newhaven, Place od dissapearance",
    design: "CHD architekci",
    date: "12/12/12",
    description: " ",
    img1: "https://drive.google.com/uc?export=view&id=171_7_suImHKZISrldKATiyhOEx1MABvo",
    img2: "https://drive.google.com/uc?export=view&id=1qjHTKziN2xMNXZv3J0K_88m0oqKFgw9W",
    img3: "https://drive.google.com/uc?export=view&id=",
  },
  {
    title: "East London, Organic development",
    design: "CHD architekci",
    date: "12/12/12",
    description: " ",
    img1: "https://drive.google.com/uc?export=view&id=1MnJT5n587AXwKnwZk4yuTA25BkSJtv90",
    img2: "https://drive.google.com/uc?export=view&id=1gDS7065EcFFHz4sTuVuNReXKlKUHuw3n",
    img3: "https://drive.google.com/uc?export=view&id=",
  },
  {
    title: "Kocepcje deweloperskie 1",
    design: "CHD architekci",
    date: "12/12/12",
    description: " ",
    img1: "https://drive.google.com/uc?export=view&id=1NH26e_tF2OxKPTqDm875iumkV9Zp95Se",
    img2: "https://drive.google.com/uc?export=view&id=1dWbkx0t2-Wrp8cXS3jrpUHsMrQ0M4QUZ",
    img3: "https://drive.google.com/uc?export=view&id=",
  },
  {
    title: "Kocepcje deweloperskie 2",
    design: "CHD architekci",
    date: "12/12/12",
    description: " ",
    img1: "https://drive.google.com/uc?export=view&id=1r-el2OPyGnunWBaU6OqdhShV5aGmieBz",
    img2: "https://drive.google.com/uc?export=view&id=1qqEsUj4yvrbkIq17s7XTIC5MlelpWEv_",
    img3: "https://drive.google.com/uc?export=view&id=",
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
          <Tab label="realizacje" {...a11yProps(0)} />
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
                        {/* <MoreVertIcon /> */}
                      </IconButton>
                    }
                    title={Realised.title}
                    subheader={Realised.date}
                  />
                   <Typography variant="body2" color="text.secondary">
                    
                      
                      {Realised.design}
                      <br/>
                      <br/>
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

                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                  </CardActions>
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

                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                  </CardActions>
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

                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </TabPanel>
    </Box>
  );
}
