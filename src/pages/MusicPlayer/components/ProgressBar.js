import React from 'react';
import classes from './styles/ProgressBar.module.css';

const ProgressBar = (props) => {
  return <div className={classes.progressBar}>
    <div className={classes.bar}></div>
    <div className={classes.progressHolder}>
      <div className={classes.progress}>
        <div className={classes.circle}></div>
      </div>
    </div>
  </div>
};

export default ProgressBar