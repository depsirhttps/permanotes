import React from "react";
import classes from "./styles/ControlPanel.module.css";
import TimeSlider from "./TimeSlider";

import HeartEmpty from "../../images/heartEmpty.svg";
import loop from "../../images/loop.svg";
import paused from "../../images/paused.svg";
import play from "../../images/play.svg";
import prev from "../../images/prev.svg";
import skip from "../../images/skip.svg";
import share from "../../images/share.svg";
import more from "../../images/more.svg";

const TopRow = (props) => {
  return (
    <div className={classes.topRow}>
      <button className={classes.heart}>
        <img src={HeartEmpty} />
      </button>
      <button className={classes.prev}>
        <img src={prev} />
      </button>
      <button className={classes.play}>
        <img src={play} />
      </button>
      <button className={classes.skip}>
        <img src={skip} />
      </button>
      <button className={classes.loop}>
        <img src={loop} />
      </button>
    </div>
  );
};

const BottomRow = (props) => {
  return <div className={classes.bottomRow}>
    <button className={classes.share}>
      <img src={share} />
    </button>
    <button className={classes.more}>
      <img src={more} />
    </button>
  </div>;
};

const ControlPanel = (props) => {
  return (
    <div className={classes.controlPanel}>
      <TimeSlider />
      <div className={classes.timeStamps}>
        <p className={classes.currentTime}>0:24</p>
        <p className={classes.endingTime}>1:45</p>
      </div>
      <TopRow />
      <BottomRow />
    </div>
  );
};

export default ControlPanel;
