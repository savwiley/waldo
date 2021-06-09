import React from "react";

const Winner = (props) => {
  const { time } = props;

  return(
    <div className="winner">
      <div className="winInner">
        YOU WON IN {time}!
      </div>
    </div>
  )
}

export default Winner;

/**
 * name input
 * submit score btn
 * high scores btn (takes you to that difficulties scores; add Link & react-router-dom)
 * play again btn (refreshes page)
 * change difficulty btn (takes you back to App.js; add Link & react-router-dom)
 */