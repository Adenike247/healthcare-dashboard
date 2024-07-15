import React from 'react'
import classes from "./BodyCheckup.module.css";
const BodyCheckup = ({backgroundColor,logo,title,result,status}) => {
  return (
    
    <div style={{ backgroundColor }} className={classes.healthReportContainer}>
      <img src={logo} alt="logo" />
      <p className={classes.title}>{title}</p>
      <h3 className={classes.result}>{result}</h3>
      <p className={classes.status}>{status}</p>
    </div>
  );
};

export default BodyCheckup;