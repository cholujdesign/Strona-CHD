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
const Designs = [
  {
    title: "Eliptical Duplex Stair",
    design: "CHD architekci - projekt wkonawczy",
    date: "12/01/2023",
    description: " ",
    img1: "https://drive.google.com/uc?export=view&id=17N1LBs2JmkJeBQaIlqe0h70nSqZlcuAL",
    img2: "https://drive.google.com/uc?export=view&id=1Nza7P2ZH7XkXzJa2DbchOYPSHhlgQ9XX",
    img3: "https://drive.google.com/uc?export=view&id=",
  },
  {
    title: "Mieszkanie Kraków a23",
    design: "CHD architekci - projekt wkonawczy  i koncepcyjny",
    date: "21/12/2022",
    description: " ",
    img1: "https://drive.google.com/uc?export=view&id=1udwruADuCuz-fxYcsRjF69TC-OxrT3Kx",
    img2: "https://drive.google.com/uc?export=view&id=1BJ_6OQt0EQOSnyPlabHj6UdhonvraOLf",
    img3: "https://drive.google.com/uc?export=view&id=",
  },
  {
    title: "Willa Wieliczka",
    design: "CHD architekci",
    date: "01/12/18",
    description: "Kompleksowy projekt architektoniczno-wnętrzarski willi wraz zagospodarowaniem terenu",
    img1: "https://drive.google.com/uc?export=view&id=1cdFjMeNyNYG2KpAHd2EET4Dhu1990q-l",
    img2: "https://drive.google.com/uc?export=view&id=1sJjUbPv6ipJW2G0WhRewcXxj4FuWfPCW",
    img3: "https://drive.google.com/uc?export=view&id=",
  },
  {
    title: "Mieszkanie ds3456 ",
    design: "CHD architekci",
    date: "12/02/17",
    description: " ",
    img1: "https://drive.google.com/uc?export=view&id=1Akma9JRTXWBcrBpMjny89OB4PeFAgcqA",
    img2: "https://drive.google.com/uc?export=view&id=1GOFdtbnVtzZ3D-762e2bKTqQLKrS1LrF",
    img3: "https://drive.google.com/uc?export=view&id=",
  },
  // {
  //   title: "KAzik",
  //   design: "CHD architekci",
  //   date: "12/12/12",
  //   description: " ",
  //   img1: "https://drive.google.com/uc?export=view&id=",
  //   img2: "https://drive.google.com/uc?export=view&id=",
  //   img3: "https://drive.google.com/uc?export=view&id=",
  // },
];
const Concept = [
  {
    title: "Rako3",
    design: "CHD architekci",
    date: "12/12/12",
    description: " ",
    img1: "https://drive.google.com/uc?export=view&id=1MATtIbQKi_FmvxQ74NQAR0ArTqaSQ4fg",
    img2: "https://drive.google.com/uc?export=view&id=1FhPY8QpHING1TgNeQclFx_KLB-gcQsO5",
    img3: "https://drive.google.com/uc?export=view&id=",
  },
  {
    title: "Rako2",
    design: "CHD architekci",
    date: "12/12/12",
    description: " ",
    img1: "https://drive.google.com/uc?export=view&id=1-4oy0Og3dZgQCbFZClgWz_Qc4lXfzEmF",
    img2: "https://drive.google.com/uc?export=view&id=1Ft1TuzyV4KUlo-VfCCVYnX_OHob3fQyb",
    img3: "https://drive.google.com/uc?export=view&id=",
  },
  {
    title: "Rako1",
    design: "CHD architekci",
    date: "12/12/12",
    description: " ",
    img1: "https://drive.google.com/uc?export=view&id=1ALMh5ghHY627wna3c7xwaLgE1l59wMUX",
    img2: "https://drive.google.com/uc?export=view&id=1Zv66QLSUEOUl23VNUEPJm8i1SxTboktJ",
    img3: "https://drive.google.com/uc?export=view&id=",
  },  
  {
    title: "Ryn1",
    design: "CHD architekci",
    date: "12/12/12",
    description: " ",
    img1: "https://drive.google.com/uc?export=view&id=1lR3OiI8rME_ORGipI2ZxQhfjw9xGKh2d",
    img2: "https://drive.google.com/uc?export=view&id=1CCxNbbzX4sVc-I3A31l34GCKxeQXgzzX",
    img3: "https://drive.google.com/uc?export=view&id=",
  },
  {
    title: "Ryn2",
    design: "CHD architekci",
    date: "12/12/12",
    description: " ",
    img1: "https://drive.google.com/uc?export=view&id=1gdaK3ti_dyS3qN7p1Kuw0dB5EtBmJlai",
    img2: "https://drive.google.com/uc?export=view&id=1imkCqW7UlggBhH_G6S51r8q5C7lTP6W0",
    img3: "https://drive.google.com/uc?export=view&id=",
  },
  {
    title: "Ryn3",
    design: "CHD architekci",
    date: "12/12/12",
    description: " ",
    img1: "https://drive.google.com/uc?export=view&id=1lAhP2xAYcW0rGyfhAUqWaPX59Z98Z0UZ",
    img2: "https://drive.google.com/uc?export=view&id=1Tkeneydq6hJBUQrhYCog1ofoihyeG58p",
    img3: "https://drive.google.com/uc?export=view&id=",
  },
  {
    title: "Ryn4",
    design: "CHD architekci",
    date: "12/12/12",
    description: " ",
    img1: "https://drive.google.com/uc?export=view&id=16JzT6SfN64wG8odqx4dHyN0ViQU7XHuN",
    img2: "https://drive.google.com/uc?export=view&id=1Zkopr96l85QidL3SWsgtmj3H-h7sv5vL",
    img3: "https://drive.google.com/uc?export=view&id=",
  },
  {
    title: "Ryn5",
    design: "CHD architekci",
    date: "12/12/12",
    description: " ",
    img1: "https://drive.google.com/uc?export=view&id=15igGLnDQzfjihHyhyERCA3w5HijXCjDf",
    img2: "https://drive.google.com/uc?export=view&id=1gnchshJvyd0YFaRew-y2HVNsc00f-gXW",
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
                    subheader={Realised.date}
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
            {Designs.map((Designs) => (
              <Grid data-aos="zoom-in" item key={Designs.title} xs={12} lg={12}>
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
