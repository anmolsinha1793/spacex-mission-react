import React, { Component } from "react";
import MissionSpaceX from "./container/MissionsSpaceX";
import { BrowserRouter } from "react-router-dom";
import classes from './App.module.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
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
