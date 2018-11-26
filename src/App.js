import React, { Component } from 'react';
import './App.css';

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
    return (
      <div className="App">
        <div id="landingImg">
          <div id="layer">
            <AppBar position="absolute">
              <Toolbar>
                <IconButton onClick={this.handleDrawerOpen}>
                  <MenuIcon/>
                </IconButton>
              </Toolbar>
            </AppBar>
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

export default App;
