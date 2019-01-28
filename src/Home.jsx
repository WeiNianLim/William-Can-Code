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

const styles = theme => ({
  app: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "0 50px",
    [theme.breakpoints.down('md')]: {
      padding: "0 35px"
    },
    [theme.breakpoints.down('sm')]: {
      padding: "0 20px"
    },
    [theme.breakpoints.down('xs')]: {
      padding: "0 10px"
    },
  },
  appBar: {
    backgroundColor: "transparent",
    boxShadow: "none"
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
                  <Typography variant="h4">I'm Will</Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Grid
                  container
                  direction="row"
                  justify="flex-end"
                  alignItems="center"
                >
                  <Grid item align="center">
                    <Button>Projects</Button>
                  </Grid>
                  <Grid item align="center">
                    <Button>About</Button>
                  </Grid>
                  <Grid item align="center">
                    <Button>Contact Me</Button>
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
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h3" gutterBottom>
              Hi, I'm Will. 
            </Typography>
            <Typography variant="h3" gutterBottom>
              Designer {"&"} Developer
            </Typography>
          </Grid>
          <Grid item align="center">
            <img
              style={{ height: "250px", width: "250px" }}
              src={
                url == "http://localhost:3000/"
                  ? "/images/profile.jpg"
                  : "https://weinianlim.github.io/William-Can-Code/images/profile.jpg"
              }
            />
          </Grid>
        </Grid>
        <Divider variant="middle" />
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withWidth()(withStyles(styles)(Home));

{
  /* <Grid container spacing={24}>
            <Grid item xs={1} align="center">
              <WhatshotIcon />
            </Grid>
            <Grid item xs />
            <Grid item xs={1} align="center">
              <Button color="inherit">Projects</Button>
            </Grid>
            <Grid item xs={1} align="center">
              <Button color="inherit">About</Button>
            </Grid>
            <Grid item xs={1} align="center">
              <Button color="inherit">Contact Me</Button>
            </Grid>
          </Grid> */
}
