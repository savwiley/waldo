import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import firebase from "./firebase.js";

const HighScore = () => {
  const [ docs, setDocs ] = useState();
  const { diffScore } = useParams();
  const newDiff = useRef();

  /**
   * collections are EasyScores, MedScores, HardScores
   * docs are the names of the users
   * the only field is "score" with the time in a string
   */

  async function callAsync() {
    const doc = firebase.firestore().collection(diffScore).orderBy('score');
    newDiff.current = diffScore;
    const docGet = await doc.get();
    setDocs(docGet);
  };

  useEffect(() => {
    //selectors
    const table = document.querySelector(".table");
    const sections = Array.from(document.querySelectorAll(".sect"));

    if (!docs || newDiff.current !== diffScore) {
      table.textContent = "Loading...";
      callAsync();
      if (sections) {
        sections.forEach(e => {
          e.remove();
          return e;
        });
      };
    } else {
      let name = [];
      let score = [];
      table.textContent = "";
      docs.forEach(e => {
        name.push(e.id);
        score.push(e.data().score);
      });
      for (let i = 0; i < name.length; i++) {
        const sect = document.createElement("div");
        sect.setAttribute("class", "sect");
        table.appendChild(sect);
        sect.textContent = `${name[i]} timed in at ${score[i]}`;
      };

    }
  });

  return(
    <div>
      <div className="flex">
        <Link to="EasyScores">Easy</Link>
        <Link to="MedScores">Medium</Link>
        <Link to="HardScores">Hard</Link>
      </div>

      <div className="table">Loading...</div>

      <div className="button">
        <Link to="/">Back to Start</Link>
      </div>
    </div>
  )
}

export default HighScore;

/**
 * a "table" with names & scores
 * use "tabs" at the top to switch to different difficulties (maybe with #easy, etc)
 * always open on easy tab unless brought here from other difficulty
 * pull this stuff directly from firebase
 * btn that goes back to App.js
 * 
 * 
 * 
      {scoring.map((e) => (
        <div>
          {e.score}
        </div>
      ))}
 */