import React from "react";
import navbarfx from "../navbarfx";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

class Navbar extends React.Component {
  state = {
    logado: false
  };

  componentWillMount() {
    if (Cookies.get("SID") != undefined) {
    }
  }

  componentDidMount() {
    navbarfx();
  }

  render() {
    return (
      <div>
        <nav id="navbar">
          <i className="material-icons" id="idBurgerIcon">
            menu
          </i>
          <Link to="/" id="logoContainer">
            <img src="assets/images/logo.png" id="idLogo" />
          </Link>
        </nav>
        <div id="navSwitch" />
        <div id="sideNav">
          <ul>
            <Link to="/">
              <li className="sideNavLink">Home</li>
            </Link>
            <Link to="/mural">
              <li className="sideNavLink">Mural</li>
            </Link>
            <Link to="/registrar">
              <li className="sideNavLink" id="criarConta">
                Criar conta
              </li>
            </Link>
            <Link to="/login">
              <li className="sideNavLink">Entrar</li>
            </Link>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
