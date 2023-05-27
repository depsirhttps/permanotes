import React from "react";
import Page from "./components/UI/Page";
import classes from "./EssayPilot.module.css";
import PrewriteBubbles from "./components/Prewrite/PrewriteBubbles";

const EssayPilot = (props) => {
  return (
    <div className={classes.site}>
      <Page><PrewriteBubbles topic="Why Romeo and Juliet Died"/></Page>
      <Page>test</Page>
      <Page>test</Page>
    </div>
  );
};

export default EssayPilot;
