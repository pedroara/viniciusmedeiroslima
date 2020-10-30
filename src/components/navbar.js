import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
function Navbar() {
  return (
    <>
      <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand" to="/">
          <img src={Logo} width="120" height="60" alt="" />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/sobre">
                Sobre
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/propostas">
                Propostas
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/contatos">
                Contatos
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
