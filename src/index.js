import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home";
import Contatos from "./pages/contatos";
import Materiais from "./pages/materiais";
import Propostas from "./pages/propostas";
import Sobre from "./pages/sobre";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/sobre" component={Sobre} />
      <Route path="/materiais" component={Materiais} />
      <Route path="/contatos" component={Contatos} />
      <Route path="/propostas" component={Propostas} />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
