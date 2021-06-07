import React, { useState, useEffect } from "react";
import firebase from "../firebase.js";

const Header = (props) => {
  const [docs, setDocs] = useState();
  const { difficulty } = props;

  async function callAsync() {
    const doc = firebase.firestore().collection('Characters').where('difficulty', '==', difficulty);
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

    //const header = document.querySelector(".header");
    if (!docs) {
      callAsync();
    } else {
      //v holds the data like a json
      let headText = [];
      docs.forEach(e => {
        headText.push(e.data());
      })
      //also, consider starting the timer at this point
      first.textContent = headText[0].id;
      firstImage.style.background = `url("https://raw.githubusercontent.com/savwiley/waldo/master/src/images/${headText[0].image}")`;
      firstImage.style.backgroundPosition = "center";
      firstImage.style.backgroundRepeat = "no-repeat";
      firstImage.style.backgroundSize = "contain";

      second.textContent = headText[1].id;
      secondImage.style.background = `url("https://raw.githubusercontent.com/savwiley/waldo/master/src/images/${headText[1].image}")`;
      secondImage.style.backgroundPosition = "center";
      secondImage.style.backgroundRepeat = "no-repeat";
      secondImage.style.backgroundSize = "contain";

      third.textContent = headText[2].id;
      thirdImage.style.background = `url("https://raw.githubusercontent.com/savwiley/waldo/master/src/images/${headText[2].image}")`;
      thirdImage.style.backgroundPosition = "center";
      thirdImage.style.backgroundRepeat = "no-repeat";
      thirdImage.style.backgroundSize = "contain";
    }
  });

  return (
    <div className="header">

      <div className="imageOne"></div>
      <div id="one">
        Loading...
      </div>

      <div className="imageTwo"></div>
      <div id="two">
        Loading...
      </div>

      <div className="imageThree"></div>
      <div id="three">
        Loading...
      </div>

    </div>
  )
}

export default Header;

/**
 * I'm thinking chars to find on left side, timer on right side (powered by firebase), and MAYBE the app's title in the middle if there's room on mobile.
 * 
 * Maybe connect the 'add high score' logic in here.
 * 
 * If there are different difficulties, they should be noted in here so that the images of chars can change.
 */