import React from "react";
import { Link } from "react-router-dom";

const About = () => {

  return(
    <>
      <div className="aboutSection">
        <div id="title">Where's <s>Waldo</s>?</div>

        <p>
          If you've never played "Where's Waldo?" before, this is how it's done. After you choose a difficulty, you will be shown a piece of art by <a href="https://www.artstation.com/chekavo">Egor Klyuchnyk</a> featuring various pop culture characters. You will also be given three different characters to find in the image.
        <br /><br />
          Once you believe you've found one of the characters, click on them and select their name from the dropdown menu. Once you've found all three, you win! Enter your name to be added to our High Score table.
        <br /><br />
          This app was created with React and Firebase. It is a task from <a href="https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/where-s-waldo-a-photo-tagging-app">The Odin Project</a> to teach those learning Full-Stack JavaScript to build a photo tagging application with use from a backend service like Firebase. For more information, go to the <a href="https://github.com/savwiley/waldo">GitHub repository</a>.
        <br /><br />
          Thanks for playing!
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

//linear-gradient(220deg, rgb(255, 0, 0, 0.4), rgb(255, 165, 0, 0.4), rgb(255, 255, 0, 0.4), rgb(0, 128, 0, 0.4), rgb(0, 0, 255, 0.4), rgb(75, 0, 130, 0.4), rgb(238, 130, 238, 0.4))