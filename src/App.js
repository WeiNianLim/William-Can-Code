import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from './Home.jsx'
import About from './About.jsx'
import Projects from './Projects.jsx'

export default class App extends Component {
  render(){
    return(
      <Switch>
        <Route path={`${process.env.PUBLIC_URL}/`} exact render={
            reactProps => 
              <Home />
        }/>
        <Route path={`${process.env.PUBLIC_URL}/about`} render={
            reactProps => 
              <About />
        }/>
        <Route path={`${process.env.PUBLIC_URL}/projects`} render={
            reactProps => 
              <Projects />
        }/>

      </Switch>
    )
  }
}

