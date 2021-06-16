import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import firebase from "./firebase.js";

const HighScore = () => {
  const [docs, setDocs] = useState();
  const [recent, setRecent] = useState();
  const { diffScore } = useParams();
  const newDiff = useRef();

  //collections are EasyScores, MedScores, HardScores

  async function callAsync() {
    const doc = firebase.firestore().collection(diffScore).orderBy("score");
    const rec = firebase
      .firestore()
      .collection(diffScore)
      .orderBy("date", "desc")
      .limit(1);
    const docGet = await doc.get();
    const recGet = await rec.get();
    newDiff.current = diffScore;
    setDocs(docGet);
    setRecent(recGet);
  }

  useEffect(() => {
    //selectors
    const table = document.querySelector(".table");
    const sections = Array.from(document.querySelectorAll(".sect"));
    const scoresTitle = document.querySelector(".scoresTitle");

    //gives each page a title
    if (diffScore === "EasyScores") {
      scoresTitle.textContent = "High Scores - Easy";
    } else if (diffScore === "MedScores") {
      scoresTitle.textContent = "High Scores - Medium";
    } else if (diffScore === "HardScores") {
      scoresTitle.textContent = "High Scores - Hard";
    }

    if (!docs || !recent || newDiff.current !== diffScore) {
      table.textContent = "Loading...";
      callAsync();
      //removes sections of other difficulties
      if (sections) {
        sections.forEach((e) => {
          e.remove();
          return e;
        });
      }
    } else {
      //holds data
      let name = [];
      let score = [];
      let mostRecent;
      table.textContent = "";
      //gathers data
      docs.forEach((e) => {
        name.push(e.data().id);
        score.push(e.data().score);
      });
      recent.forEach((e) => {
        mostRecent = e.data();
      });

      for (let i = 0; i < name.length; i++) {
        //creates each section
        const sect = document.createElement("div");
        sect.setAttribute("class", "sect");
        table.appendChild(sect);
        //name & placement number
        const sectName = document.createElement("div");
        sectName.setAttribute("id", "sectName");
        sectName.textContent = `${i + 1}. ${name[i]}`;
        sect.appendChild(sectName);
        //marks most recent score
        const sectRecent = document.createElement("div");
        sectRecent.setAttribute("id", "sectRecent");
        if (mostRecent.id === name[i]) {
          sectRecent.textContent = "🟊 most recent";
        }
        sect.appendChild(sectRecent);
        //score/time
        const sectTime = document.createElement("div");
        sectTime.setAttribute("id", "sectTime");
        sectTime.textContent = score[i];
        sect.appendChild(sectTime);
      }
    }
  });

  return (
    <div>
      <div className="flex">
        <Link to="EasyScores">Easy</Link>
        <Link to="MedScores">Medium</Link>
        <Link to="HardScores">Hard</Link>
      </div>

      <div className="scoresTitle"></div>

      <div className="table">Loading...</div>

      <div className="button">
        <Link to="/">Back to Start</Link>
      </div>
    </div>
  );
};

export default HighScore;
