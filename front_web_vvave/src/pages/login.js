  import "./css/login.css";
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import $ from "jquery";
import "jquery-mask-plugin";
import Cookies from "js-cookie";

class Login extends React.Component {
  state = {
    email: "",
    senha: ""
  };

  componentWillMount() {
    if (Cookies.get("SID") != undefined) {
      window.location.pathname = "/";
    }
  }

  componentDidMount() {
    $("#loginButton").click(e => {
      e.preventDefault();
      this.login();
    });
  }

  login() {
    axios
      .post("http://localhost:5000/api/auth/", this.state)
      .then(res => {
        var webUser = res.data;
        Cookies.set("SID", res.data.uuid);
        window.location.pathname = "/";


        session.storag
      })
      .catch(err => {
        console.log(err.response.status);
      });
  }

  render() {
    return (
      <div id="loginContent">
        <div id="loginBackground" />
        <div id="loginWrapper">
          <form method="POST">
            <div className="form-content-text">
              <input
                type="text"
                name="email"
                autoComplete="off"
                placeholder="Email"
                onChange={e => this.setState({ email: e.target.value })}
                required
                style={{ fontSize: 1.1 + "vw" }}
                id="emailInput"
              />
              <label htmlFor="email" className="label-name" id="loginLabel">
                <span className="content-name" />
              </label>
            </div>

            <div className="form-content-text">
              <input
                type="password"
                name="username"
                autoComplete="off"
                placeholder="Senha"
                onChange={e => this.setState({ senha: e.target.value })}
                required
                style={{ fontSize: 1.1 + "vw" }}
                id="passwordInput"
              />
              <label
                htmlFor="username"
                className="label-name"
                id="passwordLabel"
              >
                <span className="content-name" />
              </label>
            </div>

            <div className="confirmaContainer">
              <button id="loginButton">Entrar</button>
            </div>
            <div id="loginCadRedirect">
              <Link to="/registrar">
                <span> Ainda não possui uma conta ? cadastre-se</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
