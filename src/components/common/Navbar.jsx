import React from 'react';
import { Link } from 'react-router-dom';
import SearchForm from '../container/SearchForm'

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-light bg-dark mb-5 justify-content-between">
          <div className="navbar-brand">
            <Link className="navbar-brand text-white text-lg brand-text float-right" to="/">
              Sumit's Gallery
            </Link>
          </div>
          <SearchForm/>  
          <ul className="navbar-nav ml-auto text-light d-inline-block">
            <li className="nav-item d-inline-block ">
              <i className="fab fa-react fa-2x" id="react-logo" />
            </li>
          </ul>
      </nav>
    </div>
  );
}

export default Navbar;
