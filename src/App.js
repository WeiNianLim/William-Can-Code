import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from './Home.jsx'
import About from './About.jsx'
import Projects from './Projects.jsx'

export default class App extends Component {
  render(){
    return(
      <Switch>
        <Route path="/" exact render={
            reactProps => 
              <Home />
        }/>
        <Route path="/About" render={
            reactProps => 
              <About />
        }/>
        <Route path="/Projects" render={
            reactProps => 
              <Projects />
        }/>

      </Switch>
    )
  }
}

