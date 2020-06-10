import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import home from "./pages/home";
import mural from "./pages/mural";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Login from "./pages/login";
import Registrar from "./pages/Registrar";

const routing = (
  <Router>
    <Navbar />
    <div className="app">
      <Route path="/registrar" component={Registrar} />
      <Route exact path="/" component={home} />
      <Route path="/mural" component={mural} />
      <Route path="/login" component={Login} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
