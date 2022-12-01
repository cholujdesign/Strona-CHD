import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Container from "@mui/material/Container";

const Individual = [
    { title: 'item1', description: 'opis opis opis' },
    { title: 'item1', description: 'opis opis opis' },
    { title: 'item1', description: 'opis opis opis' },
    { title: 'item1', description: 'opis opis opis' },
    { title: 'item1', description: 'opis opis opis' },
    { title: 'item1', description: 'opis opis opis' },
    { title: 'item1', description: 'opis opis opis' }
  ];
  const Business = [
    { title: 'item2', description: 'opis opis opis' },
    { title: 'item2', description: 'opis opis opis' },
    { title: 'item2', description: 'opis opis opis' },
    { title: 'item2', description: 'opis opis opis' },
    { title: 'item2', description: 'opis opis opis' },
    { title: 'item2', description: 'opis opis opis' },
    { title: 'item2', description: 'opis opis opis' }
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

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box bgcolor="white" sx={{ width: '100%', pt: 8, pb: 6 }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} centered aria-label="basic tabs example">
          <Tab label="Klienci Indywidualni" {...a11yProps(0)} />
          <Tab label="Klienci Biznesowi" {...a11yProps(1)} />
  
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
          <Container alignItems="center" maxWidth="md">
      <Grid container spacing={5} >
          {Individual.map((Individual) => (
            <Grid
              item
              key={Individual.title}
              xs={12}
              md={6}
            >
              <Card>
                <CardHeader
                  
                  title={Individual.title}
                  subheader={Individual.description}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.primary.light
                        : theme.palette.primary.light,
                  }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
        </Container>
      </TabPanel>
      <TabPanel value={value} index={1}> <Container alignItems="center" maxWidth="md">
      <Grid container spacing={5} alignItems="">
          {Business.map((Business) => (
            <Grid
              item
              key={Business.title}
              xs={12}
              md={6}
            >
              <Card>
                <CardHeader
                
                  title={Business.title}
                  subheader={Business.description}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                    ? theme.palette.primary.light
                    : theme.palette.primary.light,
              }}
            
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