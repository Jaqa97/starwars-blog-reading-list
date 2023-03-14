import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const LongCard = () => {
  return (
    <div className="mt-4">
      <Link to="/characters">
        <button
          type="button"
          className="btn btn-warning mx-3"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          data-bs-whatever="Go to characters"
        >
          Go to characters
        </button>
      </Link>

      <button
        type="button"
        className="btn btn-warning"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="Go to locations"
      >
        Go to locations
      </button>
    </div>
  );
};

export const Card = ({titulo, ruta, descripcion}) => {
  return <div className="card m-3 border border-warning bg-dark" style={{width: "18rem"}}>
    <img src="https://qph.cf2.quoracdn.net/main-qimg-56e345e01b14d725a0eac2261ee80006-lq" className="card-img-top mt-2"/>
    <div className="card-body">
      <h5 className="card-title">{titulo}</h5>
      <p className="card-text"> {descripcion} </p>
      <div className="row">
        <div className="col-8">
          <Link to={ruta}>
            <a href="#" className="btn btn-warning">Ir al detalle</a>
          </Link>
        </div>
        <div className="col">
          <button className="btn btn-dark border border-warning">💛</button>
        </div>
      </div>
    </div>
  </div>
};
