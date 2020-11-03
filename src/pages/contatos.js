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
      <footer
        class="card-footer font-small blue-grey"
        style={{ backgroundImage: `url(${V})` }}
      >
        <div class="container">
          <div class="row d-flex justify-content-center bg-lighten-5">
            <div class="col-md-6">
              <div class="embed-responsive embed-responsive-16by9 mb-4">
                <iframe
                  title="Video da campanha"
                  class="embed-responsive-item"
                  src="https://www.youtube.com/embed/kcBAKZnl5GA"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Contatos;
