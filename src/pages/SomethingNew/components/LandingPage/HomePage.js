import React, { useEffect, useState } from "react";
import classes from "./styles/HomePage.module.css";
import TypeWriter from "typewriter-effect";

const HomePage = (props) => {
  const [strings, setStrings] = useState(["br"]);

  useEffect(() => {
    var ar = ["astonishingly adventurous", "endlessly curious", "boldly innovative", "relentlessly determined", "surprisingly resourceful", "consistently motivated", "uniquely creative", "fearlessly ambitious", "joyfully spontaneous", "remarkably disciplined", "profoundly introspective", "relentlessly optimistic", "fiercely independent", "endlessly resilient", "wonderfully adaptable", "passionately dedicated", "endlessly imaginative", "remarkably patient", "playfully inventive", "boldly fearless", "strikingly confident", "thoughtfully reflective", "tirelessly curious", "remarkably tenacious", "wildly adventurous", "fearlessly persistent", "genuinely empathetic", "incredibly perceptive", "wonderfully open-minded", "audaciously ambitious", "undeniably resilient", "intently focused", "captivatingly charismatic", "eagerly adaptable", "genuinely passionate", "unapologetically bold", "consistently innovative", "astutely observant", "ceaselessly dedicated", "endlessly inquisitive", "fearlessly imaginative", "exuberantly enthusiastic", "refreshingly optimistic", "unconventionally daring", "curiously inventive", "insatiably curious", "effortlessly versatile", "limitlessly creative", "unwaveringly driven", "intrepidly explorative", "persistently curious", "inspiringly resourceful", "radiantly ambitious", "unrelentingly motivated", "unapologetically curious", "boldly adventurous", "curiously analytical", "fiercely determined", "unconventionally brilliant", "fearlessly visionary", "remarkably versatile", "relentlessly inquisitive", "incredibly adaptive", "uniquely audacious", "passionately fearless", "endlessly driven", "exuberantly inquisitive", "imaginatively bold", "limitlessly adventurous", "curiously tenacious", "unapologetically passionate", "inspiringly resilient", "radiantly creative", "unwaveringly open-minded", "intrepidly innovative", "persistently dedicated", "insatiably imaginative", "effortlessly curious", "unrelentingly adventurous", "unconventionally motivated", "boldly resourceful", "fearlessly tenacious", "curiously fearless", "remarkably fearless", "relentlessly creative", "surprisingly determined", "wonderfully inspired", "passionately inquisitive", "joyfully ambitious", "wildly imaginative", "boldly independent", "profoundly motivated", "endlessly introspective", "uniquely resilient", "fearlessly adaptable", "captivatingly passionate", "eagerly creative", "genuinely innovative", "unapologetically driven", "intently adventurous"];
    setStrings((prev) => {
      const newAr = shuffle(ar);
      console.log(newAr);
      return newAr;
    })
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h1>For the </h1>
        <TypeWriter
          options={{
            strings: [...strings],
            autoStart: true,
            loop: true,
            delay: 50,
            pauseFor: 5000,
          }}
        />
      </div>
      <p className={classes.also}>(also for the <span>incredibly bored</span>)</p>
    </div>
  );
};

const shuffle = (array) => {
  for(let i = array.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

export default HomePage;
