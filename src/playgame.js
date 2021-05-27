import React from "react";
import Header from "./components/Header.js";

const PlayGame = () => {

  return(
    <>
    <Header />

    <div className="image" usemap="#image"></div>

    <map name="image">
      <area shape="rect" coords="" alt="" />
    </map>
    </>
  );
};

export default PlayGame;

//https://www.w3schools.com/tags/tag_area.asp

/** 
 * <area alt="sonic" title="sonic" href="" coords="609,1866,684,1926" shape="rect">
  <area alt="portal" title="portal" href="" coords="1286,1334,1354,1422" shape="rect">
  <area alt="bravo" title="bravo" href="" coords="781,1810,903,1924" shape="rect">
  <area alt="neo" title="neo" href="" coords="728,313,849,403" shape="rect">
  <area alt="minion" title="minion" href="" coords="1795,1587,1846,1652" shape="rect">
  <area alt="ash" title="ash" href="" coords="27,2530,87,2581" shape="rect">
  <area alt="jabba" title="jabba" href="" coords="1169,1017,1254,1133" shape="rect">
  <area alt="edward" title="edward" href="" coords="1099,2846,1182,2906" shape="rect">
  <area alt="link" title="link" href="" coords="371,3188,476,3285" shape="rect"> 

  https://imagemap.org/
  */