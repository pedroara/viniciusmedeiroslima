import React from "react";

import HomeImg from "../images/home.jpeg";

function Home() {
  return (
    <>
      <div style={{ height: 0, width: "100vw", marginBottom: "10vh" }}></div>
      <div>
        <img class="d-block w-100 " src={HomeImg} alt="Imagem" />
      </div>
    </>
  );
}

export default Home;
