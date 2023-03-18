import React, { useContext } from "react";
import "../../styles/navbar.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <Link to="/">
          <img
            className="swlogo ms-4"
            src="https://cursowp.com.ar/wp/wp-content/uploads/2022/10/starwars-6-569425.png"
          />
        </Link>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item ms-4">
              <Link class="nav-link active fs-4 text-warning" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item ms-4">
              <Link class="nav-link active fs-4 text-warning" to="/characters">
                Characters
              </Link>
            </li>
            <li class="nav-item ms-4">
              <Link class="nav-link active fs-4 text-warning" to="/planets">
                Planets
              </Link>
            </li>
          </ul>

          <div class="btn-group dropstart">
            <button
              type="button"
              class="dropdown-toggle btn btn-outline-warning me-4"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favorites
            </button>
            <ul class="dropdown-menu bg-dark">
              {store.favoritos.map((value, index) => {
                return (
                  <li
                    key={index} className="list-group-item rounded bg-dark border-warning text-light">
						
                    	<i class="me-2 ms-2 fas fa-trash text-warning" onClick={()=>{
							actions.deleteFav(value.id);
					}}></i>
					{value.name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
