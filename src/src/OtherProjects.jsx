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
    title: "projekt 123",
    design: "CHD architekci",
    date: "12/12/12",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    img1: "https://www.youtube.com/embed/hK5KNA8GiBQ",
  },
  {
    title: "projekt 123",
    design: "CHD architekci",
    date: "12/12/12",
    description: " ",
    img1: "https://www.youtube.com/embed/JUuRMNtIT7o",
  },
  {
    title: "projekt 123",
    design: "CHD architekci",
    date: "12/12/12",
    description: " ",
    img1: "https://www.youtube.com/embed/KmEPozphMVU",
  },
];
const Designs = [
  {
    title: "",
    design: "CHD architekci",
    date: "12/12/12",
    description: " ",
    img1: "https://www.youtube.com/embed/hK5KNA8GiBQ",
  },
  {
    title: "projekt 123",
    design: "CHD architekci",
    date: "12/12/12",
    description: " ",
    img1: "https://www.youtube.com/embed/v8f9e9BM33I",
  },
  {
    title: "projekt 123",
    design: "CHD architekci",
    date: "12/12/12",
    description: " ",
    img1: "https://www.youtube.com/embed/ndNZSfyNUcY",
  },
];
const Concept = [
  {
    title: "MadejPak",
    design: "CHD architekci",
    date: "12/12/12",
    description: " ",
    img1: "https://madejpak.pl/",
    img2: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    img3: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  },
  {
    title: "Paciorek Wykończenia",
    design: "CHD architekci",
    date: "12/12/12",
    description: " ",
    img1: "https://remontypaciorek.com/",
    img2: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    img3: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  },
  {
    title: "Willa Złocień",
    design: "CHD architekci",
    date: "12/12/12",
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
                  <Iframe
                    url={Realised.img1}
                    width="100%"
                    height="600px"
                    id={Realised.img1}
                    className="myClassname"
                    frameBorder="0"
                   
                    title="Embedded youtube"
                    display="initial"
                    position="relative"
                  />{" "}
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {Realised.description}
                    </Typography>
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
                    id={Designs.img1}
                    className="myClassname"
                    frameBorder="0"
                   
                    title="Embedded youtube"
                    display="initial"
                    position="relative"
                  />{" "}
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {Designs.description}
                    </Typography>
                  </CardContent>
                  
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
