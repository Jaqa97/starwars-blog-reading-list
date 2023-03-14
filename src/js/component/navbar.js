import React from "react";
import "../../styles/navbar.css";
import { Link } from 'react-router-dom';

export const Navbar = () => {
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
						<Link class="nav-link active fs-4 text-warning" to="/locations">
							Locations
						</Link>
					</li>	
				</ul>
					<button class="btn btn-outline-warning me-4" type="submit">
					Favorites
					</button>
				
			</div>
      </div>
    </nav>
  );
};
