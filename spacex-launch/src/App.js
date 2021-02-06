import React, { Component } from "react";
import MissionSpaceX from "./container/MissionsSpaceX";
import { BrowserRouter } from "react-router-dom";
import classes from './App.module.scss';
import { Helmet } from 'react-helmet'

const TITLE = 'Project_SpaceX'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Helmet>
          <title>{ TITLE }</title>
      </Helmet>
      <header>
      <h2 className={classes.title}>SpaceX Launch Programs</h2>
      </header>
      <main>
      <MissionSpaceX/>
      </main>
      <footer className={classes.footer}>
        Developed by: Anmol Aditya Sinha
      </footer>
      </BrowserRouter>
    )
  }
}

export default App;
