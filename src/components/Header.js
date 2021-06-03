import React, { useEffect } from "react";
import firebase from "../firebase.js";

const Header = () => {

  useEffect(() => {

    async function callAsync() {
      const header = document.querySelector(".header");
      const doc = firebase.firestore().collection('Characters').doc('ash');
      const docGet = await doc.get();
      if (docGet) {
        const elem = docGet.data().id;
        header.textContent = elem;
      } else {
        alert("please")
      }
    }
    callAsync();

    //find a way to cycle through all of them. i'm just going to want three at a time. and those same three have to be the only ones in the dropdown.

  });

  return (
    <div className="header">

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