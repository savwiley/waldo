import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
//import Header from "./components/Header.js";

function App() {
  //try useParams from react router
  const refDifficulty = useRef();

  //BE SURE to figure out how to make the player select a difficulty before they go to the game

  useEffect(() => {
    //selectors
    const easyBtn = document.querySelector("#easy");
    const medBtn = document.querySelector("#medium");
    const hardBtn = document.querySelector("#hard");

    easyBtn.addEventListener("click", () => {
      refDifficulty.current = "easy";
    })
    medBtn.addEventListener("click", () => {
      refDifficulty.current = "medium";
    })
    hardBtn.addEventListener("click", () => {
      refDifficulty.current = "hard";
    })
  });


  return(
    <>
      <div className="start">

        <div id="easy" className="diff">
          Easy
        </div>

        <div id="medium" className="diff">
          Medium
        </div>

        <div id="hard" className="diff">
          Hard
        </div>

        <Link to="/game">
          Game!
        </Link>

      </div>
    </>
  )
}

export default App;

//https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/where-s-waldo-a-photo-tagging-app

/**
 * OKAY I'm thinking we have different difficulties and maybe different pictures. So the app can be the difficulty/picture selection screen.
 * 
 * If I don't do selections, we can make this the main puzzle. Else, we make the puzzle as a component. Leaning towards the latter.
 * 
 * In the image puzzle finder thingy file, we add the logic that makes a dropdown of names appear on click.
 * 
 * We also need a page for the high score table.
 */
