import React from "react";
import { Link } from "react-router-dom";
//import Header from "./components/Header.js";

function App() {

  return(
    <>
      <div className="start">

        <Link to="easy">
          <div id="easy" className="diff">
            Easy
          </div>
        </Link>

        <Link to="medium">
          <div id="medium" className="diff">
            Medium
          </div>
        </Link>

        <Link to="hard">
          <div id="hard" className="diff">
            Hard
          </div>
        </Link>

        <Link to="scores/EasyScores">
          <div>
            to scores
          </div>
        </Link>

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
 * - create high score table (set with different difficulties)
 * - create links to high score table (in App.js and Header.js?)
 * - fix dropdown so it doesn't overflow off screen instead of just off page
 * - clean up CSS
 * - mobile friendly
 * - consider creating an error page if async can't be called, likely because of INTERNET PROBLEMS
 * - edit README
 * - create LICENSE
 * - fix tab pic/name
 */
