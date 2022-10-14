import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../../App.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <div className="container">
            <Link to="/" className="fs-3 ubuntu navbar-brand">
                    Rick & Morty <span className="text-primary">WiKi</span>
            </Link>
                <style jsx>
                    {`
                    button[aria-expanded="false"] > .close{
                        display : none;
                    }

                    button[aria-expanded="true"] > .open{
                        display : none;
                    }
                    `}
                </style>

                <button 
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                
                    <span class="fas fa-bars open fw-bold text-dark"></span>
                    <spa class="fas fa-times close fw-bold text-dark"></spa>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <ul className="navbar-nav fs-5">
                        <li>
                            <NavLink exact to="/" className="nav-link" activeClassName="active">Characters</NavLink>
                        </li>
                        <li>
                            <NavLink to="/episodes" className="nav-link">Episodes</NavLink>
                        </li>
                        <li>
                            <NavLink to="/location" className="nav-link">Location</NavLink>
                        </li>     
                    </ul>
                </div>
            </div>
        </nav>
  );
};

export default Navbar;
