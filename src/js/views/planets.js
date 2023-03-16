import React, {useContext} from "react";
import { Card } from "../component/cards";
import { LongCard } from "../component/cards";
import { Link } from "react-router-dom";
import {Context} from "../store/appContext"


export const Planets = () => {

    const {store, actions} = useContext(Context);
    return <div className="container text-center ">
        <h1 className="text-light border-bottom border-warning rounded-pill p-1">Discover all Star Wars Planets!</h1>
        <div className="row">
            {store.planetas.map((objeto, index)=>{
                return <Card titulo = {objeto.name} />
            })}
            
        </div>
    </div>
    
};