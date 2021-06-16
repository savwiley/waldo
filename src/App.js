import React, { useEffect } from "react";
import { Link } from "react-router-dom";

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
    easyImage.style.background =
      "center / contain no-repeat url('https://raw.githubusercontent.com/savwiley/waldo/master/src/images/" +
      easy[randomNumb()] +
      "')";
    medImage.style.background =
      "center / contain no-repeat url('https://raw.githubusercontent.com/savwiley/waldo/master/src/images/" +
      medium[randomNumb()] +
      "')";
    hardImage.style.background =
      "center / contain no-repeat url('https://raw.githubusercontent.com/savwiley/waldo/master/src/images/" +
      hard[randomNumb()] +
      "')";
  });

  return (
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

      <div className="aboutBtn button">
        <Link to="about">About</Link>
      </div>
    </>
  );
}

export default App;
