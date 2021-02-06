import React, { Component } from "react";
import Years from "../components/Years/Years";
import Missions from "../components/Missions/Missions";
import classes from "./MissionsSpaceX.module.scss";
import { Route, Switch, Redirect } from "react-router";

class MissionSpaceX extends Component {
  render() {
    return (
      <>
        <div className={classes.MissionContainer}>
          <div>
            <Years />
          </div>
          <div>
            <Switch>
              <Route
                path="/missions"
                component={Missions}
              />
              <Redirect from="/" to="/missions"></Redirect>
            </Switch>
          </div>
        </div>
      </>
    );
  }
}

export default MissionSpaceX;
