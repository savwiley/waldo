import React, { useEffect } from "react";
import Header from "./components/Header.js";

const PlayGame = () => {

  useEffect(() => {
    //selectors
    const objs = Array.from(document.querySelectorAll(".object"));
    const imageMap = document.querySelector(".image");
    const dropdown = document.querySelector(".dropdown");
    let objectContent;

    //makes dropdown appear where clicked
    imageMap.addEventListener("click", (e) => {
      dropdown.style.display = "block";
      dropdown.style.left = e.pageX + "px";
      dropdown.style.top = e.pageY + "px";
      objectContent = "imageMap";
    })

    //adds the object id's to dropdown list
    objs.map(e => {
      //creates elements in list
      const section = document.createElement("span");
      section.setAttribute("class", "section");
      section.style.display = "block";
      section.textContent = e.id;
      //adds dropdown after clicking on chars
      e.addEventListener("click", (a) => {
        dropdown.style.display = "block";
        dropdown.style.left = a.pageX + "px";
        dropdown.style.top = a.pageY + "px";
        objectContent = e.id;
      });
      return dropdown.appendChild(section);
    })

    //selects correct/wrong answer from dropdown
    const section = Array.from(document.querySelectorAll(".section"));
    dropdown.addEventListener("click", (a) => {
      if (a.path[0].innerText === objectContent) {
        //RIGHT logic here
        console.log("CORRECT");
        const item = document.querySelector(`#${objectContent}`);
        item.remove();
        section.map(e => {
          if (e.textContent === objectContent) {
            e.remove();
          }
          return e;
        })
      } else {
        console.log("WRONG");
        //WRONG logic here
      }
      dropdown.style.display = "none";
    })
    
  });

  return(
    <>
    <Header />

    <img src="https://raw.githubusercontent.com/savwiley/waldo/master/src/images/egor-klyuchnyk-kickstarter-artstation.jpg" className="image" useMap="#image" alt="2222AD" />

    <map name="image" className="imageMap">
      <area alt="sonic" id="Sonic the Hedgehog" className="object" coords="609,1866,684,1926" shape="rect" />
      <area alt="portal" id="Frankenturret" className="object" coords="1286,1334,1354,1422" shape="rect" />
      <area alt="bravo" id="Johnny Bravo" className="object" coords="781,1810,903,1924" shape="rect" />
      <area alt="neo" id="Neo" className="object" coords="728,313,849,403" shape="rect" />
      <area alt="minion" id="Minion" className="object" coords="1795,1587,1846,1652" shape="rect" />
      <area alt="ash" id="Ash Ketchum" className="object" coords="27,2530,87,2581" shape="rect" />
      <area alt="jabba" id="Jabba the Hut" className="object" coords="1169,1017,1254,1133" shape="rect" />
      <area alt="edward" id="Edward Elric" className="object" coords="1099,2846,1182,2906" shape="rect" />
      <area alt="link" id="Link" className="object" coords="371,3188,476,3285" shape="rect" /> 
    </map>

    <div className="dropdown"></div>
    </>
  );
};

export default PlayGame;

//https://www.w3schools.com/tags/tag_area.asp

/** 
  https://imagemap.org/

  create right/wrong logic
  maybe make the dropdown vanish when you click off of it, too
  */