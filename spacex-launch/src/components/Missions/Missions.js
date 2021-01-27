import React, { useState, useEffect } from "react";
import classes from "./Missions.module.scss";
import axios from "axios";
import Spinner from "../Spinner/Spinner";

const Missions = (props) => {
  const [missions, setMission] = useState(null);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const loadMissions = (isQuery) => {
        const limitUrl = isQuery ? "&" : "?";
        setLoading(true);
        axios
          .get(
            "https://api.spacexdata.com/v3/launches" +
              props.location.search +
              limitUrl +
              "limit=100"
          )
          .then((res) => {
            setMission(res.data);
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
            setMission(null);
            setLoading(false);
          });
      };
    loadMissions(props.location.search);
  }, [props.location.search]);
  

  let mission_card = null;
  if (missions) {
    mission_card = missions.map((mission) => {
      const mapMissionIds = mission.mission_id.map((id) => {
        return <li key={id}>{id}</li>;
      });
      return (
        <li className={classes.mainList} key={mission.mission_name}>
          <img
            src={mission.links.mission_patch}
            alt="Person"
            className={classes.card__image}
          />
          <div className={classes.alignContents}>
            <p className={classes.card__name}>
              <b>
                {mission.mission_name}#{mission.flight_number}
              </b>
            </p>
            <p>
              <b>Mission Ids:</b>
            </p>
            <ul>{mapMissionIds}</ul>
            <p>
              <b>Launch Year:</b> {mission.launch_year}
            </p>
            <p>
              <b>Successsful Launch:</b> {mission.launch_success + ""}
            </p>
            <p>
              <b>Successful Landing:</b>{" "}
              {mission?.rocket?.first_stage?.cores[0]?.land_success + ""}
            </p>
          </div>
        </li>
      );
    });
  }
  let spinner = null;
  if (isLoading) {
    spinner = <Spinner />;
  }
  return (
    <>
      {spinner}
      <ul className={classes.Missions}>{mission_card}</ul>
    </>
  );
};

export default Missions;
