import React from 'react';
import classes from './styles/TimeSlider.module.css';

const TimeSlider = (props) => {
  return <div className={classes.container}>
    <div className={classes.sliderBG}>
      <div className={classes.filled}>
        <div className={classes.circle}></div>
      </div>
    </div>
  </div>
};

export default TimeSlider