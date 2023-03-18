import React, {useContext} from "react";
import { Card, Cardplanetas } from "../component/cards";
import { LongCard } from "../component/cards";
import { Link } from "react-router-dom";
import {Context} from "../store/appContext"


export const Planets = () => {
    const { store } = useContext(Context);
  
    return (
      <div className="container text-center">
        <h1 className="text-light border-bottom border-warning rounded-pill p-1">
          Discover all Star Wars Characters!
        </h1>
        <div className="row">
          {store.planetas.map((elm, index) => (
            <Cardplanetas
              titulo={elm.name}
              id={elm.uid}
              ruta={"/detalle/planetas/" + elm.uid}
            />
          ))}
        </div>
      </div>
    );
  };