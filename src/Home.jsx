import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import Grid from "@material-ui/core/Grid";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  app: {
    maxWidth: 1140,
    margin: "0 auto",
    padding: "0 50px",
    [theme.breakpoints.down("md")]: {
      padding: "0 35px"
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0 20px"
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0 10px"
    }
  },
  appBar: {
    backgroundColor: "transparent",
    boxShadow: "none"
  },
  navButton: {
    color: "#ccd0d5",
    "&:hover": {
      color: "#377dff",
      backgroundColor: "transparent"
    }
  },
  introDivider: {
    height: 5,
    width: 60,
    // backgroundColor: "#eaf2ff"377dff,
    backgroundColor: "#377dff",
    margin: "30px 0"
  },
  divider: {
    margin: "15px 0"
  }
});

class Home extends Component {
  state = {
    open: false
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, width } = this.props;
    const url = window.location.href;
    return (
      <div className={classes.app}>
        <AppBar position="static" className={classes.appBar}>
          {isWidthUp("sm", width) ? (
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item>
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                >
                  <Grid item>
                    <Avatar
                      alt="Will Header"
                      src={
                        url == "http://localhost:3000/"
                          ? "/images/profile.jpg"
                          : "https://weinianlim.github.io/William-Can-Code/images/profile.jpg"
                      }
                      style={{ margin: "10px" }}
                    />
                  </Grid>
                  <Grid item />
                  {/* <Typography variant="h4">I'm Will</Typography> */}
                </Grid>
              </Grid>
              <Grid item>
                <Grid
                  container
                  direction="row"
                  justify="flex-end"
                  alignItems="center"
                >
                  <Grid item>
                    <Button className={classes.navButton}>Projects</Button>
                  </Grid>
                  <Grid item>
                    <Button className={classes.navButton}>About</Button>
                  </Grid>
                  <Grid item>
                    <Button className={classes.navButton}>Contact Me</Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          ) : (
            <Toolbar>
              <Grid item>
                <Grid
                  container
                  direction="row"
                  justify="flex-end"
                  alignItems="center"
                >
                  <Grid item>
                    <IconButton onClick={this.handleDrawerOpen}>
                      <MenuIcon />
                    </IconButton>
                  </Grid>
                  <Grid item align="center">
                    <Grid
                      container
                      direction="row"
                      justify="space-between"
                      alignItems="center"
                    >
                      <Grid item>
                        <Avatar
                          alt="Will Header"
                          src={
                            url == "http://localhost:3000/"
                              ? "/images/profile.jpg"
                              : "https://weinianlim.github.io/William-Can-Code/images/profile.jpg"
                          }
                          style={{ margin: "10px" }}
                        />
                      </Grid>
                      <Grid item />
                      <Typography variant="h4">I'm Will</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Toolbar>
          )}
        </AppBar>
        <Drawer open={this.state.open} onClose={this.handleDrawerClose}>
          <List>
            <ListItem>Projects</ListItem>
            <ListItem>About</ListItem>
            <ListItem>Contact Me</ListItem>
          </List>
        </Drawer>
        {isWidthUp("md", width) ? (
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item>
              <Typography
                variant="h1"
                style={{
                  color: "#377dff",
                  fontFamily: "Roboto",
                  fontWeight: "500"
                }}
              >
                Hi, I'm Will
              </Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
                style={{ color: "#798490", fontFamily: "Roboto Slab" }}
              >
                Designer {"&"} Developer
              </Typography>
              <Divider variant="fullWidth" className={classes.introDivider} />
              <Typography
                variant="h6"
                gutterBottom
                style={{ fontFamily: "Roboto" }}
              >
                Full Stack Developer at Porton Health
              </Typography>
            </Grid>
            <Grid item align="center">
              <img
                style={{
                  borderRadius: "10px",
                  height: "250px",
                  width: "250px"
                }}
                src={
                  url == "http://localhost:3000/"
                    ? "/images/profile.jpg"
                    : "https://weinianlim.github.io/William-Can-Code/images/profile.jpg"
                }
              />
            </Grid>
          </Grid>
        ) : (
          <Grid
            container
            direction="column"
            justify="space-around"
            alignItems="center"
          >
            <Grid item>
              <img
                style={{
                  borderRadius: "50%",
                  height: "150px",
                  width: "150px"
                }}
                alt="Avatar"
                src={
                  url == "http://localhost:3000/"
                    ? "/images/profile.jpg"
                    : "https://weinianlim.github.io/William-Can-Code/images/profile.jpg"
                }
              />
            </Grid>
            <Grid item>
              <Typography
                variant="h4"
                style={{
                  color: "#377dff",
                  fontFamily: "Roboto Condensed",
                  fontWeight: "500"
                }}
              >
                Hi, I'm Will
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle1"
                gutterBottom
                style={{ color: "#798490", fontFamily: "Roboto Slab" }}
              >
                Designer {"&"} Developer
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="h6"
                gutterBottom
                style={{ fontFamily: "Roboto" }}
              >
                Full Stack Developer at Porton Health
              </Typography>
            </Grid>
          </Grid>
        )}

        <Divider variant="middle" className={classes.divider} />
        <Grid container spacing={24}>
          <Grid item xs={12} sm={4}>
            <Paper
              elevation={2}
              style={{
                backgroundColor: "#377DFF",
                padding: "10px",
                height: "300px"
              }}
            >
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
              >
                <Grid item>
                  <i
                    class="im im-code"
                    style={{
                      color: "#EAF2FF",
                      fontSize: "96px",
                      marginTop: "10px"
                    }}
                  />
                </Grid>
                <Grid item>
                  <Typography
                    variant="h5"
                    style={{ color: "white", fontFamily: "Roboto Slab", fontWeight: "600" }}
                  >
                    Front-End Developer
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper
              elevation={2}
              style={{
                backgroundColor: "#DE4437",
                padding: "10px",
                height: "300px"
              }}
            >
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
              >
                <Grid item>
                  <i
                    class="im im-layer"
                    style={{
                      color: "#FCECEA",
                      fontSize: "96px",
                      marginTop: "10px"
                    }}
                  />
                </Grid>
                <Grid item>
                  <Typography
                    variant="h5"
                    style={{ color: "white", fontFamily: "Roboto Slab", fontWeight: "600" }}
                  >
                    Back-End Developer
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper
              elevation={2}
              style={{
                backgroundColor: "#00C9A7",
                padding: "10px",
                height: "300px"
              }}
            >
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
              >
                <Grid item>
                  <i
                    class="im im-android-os"
                    style={{
                      color: "#E5FAF6",
                      fontSize: "96px",
                      marginTop: "10px"
                    }}
                  />
                </Grid>
                <Grid item>
                  <Typography
                    variant="h5"
                    style={{ color: "white", fontFamily: "Roboto Slab", fontWeight: "600" }}
                  >
                    Android Developer
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withWidth()(withStyles(styles)(Home));
