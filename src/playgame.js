import React, { useEffect } from "react";
import Header from "./components/Header.js";

const PlayGame = () => {

  useEffect(() => {
    //selectors
    const objs = Array.from(document.querySelectorAll(".object"));
    const imageMap = document.querySelector(".image");
    const dropdown = document.querySelector(".dropdown");

    //makes dropdown appear where clicked
    imageMap.addEventListener("click", (e) => {
      dropdown.style.display = "block";
      dropdown.style.left = e.pageX + "px";
      dropdown.style.top = e.pageY + "px";
    })

    //makes dropdown vanish when clicked on
    dropdown.addEventListener("click", () => {
      dropdown.style.display = "none";
    })

    //adds the object id's to dropdown list
    objs.map(e => {
      let name = e.id;
      const section = document.createElement("span");
      section.setAttribute("class", "section");
      section.style.display = "block";
      section.textContent = name;
      e.addEventListener("click", (a) => {
        dropdown.style.display = "block";
        dropdown.style.left = a.pageX + "px";
        dropdown.style.top = a.pageY + "px";
      });
      section.addEventListener("click", () => {
        if (section.textContent === e.id) {
          console.log("yup");
        } else {
          console.log("nope");
        }
      })
      return dropdown.appendChild(section);
    })

    //^keeps reading "yup"
    
  });

  return(
    <>
    <Header />

    <img src="https://raw.githubusercontent.com/savwiley/waldo/master/src/images/egor-klyuchnyk-kickstarter-artstation.jpg" className="image" useMap="#image" alt="2222AD" />

    <map name="image" className="imageMap">
      <area alt="sonic" id="sonic" className="object" coords="609,1866,684,1926" shape="rect" />
      <area alt="portal" id="portal" className="object" coords="1286,1334,1354,1422" shape="rect" />
      <area alt="bravo" id="bravo" className="object" coords="781,1810,903,1924" shape="rect" />
      <area alt="neo" id="neo" className="object" coords="728,313,849,403" shape="rect" />
      <area alt="minion" id="minion" className="object" coords="1795,1587,1846,1652" shape="rect" />
      <area alt="ash" id="ash" className="object" coords="27,2530,87,2581" shape="rect" />
      <area alt="jabba" id="jabba" className="object" coords="1169,1017,1254,1133" shape="rect" />
      <area alt="edward" id="edward" className="object" coords="1099,2846,1182,2906" shape="rect" />
      <area alt="link" id="link" className="object" coords="371,3188,476,3285" shape="rect" /> 
    </map>

    <div className="dropdown"></div>
    </>
  );
};

export default PlayGame;

//https://www.w3schools.com/tags/tag_area.asp

/** 
  https://imagemap.org/
  */