import React, { useEffect } from "react";
import Header from "./components/Header.js";

const PlayGame = () => {

  useEffect(() => {
    //selectors
    const objs = Array.from(document.querySelectorAll(".object"));
    const imageMap = document.querySelector(".image");
    const dropdown = document.querySelector(".dropdown");
    dropdown.style.display = "none";
    const correctScreen = document.querySelector(".correct");
    const wrongScreen = document.querySelector(".wrong");
    let objectContent;

    //makes dropdown appear where clicked
    imageMap.addEventListener("click", (e) => {
      if (dropdown.style.display === "none") {
        dropdown.style.display = "block";
        let X;
        let Y;
        e.pageX > 1700 ? X = e.pageX - 200 : X = e.pageX;
        e.pageY > 3350 ? Y = e.pageY - 300 : Y = e.pageY;
        dropdown.style.left = X + "px";
        dropdown.style.top = Y + "px";
        objectContent = "imageMap";
      } else {
        dropdown.style.display = "none";
      }
    })

    //adds the object id's to dropdown list
    objs.map(e => {
      //creates elements in list
      const section = document.createElement("span");
      section.setAttribute("class", "section");
      section.setAttribute("id", `${e.alt}`);
      section.style.display = "block";
      section.textContent = e.id;
      //adds dropdown after clicking on chars
      e.addEventListener("click", (a) => {
        dropdown.style.display = "block";
        let X;
        a.pageX > 1700 ? X = a.pageX - 200 : X = a.pageX;
        dropdown.style.left = X + "px";
        dropdown.style.top = a.pageY + "px";
        objectContent = e.alt;
      });
      return dropdown.appendChild(section);
    })

    //removes correctScreen after 3 seconds
    const correctTime = () => {
      correctScreen.style.display = "none"
    }
    //removes wrongScreen after 3 seconds
    const wrongTime = () => {
      wrongScreen.style.display = "none"
    }

    //selects correct/wrong answer from dropdown
    const section = Array.from(document.querySelectorAll(".section"));
    dropdown.addEventListener("click", (a) => {
      const item = document.querySelector(`area[alt=${objectContent}]`);
      if (a.path[0].id === objectContent) {
        correctScreen.style.display = "block";
        item.remove();
        section.map(e => {
          if (e.id === objectContent) {
            e.remove();
          }
          return e;
        })
        setTimeout(correctTime, 2000);
      } else {
        wrongScreen.style.display = "block";
        setTimeout(wrongTime, 2000);
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
      <area alt="jabba" id="Jabba the Hutt" className="object" coords="1169,1017,1254,1133" shape="rect" />
      <area alt="edward" id="Edward Elric" className="object" coords="1099,2846,1182,2906" shape="rect" />
      <area alt="link" id="Link" className="object" coords="371,3188,476,3285" shape="rect" /> 
    </map>

    <div className="dropdown"></div>

    <div className="correct">CORRECT</div>
    <div className="wrong">WRONG</div>
    </>
  );
};

export default PlayGame;

//https://www.w3schools.com/tags/tag_area.asp

/** 
  https://imagemap.org/
  */