import React from "react";
import { Link } from "react-router-dom";
//import Header from "./components/Header.js";

function App() {
  
  return(
    <>
      <Link to="/game">
        Game!
      </Link>
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
