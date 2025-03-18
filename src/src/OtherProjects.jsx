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
import Iframe from "react-iframe";
import { Helmet } from "react-helmet";
const Realised = [
  {
    title: "Szczegółowy model 3d schodów w USA",
    design: "CHD architekci",
    date: " ",
    description:"Na podstawie dokumentacji projektowej, szkiców projektanta i modelu budynku wykonaliśmy bardzo szczegółowy model 3d schodów, paneli ściennych, balustrady i innych elementów. Mdoel został wykonany w Rhino 3D i wyeksportowany do programu Revit. ",
   
    img1: "/images/ben/sycamore model 1.webp",
    img2: "/images/ben/sycamore model 2.webp",
  },
  {
    title: "Elewacja kamienicy Manhattan",
    design: "CHD architekci",
    date: " ",
    description:"Na podstawie dokumentacji skanu 3D wykonaliśmy bardzo szczegółowy model 3d isntniejącej elewacji  zabytkowego budynku w Nowym Jorku. ",
    img1: "/images/ben/nycelewacja1.webp",
    img2: "/images/ben/nycelewacja2.webp",
  },
  {
    title: "Elewacja Grand Hotel",
    design: "CHD architekci",
    date: " ",
    description: "Na podtawie własnej inwentaryzacji wykoanliśmy model 3d elewacji hotelu w programie ArchiCad.",
    img1: "/images/grand1.webp",
  },
];
const Designs = [
  {
    title: "",
    design: "CHD architekci",
    date: " ",
    description: " ",
    img1: "https://www.youtube.com/embed/cCwqpy8ra7w",
  },
 
];
const Concept = [
  {
    title: "MadejPak",
    design: "CHD architekci",
    date: "",
    description: " ",
    img1: "https://madejpak.pl/",
    img2: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    img3: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  },
  {
    title: "KMT Legal",
    design: "CHD architekci",
    date: "",
    description: " ",
    img1: "https://kmtlegal.pl/",
    img2: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    img3: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  },
  {
    title: "Willa Złocień",
    design: "CHD architekci",
    date: "",
    description: " ",
    img1: "https://willzazlocien.netlify.app/",
    img2: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    img3: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
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
          <Tab label="3D" {...a11yProps(0)} />
          <Tab label="CGI" {...a11yProps(1)} />
          <Tab label="WWW" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Container alignItems="center" maxWidth="md">
          <Grid container spacing={5}>
            {Realised.map((Realised) => (
              <Grid
                
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
                <img src={Realised.img1} width={"100%"}/>
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {Realised.description}
                    </Typography>
                    <img src={Realised.img2} width={"100%"}/>
                  </CardContent>
                  
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
              <Grid  item key={Designs.title} xs={12} md={12}>
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
                  
                  <Iframe
                    url={Designs.img1}
                    width="100%"
                    height="600px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative"
                  />{" "}
                  
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
                  <Iframe
                    url={Concept.img1}
                    width="100%"
                    height="600px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative"
                  />{" "}
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {Concept.description}
                    </Typography>
                  </CardContent>
                  
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </TabPanel>
    </Box>
  );
}
