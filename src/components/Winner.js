import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import firebase from "../firebase.js";
import pokemon from "pokemon";

const Winner = (props) => {
  const { time, difficulty } = props;
  const [diff, setDiff] = useState();
  const [scoreCollection, setScoreCollection] = useState();

  //changes the high scores link to sync up to the same level being played
  useEffect(() => {
    if (difficulty === "easy") {
      setDiff("scores/EasyScores");
      setScoreCollection("EasyScores");
    } else if (difficulty === "medium") {
      setDiff("scores/MedScores");
      setScoreCollection("MedScores");
    } else {
      setDiff("scores/HardScores")
      setScoreCollection("HardScores");
    };
  }, [difficulty]);

  //saves names/scores to firestore
  useEffect(() => {
    //selectors
    const playerName = document.querySelector("#playerName");
    const subBtn = document.querySelector("#subBtn");

    //gives anon users a pokemon name (best api ever)
    let name;

    //collects the time
    let data = {
      score: `${time}`,
    };

    //adds score
    async function addHighScore() {
      if (diff !== undefined) {
        await firebase.firestore().collection(scoreCollection).doc(name).set(data);
      }
    };

    //event
    subBtn.addEventListener("click", (e) => {
      e.preventDefault();
      name = playerName.value;
      if (!playerName.value) {
        name = pokemon.random();
        playerName.value = name;
      };
      addHighScore();
    });
  });

  return(
    <div className="winner">
      <div className="winInner">
        You won in {time}!

        <input type="text" id="playerName" placeholder="Your Name" />

        <button type="submit" id="subBtn">Submit Time</button>

        <div className="flexBtns">
          <Link to={diff}>High Scores</Link>
          <Link to={difficulty}>Play Again</Link>
          <Link to="/">Change Level</Link>
        </div>

      </div>
    </div>
  )
}

export default Winner;