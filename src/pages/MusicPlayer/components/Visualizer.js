import React from "react";
import classes from "./styles/Visualizer.module.css";

const Visualizer = (props) => {
  const Bar = (object) => {
    const calculatedSize = object.size / 100;
    console.log(calculatedSize);

    return (
      <div
        style={{
          backgroundColor: "#c4c4c4",
          flex: "1",
          height: `${calculatedSize * 100}%`,
        }}
      ></div>
    );
  };

  return (
    <div className={classes.visualizer}>
      <div className={classes.barsHolder}>
        {props.data.map((datum) => (
          <Bar size={datum.size} />
        ))}
      </div>
    </div>
  );
};

export default Visualizer;
