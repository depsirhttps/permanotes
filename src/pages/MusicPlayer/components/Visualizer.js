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
          width: "11px",
          height: `${calculatedSize * 100}%`,
        }}
      ></div>
    );
  };

  return (
    <div className={classes.visualizer}>
      {props.data.map((datum) => (
        <Bar size={datum.size} />
      ))}
    </div>
  );
};

export default Visualizer;
