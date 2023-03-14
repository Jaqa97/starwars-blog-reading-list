import React from "react";
import { Card } from "../component/cards";
import { LongCard } from "../component/cards";
import { Link } from "react-router-dom";

export const Characters = () => (
    <div className="container text-center ">
        <h1 className="text-light border-bottom border-warning rounded-pill p-1">Discover all Star Wars Characters</h1>
        <div className="row">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
    
  );
  
