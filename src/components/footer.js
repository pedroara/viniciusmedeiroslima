import React from "react";
import V from "../images/v.jpeg";

function Footer() {
  return (
    <>
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

export default Footer;
