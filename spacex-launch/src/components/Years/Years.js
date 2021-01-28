import React from "react";
import { ODD_YEARS, EVEN_YEARS } from "../../constants/Year.const";
import classes from "./Years.module.scss";
import { withRouter } from "react-router-dom";
import { LAUNCH, LAND } from "../../constants/LaunchAndLand.const";

const Years = (props) => {
const queryObj = new URLSearchParams(props.location.search);
const launchYear = queryObj.get('launch_year');
const launchSuccess = queryObj.get('launch_success');
const landSuccess = queryObj.get('land_success'); 
const filterHandler = (arrayRef, val, key) => {
    handleToggle(arrayRef,val.value)
    val.isActive = !val.isActive;
    const isActive = val.isActive;
    const oldQuery = new URLSearchParams(props.location.search);
    isActive ? oldQuery.set(key, val.value) : oldQuery.delete(key);
    props.history.push({
        pathname: './missions',
        search: '?' + oldQuery.toString()
    });
}
const handleToggle = (arrayRef, year) => {
    arrayRef.forEach((val) => {
        if(val.value !== year){
            val.isActive = false;
        }
    });
}
handleToggle([...EVEN_YEARS, ...ODD_YEARS, ...LAUNCH, ...LAND],'');
  const oddYears = ODD_YEARS.map((val) => {
    const cssClass = val.isActive || (launchYear === val.value) ? classes.active : null;
  return <button key={val.value} onClick={() => filterHandler([...EVEN_YEARS, ...ODD_YEARS],val,'launch_year')} className={cssClass}>{val.value}</button>;
  });
  const evenYears = EVEN_YEARS.map((val) => {
    const cssClass = val.isActive || (launchYear === val.value) ? classes.active : null;
    return <button key={val.value} onClick={() => filterHandler([...EVEN_YEARS, ...ODD_YEARS],val,'launch_year')} className={cssClass}>{val.value}</button>;
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
            <button onClick={() => filterHandler(LAUNCH, LAUNCH[0], 'launch_success')} className={LAUNCH[0].isActive || (launchSuccess === LAUNCH[0].value) ? classes.active : null}>True</button>
        </div>
        <div>
          <button onClick={() => filterHandler(LAUNCH, LAUNCH[1], 'launch_success')} className={LAUNCH[1].isActive || (launchSuccess === LAUNCH[1].value) ? classes.active : null}>False</button>
        </div>
      </div>
      <div className={classes.alignCenter}>
        Successfull Landing
        <hr />
      </div>
      <div className={classes.Year}>
        <div>
          <button onClick={() => filterHandler(LAND, LAND[0], 'land_success')} className={LAND[0].isActive || (landSuccess === LAND[0].value) ? classes.active : null}>True</button>
        </div>
        <div>
          <button onClick={() => filterHandler(LAND, LAND[1], 'land_success')} className={LAND[1].isActive || (landSuccess === LAND[1].value) ? classes.active : null}>False</button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Years);
