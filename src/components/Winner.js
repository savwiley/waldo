import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Winner = (props) => {
  const { time, difficulty } = props;
  const [diff, setDiff] = useState();

  //changes the high scores link to sync up to the same level being played
  useEffect(() => {
    if (difficulty === "easy") {
      setDiff("scores/EasyScores")
    } else if (difficulty === "medium") {
      setDiff("scores/MedScores")
    } else {
      setDiff("scores/HardScores")
    };
  }, [difficulty]);

  return(
    <div className="winner">
      <div className="winInner">
        You won in {time}!

        <form>
          <input type="text" placeholder="Your Name" />

          <button type="submit">Submit Time</button>
        </form>

        <div className="flexBtns">
          <Link to={diff}>High Scores</Link>
          <Link to={difficulty}>Play Again</Link>
          <Link to="/">Change Level</Link>
        </div>

      </div>
    </div>
  )
}

export default Winner;

/**
 * does the button need to be submit?
 * go back to the guide that taught how to make a messenger app
 * consider using font awesome or smth
 */

/**
 * name input
 * submit score btn
 * high scores btn (takes you to that difficulties scores; add Link & react-router-dom)
 * play again btn (refreshes page)
 * change difficulty btn (takes you back to App.js; add Link & react-router-dom)
 */