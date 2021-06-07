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

      </div>
    </>
  )
}

export default App;

//https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/where-s-waldo-a-photo-tagging-app

/**
 * TODOS
 * - add images to header
 * - create timer
 * - make a better correct/wrong screen
 * - create a You Found Them All or whatever screen
 * -- figure out how to decide this happened, when dropdown is empty?
 * -- give player ability to add high score after stopping timer
 * - create high score table (set with different difficulties)
 * - create links to high score table (in App.js and Header.js?)
 * - edit README
 * - create LICENSE
 */
