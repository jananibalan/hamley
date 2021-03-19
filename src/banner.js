import React from "react";
import ReactDOM from "react-dom";
function Banner() {
  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-interval="2000">
          <img
            className="img-fluid w-100 "
            alt=""
            data-src="https://www.hamleys.in/media/wysiwyg/Hamleys/Footer_Images/diicii_2602_web.jpg"
            src="https://www.hamleys.in/media/wysiwyg/Hamleys/Footer_Images/diicii_2602_web.jpg"
          />
        </div>
        <div className="carousel-item" data-interval="2000">
          <img
            className="img-fluid w-100 "
            alt=""
            data-src="https://www.hamleys.in/media/wysiwyg/Hamleys/Footer_Images/zuru_web_0303.jpg"
            src="https://www.hamleys.in/media/wysiwyg/Hamleys/Footer_Images/zuru_web_0303.jpg"
          />
        </div>
        <div className="carousel-item" data-interval="2000">
          <img
            className="img-fluid w-100 ls-is-cached "
            alt=""
            data-src="https://www.hamleys.in/media/wysiwyg/Hamleys/Footer_Images/lol_web_0302.jpg"
            src="https://www.hamleys.in/media/wysiwyg/Hamleys/Footer_Images/lol_web_0302.jpg"
          />
        </div>
        <div className="carousel-item" data-interval="2000">
          <img
            className="img-fluid w-100 "
            alt=""
            data-src="https://www.hamleys.in/media/wysiwyg/Hamleys/Footer_Images/spring_1503_web.jpg"
            src="https://www.hamleys.in/media/wysiwyg/Hamleys/Footer_Images/spring_1503_web.jpg"
          />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleInterval"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleInterval"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
}
export default Banner;
