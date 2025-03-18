import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Grid from "@mui/material/Grid";
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import GTranslateIcon from "@mui/icons-material/GTranslate";

const pages = ["About", "Offer","Modelling",  "Apartments", "Contact"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" color="secondary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Button
            variant="outlined"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
            }}
          >
            <Typography
              variant="h6"
              
              component="a"
              href="/"
              sx={{
                mr: 1,
                display: { xs: "none", md: "flex" },
                // fontFamily: "monospace",
                fontWeight: 80,
                // letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              CHD
              <br />
              Architects 
            </Typography>
          </Button>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    href={page}
                    sx={{ my: 0.5, color: "black", display: "flex" }}
                  >
                    {page}
                  </Button>
                </MenuItem>
              ))}
              <MenuItem key="as" onClick={handleCloseNavMenu}>
              <Button
                    key="as"
                    onClick={handleCloseNavMenu}
                    href="/CHD"
                    sx={{ my: 0.5, color: "black", display: "flex" }}
                  >
                     Pl/En
                  </Button></MenuItem>
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/Home"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            CHD
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <Button
                startIcon={<CallIcon />}
                  href="tel:+48509446704"
                  sx={{ my: 0.5, color: "white", display: "flex" }}
                  
                >
                  Phone +48 509 446 704
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button
                startIcon={<EmailIcon />}
                  href="mailto:biuro@cholujdesign.pl"
                  sx={{ my: 0.5, color: "white", display: "flex" }}
                >
                  biuro@cholujdesign.pl
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button
                startIcon={<LocationOnIcon />}
                  href="https://goo.gl/maps/CfisLfUTRzM1tD6fA"
                  sx={{ my: 0.5, color: "white", display: "flex" }}
                >
                  Rynek Glowny 43, Krakow
                </Button>
              </Grid>
              {pages.map((page) => (
                <Grid item xs={2}>
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    href={page}
                    sx={{ my: 0.5, color: "white", display: "flex" }}
                  >
                    {page}
                  </Button>
                </Grid>
              ))}
               <MenuItem key="as" onClick={handleCloseNavMenu}>
              <Button
                    key="as"
                    onClick={handleCloseNavMenu}
                    href="/CHD"
                    sx={{ my: 0.5, color: "white", display: "flex" }}
                  >
                     Pl/En
                  </Button></MenuItem>
            </Grid>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
