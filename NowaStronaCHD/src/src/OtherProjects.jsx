import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from "@mui/material/Container";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { grey } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled } from '@mui/material/styles';
import AOS from 'aos';
import "aos/dist/aos.css";

const Realised = [
    { title: 'projekt 123', design:'CHD architekci', date: '12/12/12', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', img1:'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80', img2:'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80', img3:'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' },
    { title: 'projekt 123', design:'CHD architekci', date: '12/12/12', description: 'opis opis opis', 
    img1:'https://lh3.googleusercontent.com/6vKZgdVs1m9FcuAenX-YOKf0nJYdlzGMfcYqt0TZS1j09T5NCpu0NlAJnDBQ1wRNRdtvtHSdFR5erTfBZ-pEBtjPmM7sF3P0qG0GeRZeUPkxPEX48zx8S-MAqOEhuj8amfmm4tXrRgilVpo-jD7OWl0aXxLNdWeDqAdzJl0xFKnWOxbPoY6k5ezQUX7VM0Wdtmpf334cD9bVQ9cqRbhhYUvT90mBJLWsd0gbYY3MpMsDmbgJebmXoq7aWHh0UytDN6A_GK2DALvh4nekTcjbTvadfCfsoh4dbyhXis5ExXOhbMpVAfrAXVs6ASopjnggEnAneINeVcEAB3-KEl3a8bRnmtkrgO43JRbsWI3iBs-XBXEdKStEdKbDwiwJ0sjePnD3D7YYQuRTAJsnvDrtgD5PCo7I5l1o-u3jm7SWXSSZGRowI3fXn95RWbdAzE0v_bGNRx1t9fh9mcLpnfHos0QbUEE1JR0RxXvzpXg4SdN2gG30ZyoNEy8GwkMYx3D7408fFOpIuz-XbkcJ8TMa9v9hYr1pvgKhFZK2MOzMfCOaTWwfybeYNeZQauYHvqoJC6iTeWR6OzU3IB6IFrJctmEXdC00F42S5xlnIe6NPGKGGSLEh-bKGx1GNJXZef6a3ugBW-virldSe2gjwfCntszEfz2H7SNejUFzjuB23HBXiumOvkjHccWuBTJXZQtE7nkBIu6MBxYyk-srtIhclCMaLDkEOswJELvt2TStybne34o5JY6N_SKKNKIuQF_z96iU-fXSc8yONoROTXJMEeSbVCLkLJ2Zr5b1fdfG8m8STwZLuFPtlCwb53Msb94EKXtPojRr96MtW9dZmEO8ijZpUqOZzv1MUlG2utU4y8-N5vQZMRGG-xB944UuGLdFdUdGQWoknDrCiDCdcgk6elJ7dW99cYxCXzr1CWMtpmbFIwtDqpKsPe8jPjugddH04lU-J7Ntglfa3vEh5oz3Ioj3RHQC80DkgQzXQeJcm2xw1lwCS_9_rRZp0qclAO2I63map9FDt3wE0EiRgqaa-isVaQ=w1082-h1528-no?authuser=0', img2:'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80', img3:'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' },
    { title: 'projekt 123', design:'CHD architekci', date: '12/12/12', description: 'opis opis opis', img1:'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80', img2:'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80', img3:'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' },
   
  ];
  const Designs = [
    { title: '', design:'CHD architekci', date: '12/12/12', description: 'opis opis opis', img1:'https://lh3.googleusercontent.com/SFw2E7O0JkZeLSOTYZbktsTAaDlnNrtRliUREfkzpfsiwPEaVQxbrsDUPQy7jTFfBM4=w2400', img2:'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80', img3:'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' },
    { title: 'projekt 123', design:'CHD architekci', date: '12/12/12', description: 'opis opis opis', img1:'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80', img2:'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80', img3:'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' },
    { title: 'projekt 123', design:'CHD architekci', date: '12/12/12', description: 'opis opis opis', img1:'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80', img2:'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80', img3:'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' },
  ];
  const Concept = [
    { title: 'MadejPak', design:'CHD architekci', date: '12/12/12', description: 'opis opis opis', img1:'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80', img2:'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80', img3:'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' },
    { title: 'Paciorek Wykończenia', design:'CHD architekci', date: '12/12/12', description: 'opis opis opis', img1:'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80', img2:'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80', img3:'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' },
    { title: 'Hraulik', design:'CHD architekci', date: '12/12/12', description: 'opis opis opis', img1:'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80', img2:'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80', img3:'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' },
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
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
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
      duration : 1000
    });
  }, []);
  return (
    <Box bgcolor="white" sx={{ width: '100%', pt: 8, pb: 6 }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} centered aria-label="basic tabs example">
          <Tab label="3D" {...a11yProps(0)} />
          <Tab label="CGI" {...a11yProps(1)} />
          <Tab label="WWW" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
          <Container alignItems="center" maxWidth="md">
      <Grid container spacing={5} >
          {Realised.map((Realised) => (
            <Grid
            data-aos="zoom-in"
              item
              key={Realised.title}
              xs={12}
              md={12}
            >
             <Card >
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
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        {Realised.description}
        </Typography></CardContent>
        <CardMedia
        component="img"
        loading="lazy"
        height="auto"
        image={Realised.img2}
        alt="Paella dish"
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
      <Grid container spacing={5} >
          {Designs.map((Designs) => (
            <Grid
            data-aos="zoom-in"
              item
              key={Designs.title}
              xs={12}
              md={12}
            >
             <Card >
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
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        {Designs.description}
        </Typography></CardContent>
        <CardMedia
        component="img"
        loading="lazy"
        height="auto"
        image={Designs.img2}
        alt="Paella dish"
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
      <Grid container spacing={5} >
          {Concept.map((Concept) => (
            <Grid
            data-aos="zoom-in"
              item
              key={Concept.title}
              xs={12}
              md={12}
            >
             <Card >
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
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        {Concept.description}
        </Typography></CardContent>
        <CardMedia
        component="img"
        loading="lazy"
        height="auto"
        image={Concept.img2}
        alt="Paella dish"
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