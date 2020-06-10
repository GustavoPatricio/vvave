import React from "react";
import "./css/registrar.css";
import $ from "jquery";
import "jquery-mask-plugin";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Cookies from "js-cookie";
const uuidv1 = require("uuid/v1");

class Registrar extends React.Component {
  state = {
    UUID: "",
    NOME_COMPLETO: "",
    USERNAME: "",
    EMAIL: "",
    TELEFONE: "",
    SENHA: "",
    CONFIRMA_SENHA: ""
  };

  componentWillMount() {
    if (Cookies.get("SID") != undefined) {
      window.location.pathname = "/";
    }
  }

  componentDidMount() {
    //mascara para o campo
    $("#inputTelefone").mask("(00) 00000-0000");

    //Evento do botão para cadastrar
    $("#ConfirmarButton").click(e => {
      e.preventDefault();
      this.cadastrarUsuario();
    });
  }

  //Cadastrando usurario (api)
  cadastrarUsuario() {
    this.setState({ UUID: uuidv1() });
    axios.post("http://localhost:5000/api/user/", this.state).then(res => {
      if (res.data == "success") {
        window.location.pathname = "/login";
      }
    });
  }

  validaRegistra = (e, campo) => {
    this.setState({ [campo]: e.target.value });
    var senha1 = document.getElementById("senha1");
    var senha2 = document.getElementById("senha2");
    var senhaContent = document.getElementById("senhaWrapper");
    var labelSenha1 = document.getElementById("labelSenha1");
    var labelSenha2 = document.getElementById("labelSenha2");

    if (senha1.value != senha2.value) {
      senhaContent.classList.add("senha");
      labelSenha1.classList.add("senhaError");
      labelSenha2.classList.add("senhaError");
    } else {
      senhaContent.classList.remove("senha");
      labelSenha1.classList.remove("senhaError");
      labelSenha2.classList.remove("senhaError");
    }
  };

  render() {
    return (
      <div id="regBody">
        <div id="background" />
        <div id="form">
          <form method="POST">
            <div className="form-content-text">
              <input
                type="text"
                name="nome"
                autoComplete="off"
                onChange={e => this.setState({ NOME_COMPLETO: e.target.value })}
                required
              />
              <label htmlFor="nome" className="label-name">
                <span className="content-name">Nome</span>
              </label>
            </div>

            <div className="form-content-text">
              <input
                type="text"
                name="username"
                autoComplete="off"
                onChange={e => this.setState({ USERNAME: e.target.value })}
                required
              />
              <label htmlFor="username" className="label-name">
                <span className="content-name">Nome de usuário</span>
              </label>
            </div>

            <div className="form-content-text">
              <input
                type="text"
                name="email"
                autoComplete="off"
                onChange={e => this.setState({ EMAIL: e.target.value })}
                required
              />
              <label htmlFor="email" className="label-name">
                <span className="content-name">Email</span>
              </label>
            </div>

            <div className="form-content-text">
              <input
                type="text"
                name="telefone"
                autoComplete="off"
                id="inputTelefone"
                onChange={e => this.setState({ TELEFONE: e.target.value })}
                required
              />
              <label htmlFor="telefone" className="label-name">
                <span className="content-name">Telefone</span>
              </label>
            </div>
            <div id="senhaWrapper">
              <div id="senhaContent">
                <div className="form-content-text" id="campoSenha1">
                  <input
                    type="password"
                    name="senha1"
                    autoComplete="off"
                    placeholder="Senha"
                    id="senha1"
                    onChange={e => this.validaRegistra(e, "SENHA")}
                    required
                  />
                  <label
                    htmlFor="senha1"
                    className="label-name"
                    id="labelSenha1"
                  >
                    <span className="content-name" />
                  </label>
                </div>
                <div className="form-content-text" id="campoSenha2">
                  <input
                    type="password"
                    name="senha2"
                    autoComplete="off"
                    onChange={e => this.validaRegistra(e, "CONFIRMA_SENHA")}
                    id="senha2"
                    placeholder="Confirmar senha"
                    required
                  />
                  <label
                    htmlFor="senha2"
                    className="label-name"
                    id="labelSenha2"
                  >
                    <span className="content-name" />
                  </label>
                </div>
              </div>
            </div>

            <div className="confirmaContainer">
              <button id="ConfirmarButton">Cadastrar</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Registrar;
