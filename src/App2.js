import "./App.css";
import { Link } from "react-router-dom";

function App2() {
  return (
    <div>
      <div class="top">
        <div>
          <center>
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.N54Jw0wwZ4VNsDauDUKfUwHaHM&pid=Api&P=0"
              class="img-rounded"
              alt="Cinque Terre"
              width="100"
              height="100"
            />
          </center>
        </div>

        <center>
          <h1 class="heading">WELCOME TO K.R.PADU OFFICIAL</h1>
          <p class="heading2">Cricket Info of the players</p>
        </center>
        <h6 class="heading3">Developed by team RTR_ _</h6>
      </div>

      <div>
        <h5 class="text-center mt-3">
          New Tournament is Coming Up
          <div class="badge badge-secondary">New</div>
        </h5>
      </div>
      <div>
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
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://3.bp.blogspot.com/-Oc7U5HGSD1w/VlTtbOTyuLI/AAAAAAAAAZ8/yrjIYk2GGI0/s1600/2023%2Bvev.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://4.bp.blogspot.com/-cf7y1q-WGzY/VlTsTGHb_1I/AAAAAAAAAZM/pJ8CVCWK5q0/s1600/2023%2Bjnoj.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://3.bp.blogspot.com/-ZqieeG0_zm4/VlTr8HJwvTI/AAAAAAAAAYw/-NoehM0A-q8/s1600/2023%2Bihoo.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-4 mt-4">
              <div class="explore-menu-card shadow p-3 mb-3">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/10/10552.png"
                  class="explore-menu-card-image w-100 p-3"
                />
                <h1 class="explore-menu-card-title pl-3">Senior Players</h1>
                <Link to="/senior" class="explore-menu-card-link pl-3">
                  View
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    height="16px"
                    fill="#d0b200"
                    class="bi bi-arrow-right-short"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div class="col-4 mt-4">
              <div class="explore-menu-card shadow p-3 mb-3">
                <img
                  src="https://www.shutterstock.com/image-vector/cricket-player-vector-silhouette-600w-404121433.jpg"
                  class="explore-menu-card-image w-100 p-3"
                />
                <h1 class="explore-menu-card-title pl-3">Present Players</h1>
                <Link to="/present" class="explore-menu-card-link pl-3">
                  View{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    height="16px"
                    fill="#d0b200"
                    class="bi bi-arrow-right-short"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div class="col-4 mt-4">
              <div class="explore-menu-card shadow p-3 mb-3">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/10/10552.png"
                  class="explore-menu-card-image w-100 p-3"
                />
                <h1 class="explore-menu-card-title pl-3">Future Players</h1>
                <Link to="/future" class="explore-menu-card-link pl-3">
                  View{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    height="16px"
                    fill="#d0b200"
                    class="bi bi-arrow-right-short"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-section pt-5 pb-5">
          <div class="container">
            <div class="row">
              <div class="col-12 text-center">
                <img
                  src="https://tse1.mm.bing.net/th?id=OIP.iqTn18GAnwoBhRuoGBzfBgHaHh&pid=Api&P=0"
                  class="cricket"
                />
                <h1 class="footer-section-mail-id">
                  janniboinaraveendra123@gmail.com
                </h1>
                <p class="footer-section-address">
                  KamiReddyPadu(V), Ananthasagram(M), Nellore(Dt), A.P, INDIA
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="follow-us-section pt-5 pb-5" id="followusSection">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <h1 class="follow-us-section-heading">Follow Us</h1>
              </div>
              <div class="col-12">
                <div class="d-flex flex-row justify-content-center">
                  <div class="follow-us-icon-container">
                    <a href="https://twitter.com/i/flow/login">
                      <i class="fab fa-twitter icon1"></i>
                    </a>
                  </div>
                  <div class="follow-us-icon-container">
                    <a href="https://www.instagram.com/?hl=en">
                      <i class="fab fa-instagram icon2"></i>
                    </a>
                  </div>
                  <div class="follow-us-icon-container">
                    <a href="https://www.facebook.com/">
                      <i class="fab fa-facebook icon3"></i>
                    </a>
                  </div>
                  <div class="follow-us-icon-container">
                    <a href="https://www.youtube.com/">
                      <i class="fa-brands fa-youtube icon4"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="copy">
        <p>copyrights are reserved by Raveendra</p>
      </div>
    </div>
  );
}
export default App2;
