import React, { useState } from "react";
import { ODD_YEARS, EVEN_YEARS } from "../../constants/Year.const";
import classes from "./Years.module.scss";
import { withRouter } from "react-router-dom";

const Years = (props) => {
const [launch_success, setLaunchSuccess] = useState(new URLSearchParams(props.location.search).get('launch_success'));
const [land_success, setLandSuccess] = useState(new URLSearchParams(props.location.search).get('land_success'));
const handleLaunchAndLandFilter = (value, key) => {
    const oldQuery = new URLSearchParams(props.location.search);
    value ? oldQuery.set(key, true) : oldQuery.delete(key);
    props.history.push({
        pathname: './missions',
        search: '?' + oldQuery.toString()
    });
    setLaunchSuccess(oldQuery.get('launch_success'));
    setLandSuccess(oldQuery.get('land_success'));
}
const handleDateFilter = (val) => {
    handleToggle(val.value);
    val.isActive = !val.isActive;
    const isActive = val.isActive;
    const oldQuery = new URLSearchParams(props.location.search);
    isActive ? oldQuery.set('launch_year', val.value) : oldQuery.delete('launch_year');
    props.history.push({
        pathname: './missions',
        search: '?' + oldQuery.toString()
    });
}
const handleToggle = (year) => {
    EVEN_YEARS.forEach((val) => {
        if(val.value !== year){
            val.isActive = false;
        }
    });
    ODD_YEARS.forEach((val) => {
        if(val.value !== year){
            val.isActive = false;
        }
    });
}
  const oddYears = ODD_YEARS.map((val) => {
    const launchYear = new URLSearchParams(props.location.search).get('launch_year');
    const cssClass = val.isActive || (launchYear === val.value) ? classes.active : null;
  return <button key={val.value} onClick={() => handleDateFilter(val)} className={cssClass}>{val.value}</button>;
  });
  const evenYears = EVEN_YEARS.map((val) => {
    const launchYear = new URLSearchParams(props.location.search).get('launch_year');
    const cssClass = val.isActive || (launchYear === val.value) ? classes.active : null;
    return <button key={val.value} onClick={() => handleDateFilter(val)} className={cssClass}>{val.value}</button>;
  });
  return (
    <div className={classes.Years}>
      <h3>Filters</h3>
      <div className={classes.alignCenter}>
        Launch Year
        <hr />
      </div>
      <div className={classes.Year}>
        <div>{evenYears}</div>
        <div>{oddYears}</div>
      </div>
      <div className={classes.alignCenter}>
        Successfull Launch
        <hr />
      </div>
      <div className={classes.Year}>
        <div>
            <button onClick={() => handleLaunchAndLandFilter(true, 'launch_success')} className={launch_success ? classes.active : null}>True</button>
        </div>
        <div>
          <button onClick={() => handleLaunchAndLandFilter(false, 'launch_success')}>False</button>
        </div>
      </div>
      <div className={classes.alignCenter}>
        Successfull Landing
        <hr />
      </div>
      <div className={classes.Year}>
        <div>
          <button onClick={() => handleLaunchAndLandFilter(true, 'land_success')} className={land_success ? classes.active : null}>True</button>
        </div>
        <div>
          <button onClick={() => handleLaunchAndLandFilter(false, 'land_success')}>False</button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Years);
