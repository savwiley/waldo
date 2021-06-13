import React from "react";
import { Link } from "react-router-dom";

const About = () => {

  return(
    <>
      <div className="aboutSection">
        <div id="title">Where's <s>Waldo</s>?</div>

        <p>

        </p>
      </div>

      <div className="button">
        <Link to="/">
          Back to Start
        </Link>
      </div>
    </>
  )
};

export default About;