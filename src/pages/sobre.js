import React from "react";

import SobreImg from "../images/sobre.jpeg";

function Sobre() {
  return (
    <>
      <div style={{ height: 0, width: "100vw", marginBottom: "100px" }}></div>
      <div class="row d-flex justify-content-center ">
        <img class="d-block w-100 " src={SobreImg} alt="Imagem" />
      </div>
    </>
  );
}

export default Sobre;
