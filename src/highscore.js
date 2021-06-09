import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import firebase from "./firebase.js";

const HighScore = () => {
  const [ docs, setDocs ] = useState();
  const { diffScore } = useParams();
  //let scoring = [];
  let newDiff;

  /**
   * collections are EasyScores, MedScores, HardScores
   * docs are the names of the users
   * the only field is "score" with the time in a string
   */

  async function callAsync() {
    const doc = firebase.firestore().collection(diffScore);
    newDiff = diffScore;
    const docGet = await doc.get();
    setDocs(docGet);
  };

  useEffect(() => {
    //selectors
    const table = document.querySelector(".table");

    if (!docs) {
      callAsync();
      console.log(newDiff);
      console.log(diffScore);
    } else {
      let name = [];
      let score = [];
      docs.forEach(e => {
        name.push(e.id);
        score.push(e.data().score);
      });
      for (let i = 0; i < name.length; i++) {
        const sect = document.createElement("div");
        sect.setAttribute("class", "sect");
        table.appendChild(sect);
        sect.textContent = `${name[i]} timed in at ${score[i]}`;
      }

    }
  })

  return(
    <div>
      <div className="flex">
        <Link to="/scores/EasyScores">Easy</Link>
        <Link to="MedScores">Medium</Link>
        <Link to="HardScores">Hard</Link>
      </div>

      <div className="table"></div>
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