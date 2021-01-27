import React, { Component } from "react";
import Years from "../components/Years/Years";
import Missions from "../components/Missions/Missions";
import classes from './MissionsSpaceX.module.scss';
import { Route } from "react-router";

class MissionSpaceX extends Component {
state = {
    missions: []
};
render() {
    return (
        <>
        <div className={classes.MissionContainer}>
        <div>
          <Years />
        </div>
        <div>
          <Route path='/missions' render={(props) => <Missions {...props} missions={this.state.missions}/>}/>
        </div>
      </div>
        </>
    );
  }
}

export default MissionSpaceX;
