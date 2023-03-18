import React, { useEffect, useState } from "react";
import "../../styles/detallecharacters.css";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

export const DetallePlanetas = () => {
  const { id } = useParams();
  const [planetas, setPlanetas] = useState({});
  useEffect(() => {
    fetch("https://www.swapi.tech/api/planets/" + id)
      .then((response) => response.json())
      .then((data) => {
        setPlanetas(data.result);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img
            className="personajefoto"
            src="https://yt3.googleusercontent.com/NLJIsq7K-Qr7AMpHkLstcm9F_ZQzel_CYngyfJvAuBoOzyICVBlpXZzmGlMFqhD1PoV1bJwoxyk=s900-c-k-c0x00ffffff-no-rj"
          />
        </div>
        <div className="col-6 text-light">
          <p className="card-text">
            <h2>{planetas?.properties?.name}</h2>
            <ul className="mt-4">
              <li>Diameter: {planetas?.properties?.diameter}</li>
              <li> Rotation period: {planetas?.properties?.rotation_period}</li>
              <li> Orbital period: {planetas?.properties?.orbital_period}</li>
              <li> Gravity: {planetas?.properties?.gravity}</li>
              <li> Population: {planetas?.properties?.population}</li>
              <li> Climate: {planetas?.properties?.climate}</li>
              <li> Terrain: {planetas?.properties?.terrain}</li>
              <li> Surface water: {planetas?.properties?.surface_water}</li>
            </ul>
          </p>{" "}
        </div>
      </div>
    </div>
  );
};
