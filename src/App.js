import React, { useEffect } from "react";
import { Link } from "react-router-dom";
//import Header from "./components/Header.js";

function App() {

  useEffect(() => {
    //arrays
    const easy = ["jabba.png", "neo.png", "portal.png"];
    const medium = ["bravo.gif", "edward.png", "link.png"];
    const hard = ["ash.png", "minion.png", "sonic.png"];

    //random number generator
    const randomNumb = () => {
      return Math.floor(Math.random() * 3);
    };

    //selectors
    const easyImage = document.querySelector("#easyImage");
    const medImage = document.querySelector("#medImage");
    const hardImage = document.querySelector("#hardImage");

    //backgrounds
    easyImage.style.background = "center / contain no-repeat url('https://raw.githubusercontent.com/savwiley/waldo/master/src/images/" + easy[randomNumb()] + "')";
    medImage.style.background = "center / contain no-repeat url('https://raw.githubusercontent.com/savwiley/waldo/master/src/images/" + medium[randomNumb()] + "')";
    hardImage.style.background = "center / contain no-repeat url('https://raw.githubusercontent.com/savwiley/waldo/master/src/images/" + hard[randomNumb()] + "')";

  })

  return(
    <>
      <div className="start">

        <div className="appFlex">

          <div className="homeImage" id="easyImage"></div>

          <Link to="easy">
            <div id="easy" className="diff">
              Easy
            </div>
          </Link>

          <div className="homeImage" id="medImage"></div>

          <Link to="medium">
            <div id="medium" className="diff">
              Medium
            </div>
          </Link>

          <div className="homeImage" id="hardImage"></div>

          <Link to="hard">
            <div id="hard" className="diff">
              Hard
            </div>
          </Link>

        </div>

        <Link to="scores/EasyScores">
          <div id="scoresLink" className="diff">
            High Scores
          </div>
        </Link>

      </div>

      <div className="button">
        <a href="https://github.com/savwiley/waldo">GitHub</a>
      </div>

    </>
  )
}

export default App;

//https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/where-s-waldo-a-photo-tagging-app

/**
 * TODOS
 * - make a better correct/wrong screen
 * - create a You Found Them All or whatever screen
 * -- figure out how to decide this happened, when dropdown is empty?
 * -- give player ability to add high score after stopping timer
 * - fix dropdown so it doesn't overflow off screen instead of just off page
 * - clean up CSS
 * - mobile friendly
 * - consider creating an error page if async can't be called, likely because of INTERNET PROBLEMS
 * - edit README
 * - create LICENSE
 * - fix tab pic/name
 */
