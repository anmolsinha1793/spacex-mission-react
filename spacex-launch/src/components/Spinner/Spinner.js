import classes from "./Spinner.module.scss";

const Spinner = () => {
  return (
    <>
      <div className={classes.parent}></div>
      <div className={classes.loader}></div>
    </>
  );
};

export default Spinner;
