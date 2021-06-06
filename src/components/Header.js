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
    const header = document.querySelector(".header");
    if (!docs) {
      callAsync();
    } else {
      //v holds the data like a json
      let headText = [];
      docs.forEach(e => {
        headText.push(e.data().id);
      })
      //v change this to make it look better with images and things
      //also, consider starting the timer at this point
      header.textContent = headText;
    }
  });

  return (
    <div className="header">
      
      Loading...

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