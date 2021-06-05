import React, { useState, useEffect } from "react";
import firebase from "../firebase.js";

const Header = () => {
  const [docs, setDocs] = useState();

  async function callAsync() {
    //adding .doc('{idname}') to the end of this v makes a certain doc appear. How do I make them all appear so that I could (preferrably) map through them?

    //change {hard} to a variable that i can change via App.js and import it over here, maybe by making it a ref in App.js, sending it to playgame.js or Routes.js and sending it here. It has to go through playgame.js to change the dropdown anyway.
    const doc = firebase.firestore().collection('Characters').where('difficulty', '==', 'hard');
    const docGet = await doc.get();
    setDocs(docGet);
  }

  useEffect(() => {

    //const header = document.querySelector(".header");
    if (!docs) {
      callAsync();
    } else {
      //v holds the data like a json
      let headText = [];
      docs.forEach(e => {
        headText.push(e.data());
      })
      console.log(headText[0].id);
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