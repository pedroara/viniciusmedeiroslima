import React from "react";

import Proposta1 from "../images/Proposta1.jpeg";
import Proposta2 from "../images/Proposta2.jpeg";
import Proposta3 from "../images/Proposta3.jpeg";
import Proposta4 from "../images/Proposta4.jpeg";
import Proposta5 from "../images/Proposta5.jpeg";
import Proposta6 from "../images/Proposta6.jpeg";
import Proposta7 from "../images/Proposta7.jpeg";
import Proposta8 from "../images/Proposta8.jpeg";
import Proposta9 from "../images/Proposta9.jpeg";
import Proposta10 from "../images/Proposta10.jpeg";
import Proposta11 from "../images/Proposta11.jpeg";
import Proposta12 from "../images/Proposta12.jpeg";
import Proposta13 from "../images/Proposta13.jpeg";
import Proposta14 from "../images/Proposta14.jpeg";
import PropostaP1 from "../images/PropostaP1.jpeg";
import PropostaP2 from "../images/PropostaP2.jpeg";
import V from "../images/v.jpeg";

function Propostas() {
  return (
    <div style={{ backgroundImage: `url(${V})` }}>
      <div style={{ height: 0, width: "100vw", marginBottom: "90px" }}></div>
      <h1 style={{ textAlign: "center", color: "#FFF" }}>Propostas</h1>
      <div
        class="row d-flex justify-content-center "
        style={{ backgroundImage: `url(${V})` }}
      >
        <img
          class="d-block w-75 d-sm-none"
          src={PropostaP1}
          alt="Third slide"
        />
        <img className="d-block w-75" src={PropostaP2} alt="Third slide" />
      </div>
      <div
        style={{
          backgroundImage: `url(${V})`,
        }}
      >
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="8"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="9"></li>
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="10"
            ></li>
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="11"
            ></li>
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="12"
            ></li>
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="13"
            ></li>
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="14"
            ></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src={Proposta1} alt="First slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src={Proposta2} alt="Second slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100 " src={Proposta3} alt="Third slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100 " src={Proposta4} alt="Third slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100 " src={Proposta5} alt="Third slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100 " src={Proposta6} alt="Third slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100 " src={Proposta7} alt="Third slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100 " src={Proposta8} alt="Third slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100 " src={Proposta9} alt="Third slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100 " src={Proposta10} alt="Third slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100 " src={Proposta11} alt="Third slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100 " src={Proposta12} alt="Third slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100 " src={Proposta13} alt="Third slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100 " src={Proposta14} alt="Third slide" />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Anterior</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Próximo</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Propostas;
