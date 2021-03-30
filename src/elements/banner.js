import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
function Banner() {
  return (
    <OwlCarousel
      className="owl-theme nav-btn"
      loop={true}
      startPosition={3}
      slideBy={1}
      margin={0}
      nav={true}
      dots={false}
      autoplay={true}
      items={1}
      navText={[
        "<span class='material-icons md-36 mycolor myborder-left'>keyboard_arrow_down</span>",
        "<span class='material-icons md-36 mycolor myborder-right'>keyboard_arrow_down</span>"
      ]}
    >
      <img
        className="img-fluid w-100 "
        alt=""
        data-src="https://www.hamleys.in/media/wysiwyg/Hamleys/Footer_Images/diicii_2602_web.jpg"
        src="https://www.hamleys.in/media/wysiwyg/Hamleys/Footer_Images/diicii_2602_web.jpg"
      />

      <img
        className="img-fluid w-100 "
        alt=""
        data-src="https://www.hamleys.in/media/wysiwyg/Hamleys/Footer_Images/zuru_web_0303.jpg"
        src="https://www.hamleys.in/media/wysiwyg/Hamleys/Footer_Images/zuru_web_0303.jpg"
      />

      <img
        className="img-fluid w-100 "
        alt=""
        data-src="https://www.hamleys.in/media/wysiwyg/Hamleys/Footer_Images/lol_web_0302.jpg"
        src="https://www.hamleys.in/media/wysiwyg/Hamleys/Footer_Images/lol_web_0302.jpg"
      />

      <img
        className="img-fluid w-100 "
        alt=""
        data-src="https://www.hamleys.in/media/wysiwyg/Hamleys/Footer_Images/spring_1503_web.jpg"
        src="https://www.hamleys.in/media/wysiwyg/Hamleys/Footer_Images/spring_1503_web.jpg"
      />
    </OwlCarousel>
  );
}
export default Banner;
