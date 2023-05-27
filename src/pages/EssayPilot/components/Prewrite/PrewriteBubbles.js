import React from "react";
import classes from "./styles/PrewriteBubbles.module.css";
import Bubble from "./Bubble";
import AddBubble from "./AddBubble";
import { useState } from "react";
import SubBubble from "./SubBubble";

const PrewriteBubbles = (props) => {
  const [ideas, setIdeas] = useState([]);

  const newIdeaHandler = (idea, id) => {
    setIdeas((prev) => [
      ...prev,
      {
        idea: idea,
        id: id,
      },
    ]);
  };

  return (
    <div className={classes.prewriteBubbles}>
      <p>{props.topic}</p>

      <div className={classes.bubblesHolder}>
        {ideas.map((idea) => (
          <div>
            <Bubble idea={idea.idea} key={idea.id} id={idea.id} />
            <div className={classes.subBubblesHolder}>
              <SubBubble />
            </div>
          </div>
        ))}
      </div>
      <AddBubble
        onNewIdea={newIdeaHandler}
        type="text"
        placeholder="Add Another"
      />
    </div>
  );
};

export default PrewriteBubbles;
