import React from "react";
import classes from "./styles/PrewriteBubbles.module.css";
import Bubble from "./Bubble";
import AddBubble from "./AddBubble";
import { useState } from "react";

const PrewriteBubbles = (props) => {

  const [ideas, setIdeas] = useState([]);

  const newIdeaHandler = idea => {
    setIdeas(prev => [...prev, idea]);
  }

  return (
    <div className={classes.prewriteBubbles}>

      <p>{props.topic}</p>

      <div className={classes.bubblesHolder}>
        {ideas.map(idea => <Bubble idea={idea}/>)}
      </div>
      <AddBubble onNewIdea={newIdeaHandler} type="text" placeholder="Add Another"/>
    </div>
  );
};

export default PrewriteBubbles;
