import React, { useEffect, useState } from "react";
import "../../styles/detallecharacters.css";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

export const DetalleCharacters = () => {
  const { id } = useParams();
  const [people, setPeople] = useState({});
  useEffect(() => {
    fetch("https://www.swapi.tech/api/people/" + id)
      .then((response) => response.json())
      .then((data) => {
        setPeople(data.result);
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
          <h2>{people?.properties?.name}</h2>
          <ul className="mt-4">
            <li>Height: {people?.properties?.height}</li>
            <li> Mass: {people?.properties?.mass}</li>
            <li> Hair Color: {people?.properties?.hair_color}</li>
            <li>Skin Color: {people?.properties?.skin_color}</li>
            <li>Eye Color: {people?.properties?.eye_color}</li>
            <li> Birth Year: {people?.properties?.birth_year}</li>
            <li> Gender: {people?.properties?.gender}</li>
            <li> Created: {people?.properties?.created}</li>
            <li> Edited: {people?.properties?.edited}</li>
            <li> Homeworld: {people?.properties?.homeworld}</li>
          </ul>
        </p>{" "}
        </div>
      </div>
    </div>
  );
};
