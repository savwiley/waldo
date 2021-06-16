import React, { useState, useEffect } from "react";
import firebase from "../firebase.js";

const Header = (props) => {
  const [docs, setDocs] = useState();
  const { difficulty, time } = props;

  async function callAsync() {
    const doc = firebase
      .firestore()
      .collection("Characters")
      .where("difficulty", "==", difficulty);
    const docGet = await doc.get();
    setDocs(docGet);
  }

  useEffect(() => {
    //selectors
    const first = document.querySelector("#one");
    const firstImage = document.querySelector(".imageOne");
    const second = document.querySelector("#two");
    const secondImage = document.querySelector(".imageTwo");
    const third = document.querySelector("#three");
    const thirdImage = document.querySelector(".imageThree");
    const timer = document.querySelector(".timer");
    let oneSec = 0;
    let tenSec = 0;
    let oneMin = 0;
    let tenMin = 0;
    let hourCont = 0;

    if (!docs) {
      callAsync();
    } else {
      //v holds the data like a json
      let headText = [];
      docs.forEach((e) => {
        headText.push(e.data());
      });

      first.textContent = headText[0].id;
      firstImage.style.background = `center / contain no-repeat url("https://raw.githubusercontent.com/savwiley/waldo/master/src/images/${headText[0].image}")`;

      second.textContent = headText[1].id;
      secondImage.style.background = `center / contain no-repeat url("https://raw.githubusercontent.com/savwiley/waldo/master/src/images/${headText[1].image}")`;

      third.textContent = headText[2].id;
      thirdImage.style.background = `center / contain no-repeat url("https://raw.githubusercontent.com/savwiley/waldo/master/src/images/${headText[2].image}")`;

      const update = () => {
        if (time) {
          timer.remove();
        }
        timer.textContent = `${hourCont}:${tenMin}${oneMin}:${tenSec}${oneSec}`;
      };

      const oneSeconds = () => {
        oneSec += 1;
        update();
      };
      const tenSeconds = () => {
        oneSec = 0;
        tenSec += 1;
        update();
      };
      const oneMinutes = () => {
        tenSec = 0;
        oneMin += 1;
        update();
      };
      const tenMinutes = () => {
        oneMin = 0;
        tenMin += 1;
        update();
      };
      const hours = () => {
        tenMin = 0;
        hourCont += 1;
        update();
      };

      setInterval(oneSeconds, 1000);
      setInterval(tenSeconds, 10000);
      setInterval(oneMinutes, 60000);
      setInterval(tenMinutes, 600000);
      setInterval(hours, 3600000);
    }
  });

  return (
    <div className="header">
      <div className="imageOne"></div>
      <div id="one">Loading...</div>

      <div className="imageTwo"></div>
      <div id="two">Loading...</div>

      <div className="imageThree"></div>
      <div id="three">Loading...</div>

      <div className="timer"></div>
    </div>
  );
};

export default Header;
