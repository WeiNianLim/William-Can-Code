import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import Grid from '@material-ui/core/Grid';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

const styles = theme => ({
  appBar: {
    backgroundColor: "transparent",
    boxShadow: "none"
  },

  iconButton: {
    color: "white"
  }
})

class App extends Component {

  state = {
    open: false
  }

  handleDrawerOpen = () => {
    this.setState({ open : true})
  }

  handleDrawerClose = () => {
    this.setState({ open : false})
  }

  render() {
    const {classes, width} = this.props
    return (
      <div className="App">
        <div id="landingImg">
          <div id="layer">
            
              {
                width === 'md' || width === 'lg' || width === 'xl'
                ? <Grid container spacing={32} justify="space-evenly" style={{margin: "0"}}>
                    <Grid item style={{fontWeight: "900"}}>About</Grid>
                    <Grid item style={{fontWeight: "900"}}>Projects</Grid>
                    <Grid item style={{padding: "0", color: "white"}}><a href="#"><img src="/images/logo.png" style={{maxHeight : "100%", maxWidth: "100%"}}/></a></Grid>
                    <Grid item style={{fontWeight: "900"}}>Blog</Grid>
                    <Grid item style={{fontWeight: "900"}}>Contact Me</Grid>
                  </Grid>
                : <AppBar position="absolute" className={classes.appBar}>
                    <Toolbar>
                      <IconButton onClick={this.handleDrawerOpen} className={classes.iconButton}>
                        <MenuIcon/>
                      </IconButton>
                    </Toolbar>
                  </AppBar>
              }
            
            <Drawer open={this.state.open} onClose={this.handleDrawerClose}>
              <List>
                <ListItem>
                  About
                </ListItem>
                <ListItem>
                  Projects
                </ListItem>
                <ListItem>
                  Contact Me
                </ListItem>
              </List>
            </Drawer>
          </div>
         
        </div>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withWidth()(withStyles(styles)(App));
