import React from "react";

import contato from "../images/contato.jpeg";
import V from "../images/v.jpeg";
function Contatos() {
  return (
    <>
      <div style={{ height: 0, width: "100vw", marginBottom: "90px" }}></div>

      <div
        class="row d-flex justify-content-center "
        style={{ backgroundImage: `url(${V})` }}
      >
        <img class="d-block w-100" src={contato} alt="Third slide" />
      </div>
    </>
  );
}

export default Contatos;
