import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { LongCard } from "../component/cards";
import { Navbar } from "../component/navbar";

export const Home = () => (
  <div className="text-center mt-5">
    <img
      className="swportada"
      src="https://assets-prd.ignimgs.com/2022/05/25/starwarssaga-blogroll-1653501853399.jpg"
      alt="Star Wars Saga"></img>
      <LongCard/>
  </div>
  
);
